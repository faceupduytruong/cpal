// 👉 Ứng dụng search books theo các đường dẫn

  const bookList = document.getElementById('bookList');
  const bookFrame = document.getElementById('bookFrame');
  const popup = document.getElementById('popup');

  bookList.addEventListener('click', function (e) {
    const li = e.target.closest('li');
    if (li && li.dataset.src) {
      bookFrame.src = li.dataset.src;
      popup.style.display = 'block';
    }
  });

  function closePopup() {
    popup.style.display = 'none';
    bookFrame.src = '';
  }

function togglePopup(liElement) {
  const popup = liElement.querySelector('.popup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function openLink(url) {
  window.openRightHalfPopup(url, 'Popup', window.innerWidth*2, 698);
}

function clearSearch(event) {
  event.stopPropagation();              // Ngăn lan ra ngoài
  event.stopImmediatePropagation();     // Ngăn mọi listener khác xử lý
  document.getElementById("searchInput").value = "";
}

function suggestKeyword(event) {
  event.stopPropagation(); // 👈 Ngăn đóng popup
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  const keyword = suggestions[randomIndex];
  document.getElementById("searchInput").value = keyword;
}

document.getElementById("DelBtn").addEventListener("click", function(event) {
  event.stopPropagation();
  event.stopImmediatePropagation();
  document.getElementById("searchInput").value = "";
});

document.getElementById("suggestBtn").addEventListener("click", function(event) {
  event.stopPropagation();
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  const keyword = suggestions[randomIndex];
  document.getElementById("searchInput").value = keyword;
});

function openEpubViewer() {
  try {
  window.openRightHalfPopup("chrome-extension://jhhclmfgfllimlhabjkgkeebkbiadflb/reader.html", 'Popup', window.innerWidth * 2 + 40, 745);
  } catch (e) {
    alert("Không thể mở EPUB Viewer. Hãy kiểm tra xem extension đã được cài chưa.");
  }
}

function openCenterManager() {
  try {
  window.openRightHalfPopup("file:///C:/Users/Admin/OneDrive/Documents/Reset%20System%20Windows/Music%20Playlist/index.html", 'Popup', window.innerWidth, 698);
  } catch (e) {
    alert("Không thể mở EPUB Viewer. Hãy kiểm tra xem extension đã được cài chưa.");
  }
}

function openLink(baseUrl) {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) {
    alert("Vui lòng nhập từ khóa tìm kiếm.");
    return;
  }

  let finalUrl = baseUrl;

  if (baseUrl.includes("sobrief.com")) {
    finalUrl = `https://sobrief.com/search?q=${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("summarist.ai")) {
    finalUrl = `https://summarist.ai/summary/${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("brieflane.com")) {
    finalUrl = `https://brieflane.com/en/search?q=${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("booknote.ai")) {
    finalUrl = `https://www.booknote.ai/en?q=${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("notegpt.io")) {
    finalUrl = `https://notegpt.io/workspace/books?search=${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("nhasachmienphi.com")) {
    finalUrl = `https://nhasachmienphi.com/?s=${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("download.com.vn")) {
    finalUrl = `https://download.com.vn/s?q=${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("apple.com")) {
    const combinedQuery = "sách nói " + query;
    finalUrl = `https://podcasts.apple.com/vn/search?term=${encodeURIComponent(combinedQuery)}`;
  } else if (baseUrl.includes("youtube.com")) {
    finalUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("spotify.com")) {
    const combinedQuery = "sách nói " + query;
    finalUrl = `https://open.spotify.com/search/${encodeURIComponent(combinedQuery)}`;
  } else if (baseUrl.includes("redsvn.net")) {
    finalUrl = `https://redsvn.net/?s=${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("4shared.com")) {
    finalUrl = `https://www.4shared.com/web/q?query=${encodeURIComponent(query)}&category=2`;
  } else if (baseUrl.includes("bilibili.com")) {
    finalUrl = `https://search.bilibili.com/all?keyword=${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("facebook.com")) {
    finalUrl = `https://www.facebook.com/search/top?q=${encodeURIComponent(query)}`;
  } else if (baseUrl.includes("threads.com")) {
    finalUrl = `https://www.threads.com/search?q=${encodeURIComponent(query)}&serp_type=default`;
  }

  window.openRightHalfPopup(finalUrl, 'Popup', window.innerWidth * 2 + 40, 745);

}
