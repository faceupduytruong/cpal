    <!-- 👉 Ngăn không cho nhập dấu cách vào ô -->
    function suggestKeyword() {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    const keyword = suggestions[randomIndex];
    document.getElementById("searchInput").value = keyword;
    }

 // 👉 Ngăn không cho nhập dấu cách
    function blockSpace(e) {
    if (e.key === ' ') {
      e.preventDefault(); // Ngăn không cho nhập dấu cách
    }
  }

  <!-- 👉 Xóa ô nhập vào ô tìm kiếm -->
  // Hàm xóa nội dung ô nhập
  document.getElementById("DelBtn").onclick = function() {
    document.getElementById("searchInput").value = "";
  }

// 👉 Dán nội dung từ clipboard
document.getElementById("PasteBtn").onclick = async function() {
  try {
    const text = await navigator.clipboard.readText();
    document.getElementById("searchInput").value = text;
  } catch (err) {
    alert("Không thể truy cập clipboard. Hãy đảm bảo bạn đã cấp quyền.");
  }
};
