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
    const query = document.getElementById("query").value;
    const response = await fetch(`http://127.0.0.1:8000/feed?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    renderFeed(data.feed);
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}

// Khi load trang, kiểm tra trạng thái đã lưu
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
  fetchStats(); // vẽ biểu đồ ngay khi load
});

let folderChart, yearChart;

async function fetchStats() {
  const response = await fetch("http://127.0.0.1:8000/stats");
  const data = await response.json();

  if (folderChart) folderChart.destroy();
  if (yearChart) yearChart.destroy();

  const textColor = document.body.classList.contains("dark-mode") ? "#ffffff" : "#000000";

  const ctx1 = document.getElementById("folderChart").getContext("2d");
  folderChart = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: Object.keys(data.folder_sizes),
      datasets: [{
        label: "Dung lượng (MB)",
        data: Object.values(data.folder_sizes),
        backgroundColor: "rgba(75, 192, 192, 0.6)"
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
      labels: Object.keys(data.files_per_year),
      datasets: [{
        label: "Số lượng file",
        data: Object.values(data.files_per_year),
        borderColor: "rgba(255, 99, 132, 0.8)",
        fill: false
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

// Nút toggle theme: gộp lại một listener duy nhất
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  fetchStats(); // vẽ lại biểu đồ với màu chữ mới
});

// Toggle chart hiển thị/ẩn
document.getElementById("toggleChart").addEventListener("click", () => {
  const chartContainer = document.getElementById("chartContainer");
  chartContainer.classList.toggle("hidden");
});
