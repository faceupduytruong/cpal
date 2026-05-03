// Render feed ra card
function renderFeed(feed) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";
  
  feed.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    let megaButton = "";
    if (item.export_link) {
      megaButton = `<a href="${item.export_link}" target="_blank">🔗 Mở trực tiếp trên Mega.nz</a>`;
    } else {
      megaButton = `<button class="share-btn" data-path="${item.path}">📤 Tạo link chia sẻ</button>`;
    }

    card.innerHTML = `
      <input type="checkbox" class="compare-checkbox" data-path="${item.path}">
      <h3>${item.path}</h3>
      <p>📦 Dung lượng: ${item.size}</p>
      <p>📅 Ngày: ${item.date}</p>
      ${megaButton}
    `;
    feedContainer.appendChild(card);
  });

  // gắn sự kiện cho nút "Tạo link chia sẻ"
  document.querySelectorAll(".share-btn").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const path = e.target.dataset.path;
      try {
        const response = await fetch(`http://127.0.0.1:8000/share?path=${encodeURIComponent(path)}`);
        const data = await response.json();
        if (data.share_link) {
          // thay nút bằng link mở trực tiếp
          e.target.outerHTML = `<a href="${data.share_link}" target="_blank">🔗 Mở trực tiếp trên Mega.nz</a>`;
        } else {
          alert("Không tạo được link chia sẻ: " + data.error);
        }
      } catch (err) {
        console.error("Lỗi tạo link chia sẻ:", err);
      }
    });
  });
}

async function fetchFeed() {
  try {
    const query = document.getElementById("query").value.trim();
    const response = await fetch(`http://127.0.0.1:8000/feed?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    renderFeed(data.feed);

    // Sau khi render feed, tự tính thống kê từ dữ liệu feed
    computeStatsFromFeed(data.feed);
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}

let folderChart, yearChart;

function computeStatsFromFeed(feed) {
  const folder_sizes = {};
  const files_per_year = {};

  feed.forEach(item => {
    // cộng dồn dung lượng theo folder gốc
    const folder = item.path.split("/")[0];
    // item.size hiện đang là chuỗi "0.08 MB", cần parse số
    let sizeNum = 0;
    if (typeof item.size === "string" && item.size.includes("MB")) {
      sizeNum = parseFloat(item.size.replace("MB", "").trim());
    } else if (!isNaN(item.size)) {
      sizeNum = parseFloat(item.size);
    }
    folder_sizes[folder] = (folder_sizes[folder] || 0) + sizeNum;

    // cộng dồn số lượng file theo năm
    const year = new Date(item.date).getFullYear();
    files_per_year[year] = (files_per_year[year] || 0) + 1;
  });

  drawCharts(folder_sizes, files_per_year);
}

function drawCharts(folder_sizes, files_per_year) {
  if (folderChart) folderChart.destroy();
  if (yearChart) yearChart.destroy();

  const textColor = document.body.classList.contains("dark-mode") ? "#ffffff" : "#000000";

  const ctx1 = document.getElementById("folderChart").getContext("2d");
  folderChart = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: Object.keys(folder_sizes),
      datasets: [{
        label: "Dung lượng (MB)",
        data: Object.values(folder_sizes),
        backgroundColor: "rgba(75, 192, 192, 0.6)" // giữ màu cũ
      }]
    },
    options: {
      plugins: { legend: { labels: { color: textColor } } },
      scales: {
        x: { ticks: { color: textColor } },
        y: { ticks: { color: textColor } }
      }
    }
  });

  const ctx2 = document.getElementById("yearChart").getContext("2d");
  yearChart = new Chart(ctx2, {
    type: "line",
    data: {
      labels: Object.keys(files_per_year),
      datasets: [{
        label: "Số lượng file",
        data: Object.values(files_per_year),
        borderColor: "rgba(255, 99, 132, 0.8)", // đỏ như cũ
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      plugins: { legend: { labels: { color: textColor } } },
      scales: {
        x: { ticks: { color: textColor } },
        y: { ticks: { color: textColor } }
      }
    }
  });
}

// Khi load trang, kiểm tra trạng thái đã lưu và vẽ chart tổng
window.addEventListener("DOMContentLoaded", async () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  try {
    // gọi feed tổng (backend cần hỗ trợ q=None)
    const response = await fetch("http://127.0.0.1:8000/feed?q=");
    const data = await response.json();
    renderFeed(data.feed);
    computeStatsFromFeed(data.feed); // vẽ chart tổng từ feed
  } catch (error) {
    console.error("Lỗi khi load feed tổng:", error);
  }
});

// So sánh 2 file text
async function compareFiles(path1, path2) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/compare?path1=${encodeURIComponent(path1)}&path2=${encodeURIComponent(path2)}`);
    const data = await response.json();

    const feedContainer = document.getElementById("feed");
    feedContainer.innerHTML = "";

    if (data.diff_html) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>So sánh phiên bản</h3>
        ${data.diff_html}
      `;
      feedContainer.appendChild(card);
    } else {
      feedContainer.innerHTML = "<p>Không thể so sánh file.</p>";
    }
  } catch (error) {
    console.error("Lỗi khi so sánh:", error);
  }
}

// So sánh nhiều file Excel
document.getElementById("compareBtn").addEventListener("click", () => {
  const checked = document.querySelectorAll(".compare-checkbox:checked");
  if (checked.length < 2) {
    alert("Vui lòng chọn ít nhất 2 file để so sánh.");
    return;
  }

  const paths = Array.from(checked).map(cb => cb.dataset.path);
  compareMultipleExcel(paths);
});

async function compareMultipleExcel(paths) {
  try {
    const response = await fetch("http://127.0.0.1:8000/compare_excel_multi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paths })
    });
    const data = await response.json();

    const compareContainer = document.getElementById("compareResult");
    compareContainer.innerHTML = "<h3>Kết quả so sánh Excel</h3>";

    if (!data.diffs || data.diffs.length === 0) {
      compareContainer.innerHTML += "<p>Các file giống nhau hoặc không thể so sánh.</p>";
    } else {
      // tạo mảng màu với hơn 20 màu
      const colors = [
        "#ffe0e0","#e0ffe0","#e0e0ff","#fff0b3","#f0d9ff","#d9f0ff",
        "#ffd9d9","#d9ffd9","#d9d9ff","#ffffd9","#ffd9ff","#d9ffff",
        "#fce4ec","#e8f5e9","#e3f2fd","#fff3e0","#f9fbe7","#ede7f6",
        "#e0f7fa","#fbe9e7","#f1f8e9","#f9fbe7"
      ];

      // gán màu ngẫu nhiên cho từng file
      const fileColors = data.files.map(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
      });

      // tạo legend
      let legendHtml = "<div class='legend'>";
      data.files.forEach((fname, idx) => {
        const color = fileColors[idx];
        legendHtml += `<span style="background:${color}">File${idx+1}: ${fname}</span>`;
      });
      legendHtml += "</div>";
      compareContainer.innerHTML += legendHtml;

      // tạo bảng
      const table = document.createElement("table");
      table.className = "diff-table";
      let header = "<tr><th>Sheet</th><th>Ô</th>";
      data.files.forEach((fname, idx) => {
        header += `<th>File${idx+1}</th>`;
      });
      header += "</tr>";
      table.innerHTML = header;

      data.diffs.forEach(diff => {
        let row = `<tr><td>${diff.sheet}</td><td>${diff.cell}</td>`;
        diff.values.forEach((val, idx) => {
          const bgColor = fileColors[idx];
          row += `<td style="background:${bgColor}">${val ?? ""}</td>`;
        });
        row += "</tr>";
        table.innerHTML += row;
      });
      compareContainer.appendChild(table);
    }

    // hiển thị đường dẫn file CSV đã xuất ra Desktop
    if (data.export_file) {
      compareContainer.innerHTML += `<p>File CSV đã lưu tại Desktop: ${data.export_file}</p>`;
    }
  } catch (error) {
    console.error("Lỗi khi so sánh nhiều Excel:", error);
  }
}

// Toggle theme
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");

  // vẽ lại chart theo theme hiện tại và dữ liệu feed đang hiển thị
  const feedContainer = document.getElementById("feed");
  const cards = feedContainer.querySelectorAll(".card");
  if (cards.length > 0) {
    const feed = Array.from(cards).map(card => {
      return {
        path: card.querySelector("h3").textContent,
        size: parseFloat(card.querySelector("p").textContent.replace("📦 Dung lượng:", "").replace("MB", "").trim()),
        date: card.querySelectorAll("p")[1].textContent.replace("📅 Ngày:", "").trim()
      };
    });
    computeStatsFromFeed(feed);
  }
});

// Toggle chart hiển thị/ẩn
document.getElementById("toggleChart").addEventListener("click", () => {
  const chartContainer = document.getElementById("chartContainer");
  chartContainer.classList.toggle("hidden");
});
