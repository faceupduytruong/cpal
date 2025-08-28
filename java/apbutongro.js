// 👉 Chèn CSS vào DOM
const style = document.createElement('style');
style.textContent = `

.app-button {
  margin: 0px 0px; /* 0px trên/dưới, 30px trái/phải */
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.app-button:hover {
  transform: scale(1.1);
}

`;
document.head.appendChild(style);


// 👉 Biến lưu popup cho từng nền tảng

let popupWindows = {
  douyin: null,
  bilibili: null,
  kuaishou: null,
  zhihu: null,
  douban: null
};

// Hàm lấy nội dung từ ô input
function getQuery() {
  return document.getElementById("searchInput").value.trim();
}

// Hàm mở popup bên phải màn hình
function openRightHalfPopup(url, name, width, height) {
  const left = width / 2;
  const top = (window.innerHeight - height) / 2;
  const features = `width=${width / 2},height=${height},left=${left},top=${top}`;
  popupWindows[name.toLowerCase()] = window.open(url, name, features);
}

// Các hàm mở từng nền tảng

function openWeibo() {
  const query = getQuery(); // lấy nội dung từ ô input
  const encodedQuery = encodeURIComponent(`${query} m.weibo.cn`);
  const url = `https://www.google.com/search?q=${encodedQuery}`;
  openRightHalfPopup(url,"Weibo", window.innerWidth, 700);
}

function openDouyin() {
  const query = getQuery();
  const url = `https://www.douyin.com/search/${query}`;
  openRightHalfPopup(url,"Douyin", window.innerWidth, 700);
}

function openBilibili() {
  const query = getQuery();
  const url = `https://search.bilibili.com/all?keyword=${query}`;
  openRightHalfPopup(url,"Bilibili", window.innerWidth, 700);
}

function openYouku() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query).replace(/%20/g, '');
  const url = `https://so.youku.com/search/q_${encodedQuery}`;
  openRightHalfPopup(url,"Youku", window.innerWidth, 700);
}

function openIQiYi() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.iqiyi.com/search/${encodedQuery}.html`;
  openRightHalfPopup(url,"IQiYi", window.innerWidth, 700);
}

function openTencentVideo() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://v.qq.com/x/search/?q=${encodedQuery}&queryFrom=0`;
  openRightHalfPopup(url,"TencentVideo", window.innerWidth, 700);
}

function openSohuVideo() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://tv.sohu.com/mts/?key=${encodedQuery}`;
  openRightHalfPopup(url,"SohuVideo", window.innerWidth, 700);
}

function openXiaohongshu() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://news.qq.com/search?query=${encodedQuery}&page=1`;
  openRightHalfPopup(url,"Xiaohongshu", window.innerWidth, 700);
}

function openKuaishou() {
  const query = getQuery();
  const url = `https://www.kuaishou.com/search/video?searchKey=${encodeURIComponent(query)}`;
  openRightHalfPopup(url,"Kuaishou", window.innerWidth, 700);
}

function openZhihu() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(`${query} Zhihu`);
  const url = `https://www.google.com/search?q=${encodedQuery}`;
  openRightHalfPopup(url,"Zhihu", window.innerWidth, 700);
}

function openDouban() {
  const query = getQuery();
  const url = `https://www.douban.com/search?q=${query}`;
  openRightHalfPopup(url,"Douban", window.innerWidth, 700);
}

function openTencentQQ() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://news.qq.com/search?query=${encodedQuery}&page=1`;
  openRightHalfPopup(url,"TencentQQ", window.innerWidth, 700);
}

function openTalkin() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://news.qq.com/search?query=${encodedQuery}&page=1`;
  openRightHalfPopup(url,"Talkin", window.innerWidth, 700);
}

function openIzuiyou() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.izuiyou.com/search?keyword=${encodedQuery}`;
  openRightHalfPopup(url,"Izuiyou", window.innerWidth, 700);
}

function openInstagram() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.instagram.com/explore/tags/${encodedQuery}/`;
  openRightHalfPopup(url,"Instagram", window.innerWidth, 700);
}

function openThreads() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.threads.com/search?q=${encodedQuery}`; // giả định URL tìm kiếm
  openRightHalfPopup(url,"Threads", window.innerWidth, 700);
}

function openTwitterX() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://x.com/search?q=${encodedQuery}&src=typed_query`;
  openRightHalfPopup(url,"TwitterX", window.innerWidth, 700);
}

function openFacebook() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.facebook.com/search/top?q=${encodedQuery}`;
  openRightHalfPopup(url,"Facebook", window.innerWidth, 700);
}

function openYoutube() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.youtube.com/results?search_query=${encodedQuery}`;
  openRightHalfPopup(url,"Youtube", window.innerWidth, 700);
}

function openSpotify() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://open.spotify.com/search/${encodedQuery}`;
  openRightHalfPopup(url,"Spotify", window.innerWidth, 700);
} 

function openCenterManager() {
  const url = `file:///C:/Users/Admin/OneDrive/Documents/Reset%20System%20Windows/Music%20Playlist/index.html;
  openRightHalfPopup(url,"CenterManager", window.innerWidth, 700);
}

// 👉 Tạo giao diện nút app

const appsContainer = document.getElementById("appsContainer");

const appButtonsHTML = `

    <div class="app-button" onclick="openWeibo()">
      <img src="https://pp.myapp.com/ma_icon/0/icon_54191069_1679288303/256" alt="Weibo">
      <p>Weibo</p>
    </div>

    <div class="app-button" onclick="openDouyin()">
      <img src="https://i-2.paopaoche.net/2023/0824/cf4483a1aeb941529062bf9e7aae46e4.png" alt="Douyin">
      <p>Douyin</p>
    </div>

    <div class="app-button" onclick="openBilibili()">
      <img src="https://img.qqe2.com/uploadfile/gather/2023/0130/202301300457394167.jpg" alt="Bilibili">
      <p>Bilibili</p>
    </div>

    <div class="app-button" onclick="openYouku()">
      <img src="https://play-lh.googleusercontent.com/Ywld-qKkLSGxw7bdnZtOi5IRzSKHzX8VAx3NsMdL3Y5_zJeOhq7Q5AuRU947VUtddg=s256-rw" alt="Youku">
      <p>Youku</p>
    </div>

    <div class="app-button" onclick="openIQiYi()">
      <img src="https://pp.myapp.com/ma_icon/0/icon_7720_1754895658/256" alt="IQiYi">
      <p>IQiYi</p>
    </div>

    <div class="app-button" onclick="openTencentVideo()">
      <img src="https://img.mydown.com/uploadImages/app/2024/183/18/2G3CQ9YWUC26.png" alt="TencentVideo">
      <p>TencentVideo</p>
    </div>

    <div class="app-button" onclick="openSohuVideo()">
      <img src="https://pp.myapp.com/ma_icon/0/icon_6429_1745400293/256" alt="Sohu">
      <p>Sohu</p>
    </div>

    <div class="app-button" onclick="openXiaohongshu()">
      <img src="https://img.qudong51.net/uploadfile/gather/2023/0116/202301164480.jpg" alt="Xiaohongshu">
      <p>Xiaohongshu</p>
    </div>

<div class="app-button" onclick="openKuaishou()">
  <img src="https://pp.myapp.com/ma_icon/0/icon_12201150_1740551782/256" alt="Kuaishou">
  <p>Kuaishou</p>
</div>

<div class="app-button" onclick="openZhihu()">
  <img src="https://lh5.googleusercontent.com/proxy/8yF3jYS3DovqtKXlG6gzQZVrOd6uR4MXodcKxq6GVtcDThtDjdnvI6ioL4RHnkwiJm871yFkRXF9JbYZwKoUzWxYf70MeajVcrjxHGPd9Q" alt="Zhihu">
  <p>Zhihu</p>
</div>

<div class="app-button" onclick="openDouban()">
  <img src="https://img1.doubanio.com/f/frodo/144e6fb7d96701944e7dbb1a9bad51bdb1debe29/pics/app/logo.png" alt="Douban">
  <p>Douban</p>
</div>

   <div class="app-button" onclick="openTalkin()">
      <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxhIwgldVDmfUFNmGwzMh32ehpz2p4FMa.p9gO9.YMsK3o3p2viJq3hE3QfqCN_XQElt1IejeDht1YkbKac7P808-&format=webp" alt="Talkin">
      <p>Talkin</p>
    </div>

    <div class="app-button" onclick="openIzuiyou()">
      <img src="https://i-2.92sucai.com/2025/7/25/4741527e-234f-41ab-a7a1-0c829d59d491.png" alt="Izuiyou">
      <p>Izuiyou</p>
    </div>

    <div class="app-button" onclick="openTencentQQ()">
      <img src="https://img.xinhuaedu.cn/xinhuaedu/imgfile/20240905/05094144un8o.png" alt="TencentQQ">
      <p>TencentQQ</p>
    </div>

    <div class="app-button" onclick="openInstagram()">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
      <p>Instagram</p>
    </div>

    <div class="app-button" onclick="openThreads()">
      <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/threads-app-icon.png" alt="Threads">
      <p>Threads</p>
    </div>

    <div class="app-button" onclick="openTwitterX()">
      <img src="https://typefully.com/images/minimal-twitter/icon-base.png" alt="openTwitterX">
      <p>TwitterX</p>
    </div>

    <div class="app-button" onclick="openFacebook()">
      <img src="https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/Facebook.png" alt="openFacebook">
      <p>Facebook</p>
    </div>

    <div class="app-button" onclick="openYoutube()">
      <img src="https://alternative.me/media/256/youtube-center-icon-w3mdsze2r8ifo5gv-c.png" alt="openYoutube">
      <p>Youtube</p>
    </div>

    <div class="app-button" onclick="openSpotify()">
      <img src="https://cdn.jim-nielsen.com/ios/512/spotify-2012-06-25.png?rf=512" alt="openSpotify">
      <p>Spotify</p>
    </div>

    <div class="app-button" onclick="openCenterManager()">
      <img src="https://www.storagereview.com/wp-content/uploads/2021/04/thumb_256.png" alt="openCenterManager">
      <p>CenterManager</p>
    </div>

   <!-- 👉 Thêm nhiều app-button khác ở đây -->

`;

appsContainer.innerHTML = appButtonsHTML;


<!-- 👉 Khi ấn vào Xiaohongshu để vao 3 trang web  -->

    let clickCount = 0;

     function openXiaohongshu() {
       const query = getQuery();
       const encodedQuery = encodeURIComponent(`${query} #xiaohongshu# #小红书#`);

      switch (clickCount % 3) {
        case 0:
          // 🔍 YouTube
          const youtubeUrl = `https://www.youtube.com/results?search_query=${encodedQuery}`;
          openRightHalfPopup(youtubeUrl,"youtube", window.innerWidth, 700);
          break;
        case 1:
          // 🔍 Bilibili
          const bilibiliUrl = `https://search.bilibili.com/all?keyword=${encodedQuery}`;
          openRightHalfPopup(bilibiliUrl,"bilibili", window.innerWidth, 700);
          break;
        case 2:
          // 🔍 Douyin
          const douyinUrl = `https://www.douyin.com/search/${encodedQuery}`;
          openRightHalfPopup(douyinUrl,"douyin", window.innerWidth, 700);
          break;
      }
      clickCount++;
    }

<!-- 👉 Khi ấn vào Talkin để vao 3 trang web  -->

  let talkinClickCount = 0;

  function openTalkin() {
    const links = [
      "https://www.instagram.com/talk_in_talkin/",
      "https://www.facebook.com/profile.php?id=61555486984178",
      "https://www.reddit.com/user/talk_in_TalkIn/",
      "https://talkin.com.cn/moments",
      "https://x.com/GlobalTalkIn?s=20"
    ];

    const currentUrl = links[talkinClickCount % links.length];
    openRightHalfPopup(currentUrl,"Talkin", window.innerWidth, 700);
    talkinClickCount++;
  }





