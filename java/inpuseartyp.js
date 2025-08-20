    <!-- 👉 Ngăn không cho nhập dấu cách vào ô -->
    function suggestKeyword() {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    const keyword = suggestions[randomIndex];
    document.getElementById("searchInput").value = keyword;
    }
    function blockSpace(e) {
    if (e.key === ' ') {
      e.preventDefault(); // Ngăn không cho nhập dấu cách
    }
  }


  <!-- 👉 Xóa ô nhập vào ô tìm kiếm -->
  // Hàm xóa nội dung ô nhập
  document.getElementById("DelBtn").onclick = function() {
    document.getElementById("searchInput").value = "";
  };
