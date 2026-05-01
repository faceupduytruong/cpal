function renderFeed(feed) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";
  
  feed.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const megaUrl = `https://mega.nz/fm/k4lH3BoZ`;

    card.innerHTML = `
      <h3>${item.path}</h3>
      <p>📦 Dung lượng: ${item.size}</p>
      <p>📅 Ngày: ${item.date}</p>
      <a href="${megaUrl}" target="_blank">Xem thêm trên Mega</a>
    `;
    feedContainer.appendChild(card);
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
  // Tính dung lượng theo folder và số lượng file theo năm
  const folder_sizes = {};
  const files_per_year = {};

  feed.forEach(item => {
    // cộng dồn dung lượng theo folder gốc
    const folder = item.path.split("/")[0];
    folder_sizes[folder] = (folder_sizes[folder] || 0) + item.size;

    // cộng dồn số lượng file theo năm
    const year = new Date(item.date).getFullYear();
    files_per_year[year] = (files_per_year[year] || 0) + 1;
  });

  // Vẽ chart từ thống kê vừa tính
  drawCharts(folder_sizes, files_per_year);
}

function drawCharts(folder_sizes, files_per_year) {
  if (folderChart) folderChart.destroy();
  if (yearChart) yearChart.destroy();

  const textColor = document.body.classList.contains("dark-mode") ? "#ffffff" : "#000000";

  // Bar chart giữ nguyên màu cũ
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

  // Line chart giữ nguyên màu đỏ
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

  // Lấy feed tổng rồi vẽ chart từ feed
  const response = await fetch("http://127.0.0.1:8000/feed");
  const data = await response.json();
  renderFeed(data.feed);
  computeStatsFromFeed(data.feed);
});

// Toggle theme
document.getElementById("toggleTheme").addEventListener("click", async () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");

  // vẽ lại chart theo theme hiện tại và dữ liệu feed đang hiển thị
  const feedContainer = document.getElementById("feed");
  const cards = feedContainer.querySelectorAll(".card");
  if (cards.length > 0) {
    // reconstruct feed data từ DOM nếu cần
    const feed = Array.from(cards).map(card => {
      return {
        path: card.querySelector("h3").textContent,
        size: parseFloat(card.querySelector("p").textContent.replace("📦 Dung lượng: ", "")),
        date: card.querySelectorAll("p")[1].textContent.replace("📅 Ngày: ", "")
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
