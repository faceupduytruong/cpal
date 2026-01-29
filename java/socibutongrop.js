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
  openRightHalfPopup(url,"Weibo", window.innerWidth, 745);
}

function openDouyin() {
  const query = getQuery();
  const url = `https://www.douyin.com/search/${query}`;
  openRightHalfPopup(url,"Douyin", window.innerWidth, 745);
}

function openBilibili() {
  const query = getQuery();
  const url = `https://search.bilibili.com/all?keyword=${query}`;
  openRightHalfPopup(url,"Bilibili", window.innerWidth, 745);
}

function openYouku() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query).replace(/%20/g, '');
  const url = `https://so.youku.com/search/q_${encodedQuery}`;
  openRightHalfPopup(url,"Youku", window.innerWidth, 745);
}

function openIQiYi() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.iqiyi.com/search/${encodedQuery}.html`;
  openRightHalfPopup(url,"IQiYi", window.innerWidth, 745);
}

function openTencentVideo() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://v.qq.com/x/search/?q=${encodedQuery}&queryFrom=0`;
  openRightHalfPopup(url,"TencentVideo", window.innerWidth, 745);
}

function openSohuVideo() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://tv.sohu.com/mts/?key=${encodedQuery}`;
  openRightHalfPopup(url,"SohuVideo", window.innerWidth, 745);
}

function openXiaohongshu() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://news.qq.com/search?query=${encodedQuery}&page=1`;
  openRightHalfPopup(url,"Xiaohongshu", window.innerWidth, 745);
}

function openKuaishou() {
  const query = getQuery();
  const url = `https://www.kuaishou.com/search/video?searchKey=${encodeURIComponent(query)}`;
  openRightHalfPopup(url,"Kuaishou", window.innerWidth, 745);
}

function openZhihu() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(`${query} Zhihu`);
  const url = `https://www.google.com/search?q=${encodedQuery}`;
  openRightHalfPopup(url,"Zhihu", window.innerWidth, 745);
}

function openDouban() {
  const query = getQuery();
  const url = `https://www.douban.com/search?q=${query}`;
  openRightHalfPopup(url,"Douban", window.innerWidth, 745);
}

function openTencentQQ() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://news.qq.com/search?query=${encodedQuery}&page=1`;
  openRightHalfPopup(url,"TencentQQ", window.innerWidth, 745);
}

function openTalkin() {
  const query = getQuery();
  const encodedQuery = encodeURIComponent(query);
  const url = `https://news.qq.com/search?query=${encodedQuery}&page=1`;
  openRightHalfPopup(url,"Talkin", window.innerWidth, 745);
  event.stopPropagation();              // Ngăn lan ra ngoài
  event.stopImmediatePropagation();     // Ngăn mọi listener khác xử lý
}

function openTalkinapp() {
  fetch('http://127.0.0.1:5000/run-talkin')
    .then(response => response.text())
    .then(data => {
      console.log("Đã gọi API:", data);
    })
    .catch(error => {
      console.error("Lỗi khi gọi API:", error);
      alert("We're having trouble connecting to the Flask server. Please verify that it's running properly.");
    });
}

function openIzuiyou() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.izuiyou.com/search?keyword=${encodedQuery}`;
  openRightHalfPopup(url,"Izuiyou", window.innerWidth, 745);
}

function openInstagram() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.instagram.com/explore/tags/${encodedQuery}/`;
  openRightHalfPopup(url,"Instagram", window.innerWidth, 745);
}

function openThreads() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.threads.com/search?q=${encodedQuery}`; // giả định URL tìm kiếm
  openRightHalfPopup(url,"Threads", window.innerWidth, 745);
}

function openTwitterX() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://x.com/search?q=${encodedQuery}&src=typed_query`;
  openRightHalfPopup(url,"TwitterX", window.innerWidth, 745);
}

function openFacebook() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.facebook.com/search/top?q=${encodedQuery}`;
  openRightHalfPopup(url,"Facebook", window.innerWidth, 745);
}

function openYoutube() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://www.youtube.com/results?search_query=${encodedQuery}`;
  openRightHalfPopup(url,"Youtube", window.innerWidth, 745);
}

function openSpotify() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://open.spotify.com/search/${encodedQuery}`;
  openRightHalfPopup(url,"Spotify", window.innerWidth*2 + 40, 745);
} 

function openSoundCloud() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://soundcloud.com/search?q=${encodedQuery}`;
  openRightHalfPopup(url, "SoundCloud", window.innerWidth*2 + 40, 745);
}

function openApplePodcast() {
  const query = getQuery(); // Hàm lấy từ khóa người dùng nhập
  const encodedQuery = encodeURIComponent(query);
  const url = `https://podcasts.apple.com/vn/search?term=${encodedQuery}`;
  openRightHalfPopup(url, "ApplePodcast", window.innerWidth*2 + 40, 745);
}

function openCenterManager() {
  const url = `file:///C:/Users/Admin/OneDrive/Documents/Reset%20System%20Windows/Music%20Playlist/index.html`;
  openRightHalfPopup(url, "CenterManager", window.innerWidth, 745);
}

// 👉 Tạo giao diện nút app

const appsContainer = document.getElementById("appsContainer");

const appButtonsHTML = `

    <div class="app-button" onclick="openWeibo()">
      <img src="https://www.dropbox.com/scl/fi/6297x4wp8ibhc302d8ljp/Weibo.webp?rlkey=i7nls8cz0hi72nk04zkb23pe7&st=6mua1ev1&raw=1" alt="Weibo">
      <p>Weibo</p>
    </div>

    <div class="app-button" onclick="openDouyin()">
      <img src="https://www.dropbox.com/scl/fi/cg9wc9e5n0e16p6irayu4/Douyin.webp?rlkey=lcxxvf2oj28vo5l9pnalb820d&st=6ed1fw1c&raw=1" alt="Douyin">
      <p>Douyin</p>
    </div>

    <div class="app-button" onclick="openBilibili()">
      <img src="https://www.dropbox.com/scl/fi/zd3m3rzxakc2gfzgely8o/Bilibili.jpg?rlkey=icpucu5tzsy82lyowc3qdt8bo&st=bzn8ldrg&raw=1" alt="Bilibili">
      <p>Bilibili</p>
    </div>

    <div class="app-button" onclick="openYouku()">
      <img src="https://www.dropbox.com/scl/fi/j4j4kez957fzqyuevsylr/Youku.webp?rlkey=hdxzo65qsxqf17zjn9wxwwv9a&st=gnhpl8vl&raw=1" alt="Youku">
      <p>Youku</p>
    </div>

    <div class="app-button" onclick="openIQiYi()">
      <img src="https://www.dropbox.com/scl/fi/trykdy2c373uko2jlkgfh/iQiYi.webp?rlkey=27g82n5je0rms2k5bqx4fqxw8&st=445bd7fd&raw=1" alt="IQiYi">
      <p>IQiYi</p>
    </div>

    <div class="app-button" onclick="openTencentVideo()">
      <img src="https://www.dropbox.com/scl/fi/jh7yxugmf6vagnfrctcyx/Tencent-Video.png?rlkey=v5r1ubh2z34ypwcsk6yverh6f&st=uz1czzc1&raw=1" alt="TencentVideo">
      <p>TencentVideo</p>
    </div>

    <div class="app-button" onclick="openSohuVideo()">
      <img src="https://www.dropbox.com/scl/fi/eegop4rbbpcyy7yo7rj6z/Sohu.webp?rlkey=1ntx0oas8a1xqshvw0xpro3ig&st=9gj6ti1g&raw=1" alt="Sohu">
      <p>Sohu</p>
    </div>

    <div class="app-button" onclick="openXiaohongshu()">
      <img src="https://img.qudong51.net/uploadfile/gather/2023/0116/202301164480.jpg" alt="Xiaohongshu">
      <p>Xiaohongshu</p>
    </div>

<div class="app-button" onclick="openKuaishou()">
  <img src="https://www.dropbox.com/scl/fi/x8xqxt4ughv3b7ygo6ojt/Kuaishou.webp?rlkey=eco68evlype3z1n65m904yg5e&st=vw7wq5xk&raw=1" alt="Kuaishou">
  <p>Kuaishou</p>
</div>

<div class="app-button" onclick="openZhihu()">
  <img src="https://www.dropbox.com/scl/fi/951il0t88s9bimug7slxr/Zhihu.png?rlkey=rcqz2n8f0e6nhjkv4l7rjm7pn&st=d27tuqb3&raw=1" alt="Zhihu">
  <p>Zhihu</p>
</div>

<div class="app-button" onclick="openDouban()">
  <img src="https://www.dropbox.com/scl/fi/ttjkemtt2q7ghb9bj3dw9/Douban.webp?rlkey=c2cb4sh4xuhhigo6n1lg065m3&st=1opfs9zm&raw=1" alt="Douban">
  <p>Douban</p>
</div>

   <div class="app-button" onclick="openTalkin()">
      <img src="https://www.dropbox.com/scl/fi/a6lh3un87j912difxmuve/Talkin.webp?rlkey=fj4a4sk3msnv6g786fegruy9o&st=fd5evmyr&raw=1" alt="Talkin">
      <p>Talkin</p>
    </div>

<div class="app-button" onclick="openTalkinapp()">
  <img src="https://www.dropbox.com/scl/fi/an2p6uqwmm5kcljufvv0w/Talkin-App.webp?rlkey=7szl915njsqfb3j88ldcajow8&st=1cqfwgtp&raw=1" alt="Talkin">
  <p>Talkin app</p>
</div>


    <div class="app-button" onclick="openIzuiyou()">
      <img src="https://www.dropbox.com/scl/fi/rcpibljmwj40l4wazfq7o/Izhuyou.webp?rlkey=8e76f5b2hdtei97d8qqdfag1n&st=tdvuckz9&raw=1" alt="Izuiyou">
      <p>Izuiyou</p>
    </div>

    <div class="app-button" onclick="openTencentQQ()">
      <img src="https://www.dropbox.com/scl/fi/0yembm6m5qwm1pmrzbq85/TenCentQQ.png?rlkey=ocj2mpv6gdsh0wnm367etm7id&st=jdamazq4&raw=1" alt="TencentQQ">
      <p>TencentQQ</p>
    </div>

    <div class="app-button" onclick="openInstagram()">
      <img src="https://www.dropbox.com/scl/fi/zxjm08zw81gq0fm1nkibx/Instagram.png?rlkey=haig1dvasuvmn1thut9yxx31r&st=8s0q0pok&raw=1" alt="Instagram">
      <p>Instagram</p>
    </div>

    <div class="app-button" onclick="openThreads()">
      <img src="https://www.dropbox.com/scl/fi/xmvobzp8ifuhz68rmrowf/Threads.webp?rlkey=8g00d1mhcaebpc753vnahbpq1&st=5tvegvh6&raw=1" alt="Threads">
      <p>Threads</p>
    </div>

    <div class="app-button" onclick="openTwitterX()">
      <img src="https://www.dropbox.com/scl/fi/hed2cor42a3hp1quantz4/TwitterX.png?rlkey=yqwwg3wcq6n8xb9w495ry5twe&st=zdkmw1xh&raw=1" alt="openTwitterX">
      <p>TwitterX</p>
    </div>

    <div class="app-button" onclick="openFacebook()">
      <img src="https://www.dropbox.com/scl/fi/a7l59ciiob78jltou2hlw/Facebook.png?rlkey=jy8nmcog1p501thighhnw4yt5&st=5bys6wm3&raw=1" alt="openFacebook">
      <p>Facebook</p>
    </div>

    <div class="app-button" onclick="openYoutube()">
      <img src="https://alternative.me/media/256/youtube-center-icon-w3mdsze2r8ifo5gv-c.png" alt="openYoutube">
      <p>Youtube</p>
    </div>

    <div class="app-button" onclick="openSpotify()">
      <img src="https://www.dropbox.com/scl/fi/bv3jp2l3pkgs4umipbogy/openSpotify.png?rlkey=0y7iw38rb9e5hb6n7ojq2jvuw&st=e8a56unp&raw=1" alt="openSpotify">
      <p>Spotify</p>
    </div>

    <div class="app-button" onclick="openSoundCloud()">
      <img src="https://www.dropbox.com/scl/fi/964zwolp59uah680kc4ra/openSoundCloud.png?rlkey=csc30ul16bcw65ocy9ap3tpg1&st=z741t92c&raw=1" alt="openSoundCloud">
      <p>SoundCloud</p>
    </div>

    <div class="app-button" onclick="openApplePodcast()">
      <img src="https://www.dropbox.com/scl/fi/kdmyqxj5zvj1df7vcu7c7/Apple-Podcast.png?rlkey=um6ci5ne0g709gcdyrfxx3i9e&st=zjghufoe&raw=1" alt="openApplePodcast">
      <p>ApplePodcast</p>
    </div>

    <div class="app-button" onclick="openCenterManager()">
      <img src="https://www.dropbox.com/scl/fi/d5yi0dtzkm6jhb12x2jvn/Center-Manager.png?rlkey=a42xtck18uu1oayzlkqput6pd&st=g190c0mc&raw=1" alt="openCenterManager">
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
          openRightHalfPopup(youtubeUrl,"youtube", window.innerWidth, 745);
          break;
        case 1:
          // 🔍 Bilibili
          const bilibiliUrl = `https://search.bilibili.com/all?keyword=${encodedQuery}`;
          openRightHalfPopup(bilibiliUrl,"bilibili", window.innerWidth, 745);
          break;
        case 2:
          // 🔍 Douyin
          const douyinUrl = `https://www.douyin.com/search/${encodedQuery}`;
          openRightHalfPopup(douyinUrl,"douyin", window.innerWidth, 745);
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
    openRightHalfPopup(currentUrl,"Talkin", window.innerWidth, 745);
    talkinClickCount++;
  }
