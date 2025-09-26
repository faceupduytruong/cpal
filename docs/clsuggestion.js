const suggestions = [
  "JackieChan", // Thành Long – diễn viên hành động
  "JayChou", // Châu Kiệt Luân – ca sĩ, nhạc sĩ
  "FanBingbing", // Phạm Băng Băng – diễn viên
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
  "SunLi", // Tôn Lệ – diễn viên
  "BaiBaihe", // diễn viên
  "JacksonYee", // Dịch Dương Thiên Tỉ – TFBoys
  "ZhangRuoyun", // diễn viên
  "JuJingyi", // ca sĩ, diễn viên
  "ZhangHan", // diễn viên
  "JingBoran", // diễn viên
  "ShenYue", // diễn viên
  "WuJing", // Ngô Kinh – diễn viên hành động
  "WangKai", // diễn viên
  "ZhuTing", // vận động viên bóng chuyền
  "LiWenwen", // vận động viên cử tạ
  "HeBingjiao", // vận động viên cầu lông
  "ChenLong", // vận động viên cầu lông
  "DingJunhui", // vận động viên bi-a
  "ZhouShen", // ca sĩ
  "WangFeng", // ca sĩ
  "G.E.M.", // ca sĩ
  "JolinTsai", // Thái Y Lâm – ca sĩ
  "ShowLo", // La Chí Tường – ca sĩ, diễn viên
  "RainieYang", // Dương Thừa Lâm – ca sĩ, diễn viên
  "AmberLiu", // ca sĩ
  "JacksonWang", // ca sĩ, thành viên GOT7
  "EstherYu", // Ngu Thư Hân – diễn viên, idol
  "GaoYuanyuan", // diễn viên
  "LiuShishi", // diễn viên
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
  "KaiKo", // Kha Chấn Đông – diễn viên
  "YaoMing", // Diêu Minh – vận động viên bóng rổ
  "ZhangZiyi", // Chương Tử Di – diễn viên
  "GongLi", // Củng Lợi – diễn viên
  "LiLianjie", // Lý Liên Kiệt – diễn viên võ thuật
  "JetLi", // Jet Li – tên tiếng Anh của Lý Liên Kiệt
  "ZhaoWei", // Triệu Vy – diễn viên
  "FayeWong", // Vương Phi – ca sĩ
  "TangWei", // Thang Duy – diễn viên
  "LiuYifei", // Lưu Diệc Phi – diễn viên
  "YangMi", // Dương Mịch – diễn viên
  "ZhouDongyu", // Châu Đông Vũ – diễn viên
  "XuZheng", // Từ Tranh – đạo diễn, diễn viên hài
  "XiaoZhan", // Tiêu Chiến – ca sĩ, diễn viên
  "LayZhang", // Trương Nghệ Hưng – ca sĩ, thành viên EXO
  "TFBoys", // Nhóm nhạc TFBoys – thần tượng tuổi teen
  "SunYatSen", // Tôn Trung Sơn – chính trị gia
  "MaoZedong", // Mao Trạch Đông – lãnh tụ Trung Quốc
  "DengXiaoping", // Đặng Tiểu Bình – chính trị gia
  "Confucius", // Khổng Tử – triết gia
  "IMPei", // Ieoh Ming Pei – kiến trúc sư
  "ZhangYimou", // Trương Nghệ Mưu – đạo diễn
  "ChenKaige", // Trần Khải Ca – đạo diễn
  "LiBingbing", // Lý Băng Băng – diễn viên
  "LiuTao", // Lưu Đào – diễn viên
  "HuGe", // Hồ Ca – diễn viên
  "MaYili", // Mã Y Lợi – diễn viên
  "HuangBo", // Hoàng Bột – diễn viên
  "AndyLau", // Lưu Đức Hoa – ca sĩ, diễn viên
  "TonyLeung", // Lương Triều Vỹ – diễn viên
  "DonnieYen", // Chân Tử Đan – diễn viên võ thuật
  "StephenChow", // Châu Tinh Trì – diễn viên hài, đạo diễn
  "CarinaLau", // Lưu Gia Linh – diễn viên
  "TangYan", // Đường Yên – diễn viên
  "ZhengShuang", // Trịnh Sảng – diễn viên
  "YangYang", // Dương Dương – diễn viên
  "LiXian", // Lý Hiện – diễn viên
  "BaiYu", // Bạch Vũ – diễn viên
  "NiNi", // Nghê Ni – diễn viên
  "HanGeng", // Hàn Canh – ca sĩ, diễn viên
  "LuHan", // Lộc Hàm – ca sĩ, diễn viên
  "KrisWu", // Ngô Diệc Phàm – ca sĩ, diễn viên
  "ZhangHan", // Trương Hàn – diễn viên
  "ChenFeiyu", // Trần Phi Vũ – diễn viên
  "LeoWu", // Ngô Lỗi – diễn viên
  "ZhaoLiying", // Triệu Lệ Dĩnh – diễn viên
  "BaiBaihe", // Bạch Bách Hà – diễn viên
  "HuangXuan", // Hoàng Hiên – diễn viên
  "LiYuchun", // Lý Vũ Xuân – ca sĩ
  "HanHong", // Hàn Hồng – ca sĩ
  "NaYing", // Na Anh – ca sĩ
  "ZhangJie", // Trương Kiệt – ca sĩ
  "GEM", // Đặng Tử Kỳ – ca sĩ
  "JaneZhang", // Trương Lương Dĩnh – ca sĩ
  "AngelaBaby", // Dương Dĩnh – diễn viên, người mẫu
  "VictoriaSong", // Tống Thiến – ca sĩ, diễn viên
  "ChenKun", // Trần Khôn – diễn viên
  "WallaceHuo", // Hoắc Kiến Hoa – diễn viên
  "WilliamChan", // Trần Vỹ Đình – ca sĩ, diễn viên
  "LiChen", // Lý Thần – diễn viên
  "ZhangRuoyun", // Trương Nhược Quân – diễn viên
  "GuoJingming", // Quách Kính Minh – nhà văn, đạo diễn
  "HanHan", // Hàn Hàn – nhà văn, đạo diễn
  "LangLang", // Lang Lang – nghệ sĩ piano
  "YundiLi", // Lý Vân Địch – nghệ sĩ piano
  "AiWeiwei", // Ai Weiwei – nghệ sĩ, nhà hoạt động
  "MaYun", // Jack Ma – doanh nhân, nhà sáng lập Alibaba
  "PonyMa", // Mã Hóa Đằng – doanh nhân, nhà sáng lập Tencent
  "LeiJun", // Lôi Quân – doanh nhân, nhà sáng lập Xiaomi
  "RobinLi", // Lý Ngạn Hồng – nhà sáng lập Baidu
  "ZhouHongyi", // Chu Hồng Ỷ – nhà sáng lập Qihoo 360
  "RenZhengfei", // Nhậm Chính Phi – nhà sáng lập Huawei
  "ZhangYiming", // Trương Nhất Minh – nhà sáng lập ByteDance
  "LiNa", // Lý Na – vận động viên quần vợt
  "SuBingtian", // Tô Bính Thiên – vận động viên điền kinh
  "GuAiling", // Cốc Á Lăng – vận động viên trượt tuyết
  "WuJing", // Ngô Kinh – diễn viên, đạo diễn
  "ZhaoTao", // Triệu Đào – diễn viên
  "SongJia", // Tống Giai – diễn viên
  "ZhangZhehan", // Trương Triết Hạn – diễn viên
  "JingTian", // Cảnh Điềm – diễn viên
  "ChenXuedong", // Trần Học Đông – diễn viên
  "LiYifeng", // Lý Dịch Phong – diễn viên
  "ZhangYixing", // Trương Nghệ Hưng – ca sĩ, diễn viên
  "HuHaiquan", // Hồ Hải Tuyền – ca sĩ
  "ChenLi", // Trần Lập – ca sĩ
  "ZhouShen", // Chu Thâm – ca sĩ
  "TNT", // Nhóm nhạc TNT – thần tượng tuổi teen
  "SNH48", // Nhóm nhạc SNH48 – thần tượng nữ
  "NinePercent", // Nhóm nhạc Nine Percent – thần tượng nam
  "RocketGirls101", // Nhóm nhạc Rocket Girls 101 – thần tượng nữ
  "ZhouXun", // Châu Tấn – diễn viên
  "TongLiya", // Đồng Lệ Á – diễn viên
  "JingBorany", // Tỉnh Bách Nhiên – diễn viên
  "LiQin", // Lý Thấm – diễn viên
  "SongQian", // Tống Thiến – ca sĩ, diễn viên
  "ZhangTianai", // Trương Thiên Ái – diễn viên
  "ChenXiao", // Trần Hiểu – diễn viên
  "GuanXiaotong", // Quan Hiểu Đồng – diễn viên
  "OuyangNana", // Âu Dương Na Na – nghệ sĩ cello, diễn viên
  "ZhangZhehan", // Trương Triết Hạn – diễn viên
  "TanSongyun", // Đàm Tùng Vận – diễn viên
  "LiRonghao", // Lý Vinh Hạo – ca sĩ, nhạc sĩ
  "ZhangBichen", // Trương Bích Thần – ca sĩ
  "WangJunkai", // Vương Tuấn Khải – thành viên TFBoys
  "WangYuan", // Vương Nguyên – thành viên TFBoys
  "ZhouShen", // Chu Thâm – ca sĩ
  "HeJiong", // Hà Cảnh – MC, diễn viên
  "XieNa", // Tạ Na – MC, ca sĩ
  "HuaChenyu", // Hoa Thần Vũ – ca sĩ
  "LiXiaolu", // Lý Tiểu Lộ – diễn viên
  "ZhangYujian", // Trương Vũ Kiện – diễn viên
  "ZhaoJinmai", // Triệu Kim Mạch – diễn viên trẻ
  "WuLei", // Ngô Lỗi – diễn viên
  "ZhangLinghe", // Trương Lăng Hách – diễn viên
  "ChenDuling", // Trần Đô Linh – diễn viên
  "ZhangJiani", // Trương Gia Nghê – diễn viên
  "SunYang", // Tôn Dương – vận động viên bơi lội
  "GuoAilun", // Quách Ái Luân – vận động viên bóng rổ
  "ZhuYilong", // Chu Nhất Long – diễn viên
  "BaiJingting", // Bạch Kính Đình – diễn viên
  "SongWeilong", // Tống Uy Long – diễn viên
  "RenJialun", // Nhậm Gia Luân – diễn viên
  "ChenZheyuan", // Trần Triết Nguyên – diễn viên
  "LiuHaoran", // Lưu Hạo Nhiên – diễn viên
  "ZhangXincheng", // Trương Tân Thành – diễn viên
  "YangChaoyue", // Dương Siêu Việt – ca sĩ, diễn viên
  "MengMeiqi", // Mạnh Mỹ Kỳ – ca sĩ, diễn viên
  "ZhouYe", // Châu Dã – diễn viên
  "YuShuxin", // Ngu Thư Hân – diễn viên
  "WangHedi", // Vương Hạc Đệ – diễn viên
  "DingYuxi", // Đinh Vũ Hề – diễn viên
  "LuoYunxi", // La Vân Hi – diễn viên
  "ChengYi", // Thành Nghị – diễn viên
  "YangZi", // Dương Tử – diễn viên
  "LiYitong", // Lý Nhất Đồng – diễn viên
  "ZhangHuili", // Trương Huệ Lệ – vận động viên bóng bàn
  "ChenMeng", // Trần Mộng – vận động viên bóng bàn
];


