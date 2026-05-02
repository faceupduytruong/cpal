// Render feed ra card
function renderFeed(feed) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";
  
  feed.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const megaUrl = `https://mega.nz/fm/k4lH3BoZ`;

    card.innerHTML = `
      <input type="checkbox" class="compare-checkbox" data-path="${item.path}">
      <h3>${item.path}</h3>
      <p>📦 Dung lượng: ${item.size}</p>
      <p>📅 Ngày: ${item.date}</p>
      <a href="${megaUrl}" target="_blank">Xem thêm trên Mega</a>
    `;
    feedContainer.appendChild(card);
  });
}

async function fetchFeed(query) {
  const response = await fetch(`http://127.0.0.1:8000/feed?q=${encodeURIComponent(query)}`);
  const data = await response.json();
  renderFeed(data.feed);
}

let folderChart, yearChart;

async function fetchStats(query) {
  const url = query 
    ? `http://127.0.0.1:8000/stats?q=${encodeURIComponent(query)}`
    : `http://127.0.0.1:8000/stats`;

  const response = await fetch(url);
  const data = await response.json();

  if (folderChart) folderChart.destroy();
  if (yearChart) yearChart.destroy();

  const textColor = document.body.classList.contains("dark-mode") ? "#ffffff" : "#000000";

  // Bar chart với gradient xanh đọt chuối
  const ctx1 = document.getElementById("folderChart").getContext("2d");
  const barGradient = ctx1.createLinearGradient(0, 0, 0, 400);
  barGradient.addColorStop(0, "rgba(127, 255, 0, 0.5)");
  barGradient.addColorStop(1, "rgba(173, 255, 47, 0.5)");

  folderChart = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: Object.keys(data.folder_sizes),
      datasets: [{
        label: "Dung lượng (MB)",
        data: Object.values(data.folder_sizes),
        backgroundColor: barGradient
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

  // Line chart giữ nguyên màu đỏ
  const ctx2 = document.getElementById("yearChart").getContext("2d");
  yearChart = new Chart(ctx2, {
    type: "line",
    data: {
      labels: Object.keys(data.files_per_year),
      datasets: [{
        label: "Số lượng file",
        data: Object.values(data.files_per_year),
        borderColor: "rgba(255, 99, 132, 0.6)",
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

// Hàm tìm kiếm chung
async function doSearch() {
  const query = document.getElementById("query").value.trim();
  if (query) {
    await fetchFeed(query);
    await fetchStats(query);
  } else {
    document.getElementById("feed").innerHTML = "";
    await fetchStats();
  }
}

// Khi load trang
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
  fetchStats();
});

// Nút Search
document.getElementById("searchButton").addEventListener("click", doSearch);

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
      const table = document.createElement("table");
      table.className = "diff-table";

      // header động theo số file
      let header = "<tr><th>Sheet</th><th>Ô</th>";
      data.files.forEach((fname, idx) => {
        header += `<th>File${idx+1}: ${fname}</th>`;
      });
      header += "</tr>";
      table.innerHTML = header;

      // render từng dòng với màu nền khác nhau cho từng file
      data.diffs.forEach(diff => {
        let row = `<tr><td>${diff.sheet}</td><td>${diff.cell}</td>`;
        diff.values.forEach((val, idx) => {
          let bgColor = "";
          if (idx === 0) bgColor = "background:#ffe0e0"; // đỏ nhạt
          else if (idx === 1) bgColor = "background:#e0ffe0"; // xanh nhạt
          else if (idx === 2) bgColor = "background:#e0e0ff"; // xanh dương nhạt
          else if (idx === 3) bgColor = "background:#fff0b3"; // vàng nhạt
          // thêm màu khác nếu có nhiều file hơn
          row += `<td style="${bgColor}">${val ?? ""}</td>`;
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
  fetchStats(); // chỉ vẽ lại chart, không ghi đè kết quả so sánh
});

// Toggle chart hiển thị/ẩn
document.getElementById("toggleChart").addEventListener("click", () => {
  const chartContainer = document.getElementById("chartContainer");
  chartContainer.classList.toggle("hidden");
});
