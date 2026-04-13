// Tạo HTML động
const container = document.createElement("div");
container.innerHTML = `

     <!-- Hàng thứ 1 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Easy-to-play Game</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2017/11/dao-vang-co-dien/?gid=16994&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDE3LzExL2Rhby12YW5nLWNvLWRpZW4vIiwicmV0dXJudXJsIjoiaHR0cHM6Ly9nYW1ldnVpLnZuL2Rhby12YW5nLWNvLWRpZW4vZ2FtZSIsImdpZCI6IjE2OTk0IiwicmF0ZWRhZ2VzIjoiMCIsImV4cCI6MTc3NjAyNjkyMywiaWF0IjoxNzc1OTkwOTIzfQ.LYncMeJFFgZgZfqhGQIx9fRojZ8oPadJPWTycolH_es', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/08/09/dao-vang-co-dien-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đào vàng cổ điển (Gold Miner)</div>
      </div>
    
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2017/06/dao-vang-kieu-uc/?gid=14761&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDE3LzA2L2Rhby12YW5nLWtpZXUtdWMvIiwicmV0dXJudXJsIjoiaHR0cHM6Ly9nYW1ldnVpLnZuL2Rhby12YW5nLWtpZXUtdWMvZ2FtZSIsImdpZCI6IjE0NzYxIiwicmF0ZWRhZ2VzIjoiMCIsImV4cCI6MTc3NjAyNzIyNywiaWF0IjoxNzc1OTkxMjI3fQ.4X0Ptx-4n9OWj0PliinGcaX6jjI0-yLAwpY3W1q2FEQ', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2017/06/07/dao-vang-kieu-uc.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đào vàng kiểu úc (Gold Miner)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/11/cau-ca/?gid=283&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDE4LzExL2NhdS1jYS8iLCJyZXR1cm51cmwiOiJodHRwczovL2dhbWV2dWkudm4vY2F1LWNhL2dhbWUiLCJnaWQiOiIyODMiLCJyYXRlZGFnZXMiOiIwIiwiZXhwIjoxNzc2MDI3NDEzLCJpYXQiOjE3NzU5OTE0MTN9.YPco7aEGMEouc20523HvSDziduer7B4Hbpqd5FJrwMk', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/11/07/cau-ca-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Câu cá</div>
      </div>
     
     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2024/05/cau-ca-bien-sau-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/05/09/cau-ca-bien-sau-2-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Câu cá biển sâu 2</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2014/09/pikachu/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/09/05/pikachu-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Pikachu Online</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2026/03/ghep-3-hinh/?gid=24959&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDI2LzAzL2doZXAtMy1oaW5oIiwicmV0dXJudXJsIjoiaHR0cHM6Ly9nYW1ldnVpLnZuL2doZXAtMy1oaW5oL2dhbWUiLCJnaWQiOiIyNDk1OSIsInJhdGVkYWdlcyI6IjAiLCJleHAiOjE3NzYwMjYyMDIsImlhdCI6MTc3NTk5MDIwMn0.AmZKeNP3k0FO3MMk3CXTWAWMQvozd8mpmcBsrdetDbA', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2026/03/17/ghep-3-hinh-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Ghép 3 hình</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2022/10/pikachu-quai-thu/?gid=8541&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDIyLzEwL3Bpa2FjaHUtcXVhaS10aHUiLCJyZXR1cm51cmwiOiJodHRwczovL2dhbWV2dWkudm4vcGlrYWNodS1xdWFpLXRodS9nYW1lIiwiZ2lkIjoiODU0MSIsInJhdGVkYWdlcyI6IjAiLCJleHAiOjE3NzYwMjY2OTIsImlhdCI6MTc3NTk5MDY5Mn0.lj2ikNFbWcfYJdd-g-IWi8B2DzQfyzQ9ZqqRgq0uXiE', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2022/10/27/pikachu-quai-thu-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Pikachu quái thú</div>
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

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/08/Penalty-Shooters/?gid=10591&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDE5LzA4L1BlbmFsdHktU2hvb3RlcnMiLCJyZXR1cm51cmwiOiJodHRwczovL2dhbWV2dWkudm4vc3V0LXBlbmFsdHkvZ2FtZSIsImdpZCI6IjEwNTkxIiwicmF0ZWRhZ2VzIjoiMCIsImV4cCI6MTc3NjAwNjEwNSwiaWF0IjoxNzc1OTcwMTA1fQ.iFWggFyT4KcV0SFwdOIn6arcyRisYoVKg7HJFF-d9WY', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/08/20/sut-penalty-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Sút Penalty (Penalty Shooters)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2026/02/nhiem-vu-pha-gach/?gid=24947&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDI2LzAyL25oaWVtLXZ1LXBoYS1nYWNoIiwicmV0dXJudXJsIjoiaHR0cHM6Ly9nYW1ldnVpLnZuL25oaWVtLXZ1LXBoYS1nYWNoL2dhbWUiLCJnaWQiOiIyNDk0NyIsInJhdGVkYWdlcyI6IjAiLCJleHAiOjE3NzYwODE3MDYsImlhdCI6MTc3NjA0NTcwNn0.sh1M9T84F0OUrFXpz9JNEUQyhyH0S_23GaQ3b5KdJIw', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2026/02/28/nhiem-vu-pha-gach-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Nhiệm vụ phá gạch</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2021/08/ban-bong-pha-gach-2/?gid=20909&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDIxLzA4L2Jhbi1ib25nLXBoYS1nYWNoLTIiLCJyZXR1cm51cmwiOiJodHRwczovL2dhbWV2dWkudm4vYmFuLWJvbmctcGhhLWdhY2gtMi9nYW1lIiwiZ2lkIjoiMjA5MDkiLCJyYXRlZGFnZXMiOiIwIiwiZXhwIjoxNzc2MDgyMTIxLCJpYXQiOjE3NzYwNDYxMjF9.wW6d4tmPRDMlFeNVpJnMnSa60aV-XdRtzojyRl5k_3M', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2021/08/21/ban-bong-pha-gach-2-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Bắn bóng phá gạch 2</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/01/nem-bowling/?gid=5606&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDE5LzAxL25lbS1ib3dsaW5nLyIsInJldHVybnVybCI6Imh0dHBzOi8vZ2FtZXZ1aS52bi9ib3dsaW5nLTIvZ2FtZSIsImdpZCI6IjU2MDYiLCJyYXRlZGFnZXMiOiIwIiwiZXhwIjoxNzc2MTExMDc3LCJpYXQiOjE3NzYwNzUwNzd9.xwc0C4G2cYBVbR3BQd2U1_ppivYodTUvAC2IlJr-WRU', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/01/12/nem-bowling-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Bowling 2</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2015/04/pha-vo-giot-nuoc/?gid=10617&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDE1LzA0L3BoYS12by1naW90LW51b2MvIiwicmV0dXJudXJsIjoiaHR0cHM6Ly9nYW1ldnVpLnZuL3BoYS12by1naW90LW51b2MvZ2FtZSIsImdpZCI6IjEwNjE3IiwicmF0ZWRhZ2VzIjoiMCIsImV4cCI6MTc3NjExMDQyOCwiaWF0IjoxNzc2MDc0NDI4fQ.J_m0k7fAmnErutuEmxG77Bjd2cTiHleWSwa_MNF8ltw', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2015/4/20/pha-vo-giot-nuoc.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Phá vỡ giọt nước (Blops Plops)</div>
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
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2017/05/tim-kim-cuong/', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/03/15/tim-kim-cuong-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Tìm kim cương (Jewels Blitz 2)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2014/10/CandyRain/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2014/10/06/candyrain.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Mưa kẹo ngọt (Candy Rain)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2021/08/xep-keo-deo/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2021/08/04/xep-keo-deo-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Xếp kẹo dẻo</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2017/12/xep-hinh-keo-ngot/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2017/12/13/xep-hinh-keo-ngot-105.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Xếp hình kẹo ngọt (Gummy Blocks)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2014/11/xep-thach/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/Image/2014/11/26/xep-thach.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Xếp thạch (Jelly Picnic)</div>
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

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2020/03/dai-duong-huyen-bi/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2020/03/24/dai-duong-huyen-bi-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đại dương huyền bí</div>
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
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/07/cung-duong-thinh-no/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/07/12/cung-duong-thinh-no-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cung đường thịnh nộ (Road of Fury)</div>
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
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2015/02/tay-dua-f1/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/Image/2015/2/14/tay-dua-f1.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đua xe F1</div>
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
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2026/03/xe-tang-ban-so/?gid=24957&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDI2LzAzL3hlLXRhbmctYmFuLXNvIiwicmV0dXJudXJsIjoiaHR0cHM6Ly9nYW1ldnVpLnZuL3hlLXRhbmctYmFuLW8tc28vZ2FtZSIsImdpZCI6IjI0OTU3IiwicmF0ZWRhZ2VzIjoiMTIiLCJleHAiOjE3NzYwMjY0NTMsImlhdCI6MTc3NTk5MDQ1M30._v9hzYOo3tZ3dnHX6DxnX_6CDoLIKF2dHfc5YJkkEq8', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2026/03/13/xe-tang-ban-so-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Xe tăng bắn ô số</div>
      </div>

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
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2021/02/tho-san-alien-4/?gid=7433&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDIxLzAyL3Roby1zYW4tYWxpZW4tNCIsInJldHVybnVybCI6Imh0dHBzOi8vZ2FtZXZ1aS52bi90aG8tc2FuLWFsaWVuLTQvZ2FtZSIsImdpZCI6Ijc0MzMiLCJyYXRlZGFnZXMiOiIxOCIsImV4cCI6MTc3NTg3NDM4OSwiaWF0IjoxNzc1ODM4Mzg5fQ.BJKBD35kOtN38qn9ezFxbF3bM9LT6rms6oJIgYjQ8Ug', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2021/02/20/tho-san-alien-200-a.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Thợ săn Alien 4 (Alien Hunter 4)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/07/Phi-Thuyen-Chien-Dau/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/07/20/phi-thuyen-chien-dau-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Phi thuyền không chiến</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2014/10/ban-ca-an-xu/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/08/26/ban-ca-an-xu-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Bắn cá ăn xu</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/09/dau-an-rong-thieng/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/09/27/dau-an-rong-thieng-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Dấu ấn rồng thiêng</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2024/03/chien-tranh-ban-bong/?gid=23325&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDI0LzAzL2NoaWVuLXRyYW5oLWJhbi1ib25nIiwicmV0dXJudXJsIjoiaHR0cHM6Ly9nYW1ldnVpLnZuL2NoaWVuLXRyYW5oLWJhbi1ib25nL2dhbWUiLCJnaWQiOiIyMzMyNSIsInJhdGVkYWdlcyI6IjEyIiwiZXhwIjoxNzc2MTA5Mzg2LCJpYXQiOjE3NzYwNzMzODZ9.jeJJe3Aez46Fbv9beyT3zVxKJ_LW10Bl6Tk0_cX2BS4', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/03/04/chien-tranh-ban-bong-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Chiến tranh bắn bóng</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2015/06/tieu-doi-diet-zombie/?gid=10860&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDE1LzA2L3RpZXUtZG9pLWRpZXQtem9tYmllLyIsInJldHVybnVybCI6Imh0dHBzOi8vZ2FtZXZ1aS52bi90aWV1LWRvaS1kaWV0LXpvbWJpZS9nYW1lIiwiZ2lkIjoiMTA4NjAiLCJyYXRlZGFnZXMiOiIwIiwiZXhwIjoxNzc2MTA5ODg3LCJpYXQiOjE3NzYwNzM4ODd9.Ny-BBrH0XNvFgPFtWnH14pW6q_iSw1a6smmTIpxQ52A', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2015/6/24/tieu-doi-diet-zombie.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Tiểu đội diệt Zombie (Earths Final Hope Quadron)</div>
      </div>

 </div>

       <!-- Hàng thứ 7 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Stickman Revival</h2>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2020/11/nguoi-que-phieu-luu-5/?gid=20634&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDIwLzExL25ndW9pLXF1ZS1waGlldS1sdXUtNS8iLCJyZXR1cm51cmwiOiJodHRwczovL2dhbWV2dWkudm4vbmd1b2ktcXVlLXBoaWV1LWx1dS01L2dhbWUiLCJnaWQiOiIyMDYzNCIsInJhdGVkYWdlcyI6IjAiLCJleHAiOjE3NzU5MTE1NDUsImlhdCI6MTc3NTg3NTU0NX0.FVXRwo-Q8lRkjeS2hxMXo-biRyExTi3gIUmGs3OCZUo', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2020/11/17/nguoi-que-phieu-luu-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Người que phiêu lưu 5</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/01/cuoc-chien-nguoi-que/?gid=18655&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIiLCJ1c2VybmFtZSI6IiIsImdhbWV1cmwiOiJodHRwczovL2UuZ2FtZXZ1aS52bi93ZWIvMjAxOS8wMS9jdW9jLWNoaWVuLW5ndW9pLXF1ZS8iLCJyZXR1cm51cmwiOiJodHRwczovL2dhbWV2dWkudm4vY3VvYy1jaGllbi1uZ3VvaS1xdWUvZ2FtZSIsImdpZCI6IjE4NjU1IiwicmF0ZWRhZ2VzIjoiMTIiLCJleHAiOjE3NzU5MDU3NzAsImlhdCI6MTc3NTg2OTc3MH0.zeHWugoKxyZWx-bRicNLf6iVp0o3kdXeGH0QEvo_9RE', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/01/17/cuoc-chien-nguoi-que.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cuộc chiến người que</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/09/nguoi-que-phieu-luu/?gid=8545&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDE4LzA5L25ndW9pLXF1ZS1waGlldS1sdXUiLCJyZXR1cm51cmwiOiJodHRwczovL2dhbWV2dWkudm4vbmd1b2ktcXVlLXBoaWV1LWx1dS9nYW1lIiwiZ2lkIjoiODU0NSIsInJhdGVkYWdlcyI6IjAiLCJleHAiOjE3NzYwMDY4NzIsImlhdCI6MTc3NTk3MDg3Mn0.owMaNDj6QnyAiunpqklZ5QmDSFT0APrquew9ay0hmzA', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/09/17/nguoi-que-phieu-luu-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Người que phiêu lưu (Vex 2)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/02/nguoi-que-phieu-luu-ky/?gid=17400&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDE4LzAyL25ndW9pLXF1ZS1waGlldS1sdXUta3kvIiwicmV0dXJudXJsIjoiaHR0cHM6Ly9nYW1ldnVpLnZuL25ndW9pLXF1ZS1waGlldS1sdXUta3kvZ2FtZSIsImdpZCI6IjE3NDAwIiwicmF0ZWRhZ2VzIjoiMCIsImV4cCI6MTc3NjAyMjYwNiwiaWF0IjoxNzc1OTg2NjA2fQ.AW1Zn88h1xWr1PlemO0EeS9tvXZYdpOMX-UAuXOZVe4', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/02/13/nguoi-que-phieu-luu-ky.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Người que phiêu lưu ký (Stickman Boost)</div>
      </div>

</div>
 
      <!-- Hàng thứ 8 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Battle Game</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/06/tran-chien-co-vua/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2023/06/20/tran-chien-co-vua-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Trận chiến Cờ vua</div>
      </div>
    
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2017/12/than-sam-thor-diet-boss/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2017/12/16/than-sam-thor-105.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Thần sấm Thor diệt Boss (Thor Boss Battles)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2024/08/avengers-chien-dau-2/?gid=23784&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDI0LzA4L2F2ZW5nZXJzLWNoaWVuLWRhdS0yIiwicmV0dXJudXJsIjoiaHR0cHM6Ly9nYW1ldnVpLnZuL2F2ZW5nZXJzLWNoaWVuLWRhdS0yL2dhbWUiLCJnaWQiOiIyMzc4NCIsInJhdGVkYWdlcyI6IjEyIiwiZXhwIjoxNzc1ODM3MDMxLCJpYXQiOjE3NzU4MDEwMzF9.gGeUm-ti6-5B7ZRU4ylC9-4_X_BjY8zymMaYJaYeR3s', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/08/07/avengers-chien-dau-2-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Avengers chiến đấu 2</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/07/ben-10-giai-cuu-the-gioi/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/07/12/ben10-giai-cuu-the-gioi-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Ben 10 Giải cứu thế giới</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2018/10/batman-dot-kich/?gid=676&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDE4LzEwL2JhdG1hbi1kb3Qta2ljaCIsInJldHVybnVybCI6Imh0dHBzOi8vZ2FtZXZ1aS52bi9uZ3VvaS1kb2kvZ2FtZSIsImdpZCI6IjY3NiIsInJhdGVkYWdlcyI6IjAiLCJleHAiOjE3NzYwODI0NDEsImlhdCI6MTc3NjA0NjQ0MX0.LKKFIR1QT-lCQWIf-ALLViStEo9gGWLJVhZ0Rb2gPkc', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2018/10/17/nguoi-doi-dot-kich-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Người Dơi</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2017/11/lap-rap-robot-chien-dau/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/03/20/lap-rap-robot-chien-dau-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Lắp ráp Robot chiến đấu (Epic Robo Fight)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://html5.gamedistribution.com/rvvASMiM/2f658de7229e49dba68786ffdc921e76/index.html?gd_sdk_referrer_url=https%3A%2F%2Fgamevui.vn%2Fpokemon-dai-chien%2Fgame&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2dhbWV2dWkudm4vcG9rZW1vbi1kYWktY2hpZW4vZ2FtZSIsInBhcmVudERvbWFpbiI6ImdhbWV2dWkudm4iLCJ0b3BEb21haW4iOiJnYW1ldnVpLnZuIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTgifQ%253D%253D', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/08/28/pokemon-dai-chien-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Pokemon đại chiến (Dynamons)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2025/09/tuyet-dinh-kiem-khach/?gid=7889&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDI1LzA5L3R1eWV0LWRpbmgta2llbS1raGFjaCIsInJldHVybnVybCI6Imh0dHBzOi8vZ2FtZXZ1aS52bi90dXlldC1kaW5oLWtpZW0ta2hhY2gvZ2FtZSIsImdpZCI6Ijc4ODkiLCJyYXRlZGFnZXMiOiIxOCIsImV4cCI6MTc3NjExMTY0MSwiaWF0IjoxNzc2MDc1NjQxfQ.70iLGL76lbpCZm5s8UG_2dX1C74zSwDEVGG3r-P-ZC8', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2021/06/23/tuyet-dinh-kiem-khach-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Tuyệt đỉnh kiếm khách (Forbidden Arms)</div>
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
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2022/10/nuoi-cuu/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2022/10/31/nuoi-cuu-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Nuôi cừu</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2020/10/cuu-ca/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2020/10/02/cuu-ca-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cứu cá</div>
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

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/12/cham-khoi-go/?gid=23143&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDc0MDA3IiwidXNlcm5hbWUiOiIwOTc4ODE2ODYzIiwiZ2FtZXVybCI6Imh0dHBzOi8vZS5nYW1ldnVpLnZuL3dlYi8yMDIzLzEyL2NoYW0ta2hvaS1nbyIsInJldHVybnVybCI6Imh0dHBzOi8vZ2FtZXZ1aS52bi9ydXQtZ28vZ2FtZSIsImdpZCI6IjIzMTQzIiwicmF0ZWRhZ2VzIjoiMCIsImV4cCI6MTc3NjExMDkxOSwiaWF0IjoxNzc2MDc0OTE5fQ.ApeqOLN4cctwkHT1qCuBD-O4yQzyuy73FWYa6cV1HZY', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/09/05/rut-go-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Rút gỗ</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/06/loai-bo-mui-ten/', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://st.gamevui.vn/images/image/2023/06/20/loai-bo-mui-ten-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Loại bỏ mũi tên</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/08/loai-bo-mui-ten-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2023/08/26/loai-bo-mui-ten-2-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Loại bỏ mũi tên 2</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2015/05/choi-co-caro/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/09/24/choi-co-caro-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Chơi cờ Caro (Ultimate Tic Tac Toe)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2022/06/sau-an-tao/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2022/06/13/sau-an-tao-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Apple Worm - Sâu ăn táo</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2020/09/lan-bong-ve-dich/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2020/09/18/lan-bong-ve-dich-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Lăn bóng về đích</div>
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
