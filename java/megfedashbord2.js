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

    // gọi thêm fetchStats với query để cập nhật chart
    await fetchStats(query);
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}

let folderChart, yearChart;

async function fetchStats(query = "") {
  const url = query
    ? `http://127.0.0.1:8000/stats?q=${encodeURIComponent(query)}`
    : `http://127.0.0.1:8000/stats`;

  const response = await fetch(url);
  const data = await response.json();

  if (folderChart) folderChart.destroy();
  if (yearChart) yearChart.destroy();

  const textColor = document.body.classList.contains("dark-mode") ? "#ffffff" : "#000000";

  const ctx1 = document.getElementById("folderChart").getContext("2d");
  const barGradient = ctx1.createLinearGradient(0, 0, 0, 400);
  barGradient.addColorStop(0, "rgba(127, 255, 0, 0.6)");
  barGradient.addColorStop(1, "rgba(173, 255, 47, 0.6)");

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

  const ctx2 = document.getElementById("yearChart").getContext("2d");
  yearChart = new Chart(ctx2, {
    type: "line",
    data: {
      labels: Object.keys(data.files_per_year),
      datasets: [{
        label: "Số lượng file",
        data: Object.values(data.files_per_year),
        borderColor: "rgba(255, 99, 132, 0.8)", // giữ màu đỏ
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
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
  fetchStats(); // chart tổng khi load
});

// Toggle theme
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  // vẽ lại chart theo theme hiện tại
  const query = document.getElementById("query").value.trim();
  fetchStats(query);
});

// Toggle chart hiển thị/ẩn
document.getElementById("toggleChart").addEventListener("click", () => {
  const chartContainer = document.getElementById("chartContainer");
  chartContainer.classList.toggle("hidden");
});
