export function createStationPopup(queryValue) {
  if (document.getElementById("stationPopup")) return;
  const stationPopup = document.createElement("div");
  stationPopup.id = "stationPopup";
  stationPopup.className = "popup-hidden";
  stationPopup.innerHTML = `
    <div class="popup-content input-content">
      <button id="closeStationPopup" class="close-btn">❌</button>
      <h3>Explore Station</h3>
      <div class="button-group">
        <button class="siteBtn" data-url="https://www.youtube.com/results?search_query=ngh%C4%A9a+c%E1%BB%A7a+t%E1%BB%AB+${encodeURIComponent(queryValue)}">      
          <img src="https://www.dropbox.com/scl/fi/ibfnovje7ehn8zjvh94qp/Youtube.webp?rlkey=v882hy9iuucr57dlh32behq1a&st=sac16nwe&raw=1" alt="Youtube" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://www.google.com/search?q=ngh%C4%A9a+c%E1%BB%A7a+t%E1%BB%AB+${encodeURIComponent(queryValue)}">      
          <img src="https://www.dropbox.com/scl/fi/u7ce9ypn1v3eqcvdgjts5/Google.png?rlkey=wwijd2p1xodb2damwthltfq8k&st=yofwebs0&raw=1" alt="Google" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://vdict.com/${encodeURIComponent(queryValue)},1,0,0.html">      
          <img src="https://www.dropbox.com/scl/fi/6zczqwm78jemt0qe1u9sj/Vdict.png?rlkey=h2rnt5v31ismrtqo81jj4duwc&st=kvtufs1q&raw=1" alt="Nhaccuatui" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://m-dict.zlb.zapps.me/en_vn/find?keyword=${encodeURIComponent(queryValue)}">      
          <img src="https://www.dropbox.com/scl/fi/t8da50w9w3hwavlxb364z/m-dict.png?rlkey=yqmt6gnphppgptc7h44p8kahh&st=9gs90ule&raw=1" alt="ZingMp3" class="icon-img">
        </button>
        <button class="siteBtn" data-url="http://tratu.soha.vn/dict/en_vn/${encodeURIComponent(queryValue)}">
          <img src="https://www.dropbox.com/scl/fi/oimoh2s56c0ty5do31q1u/tra-t-soha.png?rlkey=sv0vegbc73szzgs4al4vs9irt&st=ygsardaj&raw=1" alt="1ting" class="icon-img">
        </button>
      <button class="siteBtn" data-url="https://www.tracau.vn/?s=${encodeURIComponent(queryValue)}">
        <img src="https://www.dropbox.com/scl/fi/d01td8nnig6zk1e8x9bmb/tracau.png?rlkey=vf13kzc6zd5yjjy7iuehlrru5&st=f72i9lf5&raw=1" alt="QQ Music" class="icon-img">
      </button>
        <button class="siteBtn" data-url="https://tudien.dolenglish.vn/static/search-result?q=${encodeURIComponent(queryValue)}">
          <img src="https://www.dropbox.com/scl/fi/nrv7o7ipu5sga4l7wrsvx/dolenglish.png?rlkey=oawq9dz9t9plmzm9tg58b9cp2&st=fuvh9yf6&raw=1" alt="NetEase Cloud" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://vtudien.com/anh-viet/dictionary/nghia-cua-tu-${encodeURIComponent(queryValue)}">
          <img src="https://www.dropbox.com/scl/fi/dk8wkqvvvo6a473h20zg4/vtudien.png?rlkey=lg4o4u6l0n8ql7qy57zil1nhj&st=cdze730g&raw=1" alt="Kugou" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://4.vndic.net/index.php?word=${encodeURIComponent(queryValue)}&dict=en_vi">
          <img src="https://www.dropbox.com/scl/fi/58igt4cq6bozoquv31yaa/vndic.png?rlkey=8zo3g6zfx5iebbakkb3mhdk1h&st=b0uyxfq5&raw=1" alt="Migu Desktop" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://dunno.ai/search/word/${encodeURIComponent(queryValue)}?hl=vi">
          <img src="https://www.dropbox.com/scl/fi/wtmbj2mhh2ysbd1643h4l/dunno.png?rlkey=ou1uz6kpm6mslhopwr4bl3bm9&st=luh8tubd&raw=1" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://vi.glosbe.com/en/vi/${encodeURIComponent(queryValue)}">
          <img src="https://www.dropbox.com/scl/fi/7hwc3qoc3vpx278sgnhpa/glosbe.png?rlkey=3zval18q3m65eae9wn7tjij3w&st=tpk2s9cx&raw=1" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://www.bing.com/translator?to=vi&setlang=vi">
          <img src="https://www.dropbox.com/scl/fi/3xx5zpqe5c4k8o8lw8zrb/bing.png?rlkey=yvydbyw9fvsuldxsa10pp1b7i&st=9dv1c35c&raw=1" class="icon-img">
        </button>
        <!-- thêm các nút khác như Zing, QQ, NetEase, Kugou, Migu, Yinyuetai, 9ku -->
      </div>
    </div>
  `;
  document.body.appendChild(stationPopup);
}
