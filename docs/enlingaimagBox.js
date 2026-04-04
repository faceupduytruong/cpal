// Tạo HTML động
const container = document.createElement("div");
container.innerHTML = `

     <!-- Hàng thứ 1 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Easy-to-play Game</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2017/11/dao-vang-co-dien/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/08/09/dao-vang-co-dien-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đào vàng cổ điển (Gold Miner)</div>
      </div>
    
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/02/dao-vang/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/08/09/dao-vang-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đào vàng cải tiến (Gold Miner)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2014/09/pikachu/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/09/05/pikachu-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Pikachu Online</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2021/09/mui-ten-phep-thuat-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2021/09/12/mui-ten-phep-thuat-2-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Mũi tên phép thuật 2 (Bois DArc)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/11/crowdy-city/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/11/01/crowd-city-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Crowd City Online</div>
      </div>

 </div>

        <!-- Hàng thứ 2 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Puzzle Game</h2>
     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/05/xep-ngoc/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/05/16/xep-ngoc-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Xếp ngọc</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/12/xep-gach/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/12/28/xep-gach-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Xếp gạch</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/05/xep-gach-3d/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/05/09/xep-gach-3d-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Xếp gạch 3D</div>
      </div>
      
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/04/kim-cuong-co-dien-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2023/04/14/kim-cuong-co-dien-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Kim cương cổ điển 2</div>
      </div>
      
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2020/09/xep-hinh-kim-cuong/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://www.dropbox.com/scl/fi/h3kgz08o4fqyngzzjc40h/X-p-h-nh-kim-c-ng-Bejeweled-2.webp?rlkey=5f2c5bxbiljv8rmevbl4oczrv&st=3liltyoc&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Xếp hình kim cương (Bejeweled 2)</div>
      </div>
      
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/12/noi-kim-cuong-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/12/30/noi-kim-cuong-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Nối kim cương 2</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/05/khu-rung-nhiet-doi/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/05/07/khu-rung-nhiet-doi-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Khu rừng nhiệt đới (Forest Match)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2016/06/pha-kim-cuong-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2016/6/9/pha-kim-cuong-2.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Phá kim cương 2 (Deep Sea Jewels)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2015/05/cuoc-chien-kim-cuong/', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/12/26/cuoc-chien-kim-cuong-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cuộc chiến kim cương (Puzzle Battle)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2022/01/ngoi-den-huyen-bi/', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://st.gamevui.vn/images/image/2022/01/12/ngoi-den-huyen-bi-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Ngôi đền huyền bí (Temple Jewels)</div>
      </div>
      
     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/04/xep-khoi-go/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2023/04/24/xep-khoi-go-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Xếp khối gỗ</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/06/xep-khoi-go-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2023/06/13/xep-khoi-go-2-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Xếp khối gỗ 2</div>
      </div>

 </div>

        <!-- Hàng thứ 3 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Deep Sea Survival</h2>
     <div class="image-box">
       <div onclick="openRightHalfPopup('https://html5.gamedistribution.com/rvvASMiM/9ff4c1c62da64af98d32fe1a1b44ac0a/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5nYW1lZmxhcmUuY29tL2VtYmVkL21lZ2Etc2hhcmsvIiwicGFyZW50RG9tYWluIjoiZ2FtZWZsYXJlLmNvbSIsInRvcERvbWFpbiI6ImdhbWVmbGFyZS5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://www.dropbox.com/scl/fi/qs1jbe278wa6w4knfzyhm/Mega-Shark.webp?rlkey=2w51pjx39hwvyjio17qbs3pdb&st=97sd9xkh&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Mega Shark</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://html5.gamedistribution.com/865da0ef336b4f108062165b360085e9/?gd_sdk_referrer_url=https://gamevui.vn/ca-map-sieu-bao-chua/game', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/07/23/ca-map-sieu-bao-chua-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cá mập siêu bạo chúa</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://html5.gamedistribution.com/76681228c1134b7aa57ab4db8fc45477/?gd_sdk_referrer_url=https://gamevui.vn/ca-map-o-new-york/game', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2021/05/14/ca-map-o-new-york-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cá mập ở New York</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2017/04/ca-map-tan-cong-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2017/04/14/ca-map-tan-cong-2.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cá mập tấn công 2 (Shark Attack)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2021/04/ca-map-sieu-bao-chua-3/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2021/04/02/ca-map-sieu-bao-chua-3-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cá mập siêu bạo chúa 3</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2016/10/ham-ca-map/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2016/10/19/ham-ca-map-105.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Hàm cá mập</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/02/ham-ca-map-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2023/02/07/ham-ca-map-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Hàm cá mập 2</div>
      </div>
      
 </div>

        <!-- Hàng thứ 4 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Plants & Zoombie</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2025/09/plants-vs-zombie-lai-tao-27/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2025/09/04/pvz-lai-tao-26-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Plants Vs Zombie lai tạo (phiên bản 2.7)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2014/10/PlantsMonsters/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/03/21/hoa-qua-noi-gian-online-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Hoa quả nổi giận Online (Plants Vs Monsters)</div>
      </div>
      
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2024/02/hoa-qua-noi-gian/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/08/26/hoa-qua-noi-gian-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Hoa quả nổi giận (Plants vs Zombies)</div>
      </div>
     
 </div>

       <!-- Hàng thứ 5 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Arcade Racer</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2015/06/do-xe-tren-pho/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2015/6/17/do-xe-tren-pho.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đỗ xe trên phố (Park My Car 2)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/01/cuoc-dua-song-con/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/01/30/dua-xe-105.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cuộc đua sống còn (Survival Race)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/06/dua-oto-mao-hiem/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/06/21/dua-xe-mao-hiem-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đua ô tô mạo hiểm (Furious Car Racing)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2020/07/dua-mo-to-3d/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2020/07/10/dua-mo-to-3d-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đua mô tô 3D</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/05/dua-mo-to-nuoc/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/05/31/dua-mo-to-nuoc-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đua mô tô nước (Watercraft Rush)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/05/dua-xe-go-kart/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/05/24/dua-xe-go-kart-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đua xe Go Kart (Kizi Kart Racing)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/05/dua-xe-go-kart/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2017/09/01/mo-to-vuot-sa-mac-105.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Mô Tô Vượt Sa Mạc (Biker Lane)</div>
      </div>
      
 </div>

       <!-- Hàng thứ 6 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Playing Shooters</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.gameflare.com/embed/duckmageddon/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://www.dropbox.com/scl/fi/oq4nhngblpd108etuw9jf/B-n-v-t-Online-Duckmageddon.png?rlkey=6mdoped0ureeygyjtmg2bbjp6&st=4gn6iurd&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Bắn vịt Online (Duckmageddon)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/04/tho-san-alien/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/04/16/tho-san-alien-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Thợ săn Alien</div>
      </div>
      
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2021/02/tho-san-alien-4/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2021/02/20/tho-san-alien-200-a.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Thợ săn Alien 4 (Alien Hunter 4)</div>
      </div>

 </div>

       <!-- Hàng thứ 7 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Stickman Revival</h2>

</div>
 
      <!-- Hàng thứ 8 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Battle Game</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2017/12/than-sam-thor-diet-boss/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2017/12/16/than-sam-thor-105.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Thần sấm Thor diệt Boss (Thor Boss Battles)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/07/ben-10-giai-cuu-the-gioi/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/07/12/ben10-giai-cuu-the-gioi-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Ben 10 Giải cứu thế giới</div>
      </div>
      
 </div>

       <!-- Hàng thứ 9 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Role-playing Games</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/04/thoat-khoi-den-tho/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/04/13/thoat-khoi-den-tho-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Thoát khỏi đền thờ (Must Escape The Temple)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/05/temple-run-online/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/05/09/temple-run-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Temple Run (Pyramid Chase)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2015/09/ngoi-den-ki-bi/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2015/9/05/ngoi-den-ki-bi.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Ngôi đền kì bí (Crossy Temple)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2020/02/vuong-quoc-eldorado-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2020/02/11/vuong-quoc-eldorado-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Vương quốc Eldorado 2</div>
      </div>
      
 </div>

      <!-- Hàng thứ 10 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Intellectual Games</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2020/08/hoang-tu-ba-tu/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2020/08/27/hoang-tu-ba-tu-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Hoàng tử Ba Tư</div>
      </div>
    
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://html5.gamedistribution.com/aa83b59148f3459687d6c6382cd30e9d/?gd_sdk_referrer_url=https://gamevui.vn/tho-sua-ong-nuoc/game', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2020/08/24/tho-sua-ong-nuoc-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Thợ sửa ống nước</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/08/tho-noi-ong-nuoc-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/08/06/tho-noi-ong-nuoc-2-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Thợ nối ống nước 2</div>
      </div>
      
 </div>
 
      <!-- Hàng thứ 11 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Two-player Game</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/02/lang-mo-ai-cap/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/09/23/lang-mo-ai-cap-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Lăng mộ Ai Cập (Lost Pyramid)</div>
      </div>
      
 </div>

    <!-- Hàng thứ 12 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Gaming Station</h2>
      <div class="image-box">
  <div onclick="openRightHalfPopup('https://www.msn.com/en-us/play?cgfrom=cg_dsb_seeMore&cgdsbut=a&ocid=winpsearchboxexpcta2&cvid=29f698d2763f47bcaedbe41fe3eac233&nclid=C454E3BDEBC302605749250B25E31342&ts=1774102755469&nclidts=1774102755&tsms=469&PC=WSBDSB', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/4w2xxfqr20e1t6mu2i69c/Tr-m-Game-1-MSN.png?rlkey=vkxdu1wca3ljpvxirm0put79u&st=ocjmo65o&raw=1">
</div>
        <div class="caption">Trạm game 1 (MSN)</div>
      </div>

      <div class="image-box">
  <div onclick="openRightHalfPopup('https://www.y8.com/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/qsveqacu4m198midpc3kd/Tr-m-Game-2-Y8-Games.webp?rlkey=509ohvqszj8h57i5o431ssouy&st=q1ocavi2&raw=1">
</div>
        <div class="caption">Trạm game 2 (Y8 Games)</div>
      </div>

      <div class="image-box">
  <div onclick="openRightHalfPopup('https://www.gameflare.com/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/xdbvsf43lbmld7km43tqh/Tr-m-Game-3-360-Games.webp?rlkey=qzs0vijn164zl58ueeaiwcj8b&st=09yqb1ds&raw=1">
</div>
        <div class="caption">Trạm game 3 (Gameflare)</div>
      </div>
      
      <div class="image-box">
  <div onclick="openRightHalfPopup('https://gamevui.vn/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/enl69sscfuizkg8xpynyf/Tr-m-Game-4-360-Games.png?rlkey=seqnl4ajx2noji0c8qkccsd0s&st=z3xdu9h1&raw=1">
</div>
        <div class="caption">Trạm game 4 (Game vui)</div>
      </div>
  
</div>

`;

// Thêm vào DOM
document.body.appendChild(container);

// Định nghĩa style h2
const style = document.createElement('style');
style.textContent = `
  h2 {
    font-family: 'Great Vibes', cursive;
    font-weight: bold;
    color: white;
    animation: greenPulse 7s infinite;
    text-shadow:
      0 0 6px #006400,
      0 0 12px #228B22,
      1px 1px 4px rgba(0,0,0,0.3);
  }

@keyframes greenPulse {
  0% {
    text-shadow: 0 0 5px #7CFC00, 0 0 10px #32CD32, 0 0 20px #228B22;   /* Màu nhấp chớp của Music Station */
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 2px #006400, 0 0 4px #013220;
    opacity: 0.5;
  }
  100% {
    text-shadow: 0 0 5px #7CFC00, 0 0 10px #32CD32, 0 0 20px #228B22;
    opacity: 1;
  }
}
`;

document.head.appendChild(style);

// 👉 Sau khi thêm vào DOM, gọi lại applyColor
const glassElements = document.querySelectorAll(".glass-bg");
const color = colors[0]; // hoặc dùng biến colorIndex nếu có

glassElements.forEach(el => {
  el.style.backgroundColor = color;
});

// Gọi lại sau khi DOM đã có .glass-bg
applyColor(colorIndex);
