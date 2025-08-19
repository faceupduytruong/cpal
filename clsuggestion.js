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
  "TheShy", // tuyển thủ eSports
  "AndyLau", // Lưu Đức Hoa – ca sĩ, diễn viên
  "TonyLeung", // Lương Triều Vỹ – diễn viên
  "DonnieYen", // Chân Tử Đan – diễn viên hành động
  "StephenChow", // Châu Tinh Trì – diễn viên, đạo diễn
  "CarinaLau", // Lưu Gia Linh – diễn viên
  "MaggieCheung", // Trương Mạn Ngọc – diễn viên
  "AnthonyWong", // Huỳnh Thu Sinh – diễn viên
  "SimonYam", // Nhậm Đạt Hoa – diễn viên
  "ShuQi", // Thư Kỳ – diễn viên
  "RichieRen", // Nhậm Hiền Tề – ca sĩ, diễn viên
  "SammoHung", // Hồng Kim Bảo – diễn viên hành động
  "FrancisNg", // Ngô Trấn Vũ – diễn viên
  "AdaChoi", // Thái Thiếu Phân – diễn viên
  "BoscoWong", // Huỳnh Tông Trạch – diễn viên
  "KennethMa", // Mã Quốc Minh – diễn viên
  "CharmaineSheh", // Xa Thi Mạn – diễn viên
  "MyolieWu", // Hồ Hạnh Nhi – diễn viên
  "TaviaYeung", // Dương Di – diễn viên
  "RucoChan", // Trần Triển Bằng – diễn viên
  "FayeWong", // Vương Phi – ca sĩ
  "AlanTam", // Đàm Vịnh Lân – ca sĩ
  "SamHui", // Hứa Quan Kiệt – ca sĩ
  "JoeyYung", // Dung Tổ Nhi – ca sĩ
  "HackenLee", // Lý Hắc Cần – ca sĩ
  "HinsCheung", // Trương Kính Hiên – ca sĩ
  "VivianChow", // Châu Huệ Mẫn – ca sĩ
  "SallyYeh", // Diệp Thiến Văn – ca sĩ
  "CocoLee", // Lý Văn – ca sĩ
  "ElvaHsiao", // Tiêu Á Hiên – ca sĩ
  "AMei", // Trương Huệ Muội – ca sĩ
  "FishLeong", // Lương Tâm Như – ca sĩ
  "JamHsiao", // Tiêu Kính Đằng – ca sĩ
  "HebeTian", // Điền Phức Chân – ca sĩ
  "EllaChen", // Trần Gia Hoa – ca sĩ
  "SelinaJen", // Nhậm Gia Huyên – ca sĩ
  "YogaLin", // Lâm Chí Huyền – ca sĩ
  "EricChou", // Châu Hưng Triết – ca sĩ
  "LalaHsu", // Hứa Như Vân – ca sĩ
  "WaaWei", // Ngụy Như An – ca sĩ
  "LiuXiang", // Lưu Tường – vận động viên điền kinh
  "GuoJingjing", // Quách Tinh Tinh – vận động viên nhảy cầu
  "LinDan", // Lâm Đan – vận động viên cầu lông
  "MaLong", // Mã Long – vận động viên bóng bàn
  "ZhangJike", // Trương Kế Khoa – vận động viên bóng bàn
  "WuMinxia", // Ngô Mẫn Hà – vận động viên nhảy cầu
  "YeShiwen", // Diệp Thi Văn – vận động viên bơi lội
  "ChenYibing", // Trần Ý Băng – vận động viên thể dục dụng cụ
  "LiuYang", // Lưu Dương – vận động viên thể dục dụng cụ
  "SuBingtian", // Tô Bính Thiên – vận động viên điền kinh
  "HeJiong", // Hà Cảnh – MC, người dẫn chương trình
  "XieNa", // Tạ Na – MC, nghệ sĩ
  "WangHan", // Vương Hàn – MC
  "LiSidan", // Lý Tư Đan – MC
  "MaDong", // Mã Đông – MC, nhà sản xuất
  "JinXing", // Kim Tinh – MC, vũ công
  "HuaShao", // Hoa Thiệu – MC
  "ShenTao", // Thẩm Đào – MC
  "ZhangDaxian", // Trương Đại Hiền – streamer
  "LiZiqi", // Lý Tử Thất – vlogger, influencer
  "LiuWen", // Lưu Văn – người mẫu
  "MingXi", // Tập Minh – người mẫu
  "FeiFeiSun", // Tôn Phi Phi – người mẫu
  "HeSui", // Hà Tuệ – người mẫu
  "JuXiaowen", // Cúc Tiểu Văn – người mẫu
  "BonnieChen", // Trần Văn Văn – người mẫu
  "AngelChen", // nhà thiết kế thời trang
  "HuishanZhang", // nhà thiết kế thời trang
  "UmaWang", // nhà thiết kế thời trang
  "FakerCN", // streamer game
  "Xiye", // tuyển thủ eSports
  "Scout", // tuyển thủ eSports
  "Meiko", // tuyển thủ eSports
  "JackeyLove", // tuyển thủ eSports
  "Mlxg", // tuyển thủ eSports
  "Ning", // tuyển thủ eSports
  "Clearlove", // tuyển thủ eSports
  "iBoy", // tuyển thủ eSports
  "Zoom", // tuyển thủ eSports
  "LexieLiu", // rapper, ca sĩ
  "BeBeZhou", // influencer thời trang
  "ChenMan", // nhiếp ảnh gia thời trang
  "TinaLeung", // fashion stylist
  "YvonneChing", // fashion blogger
  "KevinTsai", // Sái Thông – MC, nhà văn
  "DeeHsu", // Từ Hy Đệ – MC, diễn viên
  "BlackieChen", // Trần Kiến Châu – MC, diễn viên
  "ChristineFan", // Phạm Vỹ Kỳ – ca sĩ
  "WilberPan", // Bành Vu Yến – ca sĩ, diễn viên
  "BarbieHsu", // Từ Hy Viên – diễn viên
  "VicZhou", // Châu Du Dân – diễn viên
  "JerryYan", // Ngôn Thừa Húc – diễn viên
  "KenChu", // Chu Hiếu Thiên – diễn viên
  "VannessWu", // Ngô Kiến Hào – diễn viên
  "RainieYang", // Dương Thừa Lâm – ca sĩ, diễn viên
  "AmberAn", // An Tâm Á – ca sĩ, diễn viên
  "TiffanyHsu", // Hứa Vỹ Ninh – diễn viên
  "JoeChen", // Trần Kiều Ân – diễn viên
  "MikeHe", // Hà Nhuận Đông – diễn viên
  "ArielLin", // Lâm Y Thần – diễn viên
  "JanineChang", // Trương Quân Ninh – diễn viên
  "EthanRuan", // Nguyễn Kinh Thiên – diễn viên
  "MarkChao", // Triệu Hựu Đình – diễn viên
  "MichelleChen", // Trần Nghiên Hy – diễn viên
  "KaiKo" // Kha Chấn Đông – diễn viên
];

