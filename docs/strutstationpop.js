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
        <button class="siteBtn" data-url="https://www.youtube.com/results?search_query=${encodeURIComponent(queryValue)}">      
          <img src="https://www.dropbox.com/scl/fi/2i2v4mc1l8icnv869mkbm/youtube.png?rlkey=q8ioeca7uldwhu9r449fwgi53&st=ref24m5q&raw=1" alt="Youtube" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://www.google.com/search?q=${encodeURIComponent(queryValue)}">      
          <img src="https://www.dropbox.com/scl/fi/xxcu48l8mq0daw943cpki/Google.png?rlkey=h3btnzpi3dz9jq8wpphebcr48&st=bv4kepqe&raw=1" alt="Google" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://www.nhaccuatui.com/">      
          <img src="https://www.dropbox.com/scl/fi/ilywv5hn7z6xueyorh5xj/Nhaccuatui.png?rlkey=2xhtctdrbqd3bv2ofsrovqzo6&st=74i4zdcu&raw=1" alt="Nhaccuatui" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://zingmp3.vn/">      
          <img src="https://www.dropbox.com/scl/fi/6xihpgdwqwt91ngxpr6bs/Zing-MP3.png?rlkey=zi7k3c27u5eqty2c6v12aoh4l&st=co4qxgnc&raw=1" alt="ZingMp3" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://www.1ting.com/">
          <img src="https://www.dropbox.com/scl/fi/t7xt4s4d2p1i5d3b3j507/1sting.png?rlkey=oiz3or637o7igpi0kvs99amgc&st=5xc6ot6e&raw=1" alt="1ting" class="icon-img">
        </button>
      <button class="siteBtn" data-url="https://y.qq.com/">
        <img src="https://www.dropbox.com/scl/fi/nx1nxitbx0424yc7imaae/QQmusic.png?rlkey=89qgl8y5oifteoyolf98cv5m2&st=nilu4zjl&raw=1" alt="QQ Music" class="icon-img">
      </button>
        <button class="siteBtn" data-url="https://music.163.com/">
          <img src="https://www.dropbox.com/scl/fi/67n1sqfcjx31t4ggil1qy/NetEase-Cloud.png?rlkey=2243wjys4d1kra3ssv3l81at5&st=5s84cc0c&raw=1" alt="NetEase Cloud" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://www.kugou.com/">
          <img src="https://www.dropbox.com/scl/fi/2e5nl75eph2txg364zk52/Kugou.png?rlkey=qov3wfmvhr7jzhmmyapggcpmg&st=eut4udin&raw=1" alt="Kugou" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://music.migu.cn/v5/#/musicLibrary/">
          <img src="https://www.dropbox.com/scl/fi/0owwaoqe5el47o3bm2dw6/Migu-v5.png?rlkey=4xjfbl0u6hk7bxnh7ez7be6ac&st=cnmz88j6&raw=1" alt="Migu Desktop" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://m.music.migu.cn/v4/">
          <img src="https://www.dropbox.com/scl/fi/p4u9rjrra27o2dxezipsn/Migu-v4.png?rlkey=q91m4bdtrg5ppn5avc0o2q1rq&st=29x4weqo&raw=1" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://www.yinyuetai.com/">
          <img src="https://www.dropbox.com/scl/fi/3ycexn6527d0jmzqavhjj/Yinyuetai.png?rlkey=4ciyepkix4m3187e4axryxzop&st=b6787kar&raw=1" class="icon-img">
        </button>
        <button class="siteBtn" data-url="https://www.9ku.com/music/">
          <img src="https://www.dropbox.com/scl/fi/0ozdqqpk14c32e81c0au8/9ku.png?rlkey=61rlzxx9oeeojk76wq4dx6b4g&st=2yrrpddm&raw=1" class="icon-img">
        </button>
        <!-- thêm các nút khác như Zing, QQ, NetEase, Kugou, Migu, Yinyuetai, 9ku -->
      </div>
    </div>
  `;
  document.body.appendChild(stationPopup);
}
