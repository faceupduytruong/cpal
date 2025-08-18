const suggestions = [
  "Jackie Chan", // Thành Long – diễn viên hành động
  "Jay Chou", // Châu Kiệt Luân – ca sĩ, nhạc sĩ
  "Fan Bingbing", // Phạm Băng Băng – diễn viên
  "Yao Ming", // Diêu Minh – vận động viên bóng rổ
  "Zhao Liying", // Triệu Lệ Dĩnh – diễn viên
  "Dilraba Dilmurat", // Địch Lệ Nhiệt Ba – diễn viên, người mẫu
  "Wang Yibo", // Vương Nhất Bác – ca sĩ, diễn viên
  "Li Yifeng", // Lý Dịch Phong – diễn viên
  "Angelababy", // người mẫu, diễn viên
  "Lay Zhang", // Trương Nghệ Hưng – thành viên EXO
  "Zhou Dongyu", // Châu Đông Vũ – ảnh hậu
  "Xu Zheng", // Từ Tranh – đạo diễn, diễn viên hài
  "Hu Ge", // Hồ Ca – diễn viên
  "Yang Mi", // Dương Mịch – diễn viên
  "Luhan", // Lộc Hàm – ca sĩ, diễn viên
  "Kris Wu", // Ngô Diệc Phàm – ca sĩ, diễn viên
  "Li Na", // vận động viên tennis
  "Lang Lang", // nghệ sĩ piano
  "Gong Li", // Củng Lợi – diễn viên
  "Zhang Ziyi", // Chương Tử Di – diễn viên
  "Zhao Wei", // Triệu Vy – diễn viên, đạo diễn
  "Chen Kun", // diễn viên
  "Tao", // Hoàng Tử Thao – ca sĩ, diễn viên
  "Han Hong", // ca sĩ
  "Na Ying", // ca sĩ
  "Eason Chan", // ca sĩ
  "Nicholas Tse", // Tạ Đình Phong – ca sĩ, diễn viên
  "Li Ronghao", // ca sĩ, nhà sản xuất
  "TFBoys", // nhóm nhạc gồm Dịch Dương Thiên Tỉ, Vương Tuấn Khải, Vương Nguyên
  "Zhang Yimou", // Trương Nghệ Mưu – đạo diễn
  "Chen Daoming", // diễn viên gạo cội
  "Liu Yifei", // Lưu Diệc Phi – diễn viên
  "Tang Wei", // diễn viên
  "Sun Li", // Tôn Lệ – diễn viên
  "Zheng Shuang", // diễn viên
  "Bai Baihe", // diễn viên
  "Ma Yili", // diễn viên
  "Tong Liya", // diễn viên
  "Huang Bo", // Hoàng Bột – diễn viên
  "Wang Junkai", // Vương Tuấn Khải – TFBoys
  "Jackson Yee", // Dịch Dương Thiên Tỉ – TFBoys
  "Zhang Ruoyun", // diễn viên
  "Li Xian", // diễn viên
  "Yang Yang", // diễn viên
  "Ju Jingyi", // ca sĩ, diễn viên
  "Victoria Song", // Tống Thiến – ca sĩ, diễn viên
  "Zhang Han", // diễn viên
  "Jing Boran", // diễn viên
  "Chen Xiao", // diễn viên
  "Shen Yue", // diễn viên
  "Wu Jing", // Ngô Kinh – diễn viên hành động
  "Zhao Jinmai", // diễn viên trẻ
  "Liu Haoran", // diễn viên
  "Zhang Xincheng", // diễn viên
  "Tan Songyun", // diễn viên
  "Bai Jingting", // diễn viên
  "Wang Kai", // diễn viên
  "Liu Tao", // diễn viên
  "Sun Yang", // vận động viên bơi lội
  "Gu Ailing", // vận động viên trượt tuyết
  "Zhu Ting", // vận động viên bóng chuyền
  "Li Wenwen", // vận động viên cử tạ
  "He Bingjiao", // vận động viên cầu lông
  "Chen Long", // vận động viên cầu lông
  "Ding Junhui", // vận động viên bi-a
  "Meng Meiqi", // ca sĩ, diễn viên
  "Zhou Shen", // ca sĩ
  "Hua Chenyu", // ca sĩ
  "Wang Feng", // ca sĩ
  "G.E.M.", // ca sĩ
  "Jolin Tsai", // Thái Y Lâm – ca sĩ
  "Show Lo", // La Chí Tường – ca sĩ, diễn viên
  "Rainie Yang", // Dương Thừa Lâm – ca sĩ, diễn viên
  "Amber Liu", // ca sĩ
  "Jackson Wang", // ca sĩ, thành viên GOT7
  "Esther Yu", // Ngu Thư Hân – diễn viên, idol
  "Zhang Zhehan", // diễn viên
  "Gao Yuanyuan", // diễn viên
  "Liu Shishi", // diễn viên
  "William Chan", // ca sĩ, diễn viên
  "Chen Linong", // ca sĩ
  "Cai Xukun", // ca sĩ, idol
  "Ren Jialun", // diễn viên
  "Song Weilong", // diễn viên
  "Li Qin", // diễn viên
  "Zhang Huiwen", // diễn viên
  "Zhang Tianai", // diễn viên
  "Zhao Lusi", // diễn viên
  "Bambi Zhu", // diễn viên
  "Xu Kai", // diễn viên
  "Yang Chaoyue", // idol
  "Lai Kuanlin", // idol
  "Wu Xuanyi", // idol
  "Yamy", // idol
  "Rocket Girls 101", // nhóm nhạc nữ
  "Nine Percent", // nhóm nhạc nam
  "UNIQ", // nhóm nhạc nam
  "NEXT", // nhóm nhạc nam
  "WayV", // nhóm nhạc nam
  "Li Jiaqi", // livestreamer, beauty influencer
  "Viya", // livestreamer
  "Papi酱", // vlogger, influencer
  "Lexie Liu", // rapper, ca sĩ
  "Zhang Dayi", // fashion influencer
  "Tibbers", // streamer game
  "Miss", // streamer game
  "Doinb", // tuyển thủ eSports
  "Uzi", // tuyển thủ eSports
  "TheShy" // tuyển thủ eSports
];

// Hàm hiển thị gợi ý lên console
function showSuggestions() {
  console.log("Gợi ý người nổi tiếng Trung Quốc:");
  suggestions.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
  });
}

// Gọi hàm khi file được tải
showSuggestions();