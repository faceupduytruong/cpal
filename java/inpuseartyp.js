    // 👉 Ngăn không cho nhập dấu cách vào ô
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

  // 👉 Xóa ô nhập vào ô tìm kiếm và xóa ClipboardText
  // Hàm xóa nội dung ô nhập
  document.getElementById("DelBtn").onclick = function() {
    document.getElementById("searchInput").value = "";
  }

  // 👉 Nút Copy: copy nội dung input vào clipboard và hiển thị
  document.getElementById("copyBtn").addEventListener("click", () => {
    const inputEl = document.getElementById("searchInput");
    const text = inputEl.value;
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        document.getElementById("clipboardText").textContent = "Đã copy: " + text;
      });
    }
  });
