const suggestions = [
  "JackieChan", // Thành Long – diễn viên hành động
  "JayChou", // Châu Kiệt Luân – ca sĩ, nhạc sĩ
  "FanBingbing", // Phạm Băng Băng – diễn viên
  "YaoMing", // Diêu Minh – vận động viên bóng rổ
  "ZhaoLiying", // Triệu Lệ Dĩnh – diễn viên
  "DilrabaDilmurat", // Địch Lệ Nhiệt Ba – diễn viên, người mẫu
  "WangYibo", // Vương Nhất Bác – ca sĩ, diễn viên
  "LiYifeng", // Lý Dịch Phong – diễn viên
  "Angelababy", // người mẫu, diễn viên
  "LayZhang", // Trương Nghệ Hưng – thành viên EXO
  "ZhouDongyu", // Châu Đông Vũ – ảnh hậu
  "XuZheng", // Từ Tranh – đạo diễn, diễn viên hài
  "HuGe", // Hồ Ca – diễn viên
  "YangMi", // Dương Mịch – diễn viên
  "Luhan", // Lộc Hàm – ca sĩ, diễn viên
  "KrisWu", // Ngô Diệc Phàm – ca sĩ, diễn viên
  "LiNa", // vận động viên tennis
  "LangLang", // nghệ sĩ piano
  "GongLi", // Củng Lợi – diễn viên
  "ZhangZiyi", // Chương Tử Di – diễn viên
  "ZhaoWei", // Triệu Vy – diễn viên, đạo diễn
  "ChenKun", // diễn viên
  "Tao", // Hoàng Tử Thao – ca sĩ, diễn viên
  "HanHong", // ca sĩ
  "NaYing", // ca sĩ
  "EasonChan", // ca sĩ
  "NicholasTse", // Tạ Đình Phong – ca sĩ, diễn viên
  "LiRonghao", // ca sĩ, nhà sản xuất
  "TFBoys", // nhóm nhạc gồm Dịch Dương Thiên Tỉ, Vương Tuấn Khải, Vương Nguyên
  "ZhangYimou", // Trương Nghệ Mưu – đạo diễn
  "ChenDaoming", // diễn viên gạo cội
  "LiuYifei", // Lưu Diệc Phi – diễn viên
  "TangWei", // diễn viên
  "SunLi", // Tôn Lệ – diễn viên
  "ZhengShuang", // diễn viên
  "BaiBaihe", // diễn viên
  "MaYili", // diễn viên
  "TongLiya", // diễn viên
  "HuangBo", // Hoàng Bột – diễn viên
  "WangJunkai", // Vương Tuấn Khải – TFBoys
  "JacksonYee", // Dịch Dương Thiên Tỉ – TFBoys
  "ZhangRuoyun", // diễn viên
  "LiXian", // diễn viên
  "YangYang", // diễn viên
  "JuJingyi", // ca sĩ, diễn viên
  "VictoriaSong", // Tống Thiến – ca sĩ, diễn viên
  "ZhangHan", // diễn viên
  "JingBoran", // diễn viên
  "ChenXiao", // diễn viên
  "ShenYue", // diễn viên
  "WuJing", // Ngô Kinh – diễn viên hành động
  "ZhaoJinmai", // diễn viên trẻ
  "LiuHaoran", // diễn viên
  "ZhangXincheng", // diễn viên
  "TanSongyun", // diễn viên
  "BaiJingting", // diễn viên
  "WangKai", // diễn viên
  "LiuTao", // diễn viên
  "SunYang", // vận động viên bơi lội
  "GuAiling", // vận động viên trượt tuyết
  "ZhuTing", // vận động viên bóng chuyền
  "LiWenwen", // vận động viên cử tạ
  "HeBingjiao", // vận động viên cầu lông
  "ChenLong", // vận động viên cầu lông
  "DingJunhui", // vận động viên bi-a
  "MengMeiqi", // ca sĩ, diễn viên
  "ZhouShen", // ca sĩ
  "HuaChenyu", // ca sĩ
  "WangFeng", // ca sĩ
  "G.E.M.", // ca sĩ
  "JolinTsai", // Thái Y Lâm – ca sĩ
  "ShowLo", // La Chí Tường – ca sĩ, diễn viên
  "RainieYang", // Dương Thừa Lâm – ca sĩ, diễn viên
  "AmberLiu", // ca sĩ
  "JacksonWang", // ca sĩ, thành viên GOT7
  "EstherYu", // Ngu Thư Hân – diễn viên, idol
  "ZhangZhehan", // diễn viên
  "GaoYuanyuan", // diễn viên
  "LiuShishi", // diễn viên
  "WilliamChan", // ca sĩ, diễn viên
  "ChenLinong", // ca sĩ
  "CaiXukun", // ca sĩ, idol
  "RenJialun", // diễn viên
  "SongWeilong", // diễn viên
  "LiQin", // diễn viên
  "ZhangHuiwen", // diễn viên
  "ZhangTianai", // diễn viên
  "ZhaoLusi", // diễn viên
  "BambiZhu", // diễn viên
  "XuKai", // diễn viên
  "YangChaoyue", // idol
  "LaiKuanlin", // idol
  "WuXuanyi", // idol
  "Yamy", // idol
  "RocketGirls101", // nhóm nhạc nữ
  "NinePercent", // nhóm nhạc nam
  "UNIQ", // nhóm nhạc nam
  "NEXT", // nhóm nhạc nam
  "WayV", // nhóm nhạc nam
  "LiJiaqi", // livestreamer, beauty influencer
  "Viya", // livestreamer
  "Papi酱", // vlogger, influencer
  "LexieLiu", // rapper, ca sĩ
  "ZhangDayi", // fashion influencer
  "Tibbers", // streamer game
  "Miss", // streamer game
  "Doinb", // tuyển thủ eSports
  "Uzi", // tuyển thủ eSports
  "TheShy" // tuyển thủ eSports
];
