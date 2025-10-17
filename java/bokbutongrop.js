// 👉 Ứng dụng search books theo các đường dẫn

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