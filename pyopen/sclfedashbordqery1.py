import logging, requests, random
logging.basicConfig(level=logging.INFO)
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DEFAULT_HEADERS = {"User-Agent": "Mozilla/5.0"}

# Curated playlists dùng chung cho cả ai_playlist và tag_playlists
sample_playlists = {
    "us": [
        "https://soundcloud.com/trending-music-us/sets/soundcloud-1",
        "https://soundcloud.com/trending-music-us/sets/pop-1",
        "https://soundcloud.com/trending-music-us/sets/r-b-1",
        "https://soundcloud.com/trending-music-us/sets/hip-hop-rap",
        "https://soundcloud.com/trending-music-us/sets/soul",
        "https://soundcloud.com/trending-music-us/sets/reggae",
        "https://soundcloud.com/trending-music-us/sets/latin",
        "https://soundcloud.com/trending-music-us/sets/indie-1",
        "https://soundcloud.com/trending-music-us/sets/jazz",
        "https://soundcloud.com/trending-music-us/sets/folk",
        "https://soundcloud.com/trending-music-us/sets/electronic-1",
        "https://soundcloud.com/trending-music-us/sets/house",
        "https://soundcloud.com/trending-music-us/sets/country",
        "https://soundcloud.com/trending-music-us/sets/rock-metal-punk",
        "https://soundcloud.com/trending-music-us/sets/techno"
    ],
    "vn": [
        "https://soundcloud.com/trending-music-vn/sets/soundcloud",
        "https://soundcloud.com/trending-music-vn/sets/pop",
        "https://soundcloud.com/trending-music-vn/sets/r-b",
        "https://soundcloud.com/trending-music-vn/sets/soul",
        "https://soundcloud.com/trending-music-vn/sets/reggae",
        "https://soundcloud.com/trending-music-vn/sets/latin",
        "https://soundcloud.com/trending-music-vn/sets/indie",
        "https://soundcloud.com/trending-music-vn/sets/jazz",
        "https://soundcloud.com/trending-music-vn/sets/folk",
        "https://soundcloud.com/trending-music-vn/sets/electronic",
        "https://soundcloud.com/trending-music-vn/sets/hip-hop-rap",
        "https://soundcloud.com/trending-music-vn/sets/house",
        "https://soundcloud.com/trending-music-vn/sets/country",
        "https://soundcloud.com/trending-music-vn/sets/techno",
        "https://soundcloud.com/trending-music-vn/sets/rock-metal-punk"
    ],
    "fr": [
        "https://soundcloud.com/trending-music-fr/sets/soundcloud",
        "https://soundcloud.com/trending-music-fr/sets/pop",
        "https://soundcloud.com/trending-music-fr/sets/r-b",
        "https://soundcloud.com/trending-music-fr/sets/hip-hop-rap",
        "https://soundcloud.com/trending-music-fr/sets/soul",
        "https://soundcloud.com/trending-music-fr/sets/reggae",
        "https://soundcloud.com/trending-music-fr/sets/latin",
        "https://soundcloud.com/trending-music-fr/sets/indie",
        "https://soundcloud.com/trending-music-fr/sets/jazz",
        "https://soundcloud.com/trending-music-fr/sets/folk",
        "https://soundcloud.com/trending-music-fr/sets/electronic",
        "https://soundcloud.com/trending-music-fr/sets/house",
        "https://soundcloud.com/trending-music-fr/sets/country",
        "https://soundcloud.com/trending-music-fr/sets/rock-metal-punk",
        "https://soundcloud.com/trending-music-fr/sets/techno"
    ],
    "ca": [
        "https://soundcloud.com/trending-music-ca/sets/soundcloud",
        "https://soundcloud.com/trending-music-ca/sets/pop",
        "https://soundcloud.com/trending-music-ca/sets/r-b",
        "https://soundcloud.com/trending-music-ca/sets/hip-hop-rap",
        "https://soundcloud.com/trending-music-ca/sets/soul",
        "https://soundcloud.com/trending-music-ca/sets/reggae",
        "https://soundcloud.com/trending-music-ca/sets/latin",
        "https://soundcloud.com/trending-music-ca/sets/indie",
        "https://soundcloud.com/trending-music-ca/sets/jazz",
        "https://soundcloud.com/trending-music-ca/sets/folk",
        "https://soundcloud.com/trending-music-ca/sets/electronic",
        "https://soundcloud.com/trending-music-ca/sets/house",
        "https://soundcloud.com/trending-music-ca/sets/country",
        "https://soundcloud.com/trending-music-ca/sets/rock-metal-punk",
        "https://soundcloud.com/trending-music-ca/sets/techno"
    ],
    "de": [
        "https://soundcloud.com/trending-music-de/sets/soundcloud",
        "https://soundcloud.com/trending-music-de/sets/pop",
        "https://soundcloud.com/trending-music-de/sets/r-b",
        "https://soundcloud.com/trending-music-de/sets/hip-hop-rap",
        "https://soundcloud.com/trending-music-de/sets/soul",
        "https://soundcloud.com/trending-music-de/sets/reggae",
        "https://soundcloud.com/trending-music-de/sets/latin",
        "https://soundcloud.com/trending-music-de/sets/indie",
        "https://soundcloud.com/trending-music-de/sets/jazz",
        "https://soundcloud.com/trending-music-de/sets/folk",
        "https://soundcloud.com/trending-music-de/sets/electronic",
        "https://soundcloud.com/trending-music-de/sets/house",
        "https://soundcloud.com/trending-music-de/sets/country",
        "https://soundcloud.com/trending-music-de/sets/rock-metal-punk",
        "https://soundcloud.com/trending-music-de/sets/techno"
    ],
    "af": [
        "https://soundcloud.com/nhanhlaxanh/sets/td1",
        "https://soundcloud.com/nhanhlaxanh/sets/se2",
        "https://soundcloud.com/nhanhlaxanh/sets/se1"
    ],
    "world": [
        "https://soundcloud.com/nhanhlaxanh/sets/lit",
        "https://soundcloud.com/nhanhlaxanh/sets/lip",
        "https://soundcloud.com/nhanhlaxanh/sets/lif2",
        "https://soundcloud.com/nhanhlaxanh/sets/liai2",
        "https://soundcloud.com/nhanhlaxanh/sets/lis",
        "https://soundcloud.com/nhanhlaxanh/sets/lif1",
        "https://soundcloud.com/nhanhlaxanh/sets/poc",
        "https://soundcloud.com/nhanhlaxanh/sets/lid2",
        "https://soundcloud.com/nhanhlaxanh/sets/lid1",
        "https://soundcloud.com/nhanhlaxanh/sets/lii"
    ],
    "saigon": [
        "https://soundcloud.com/nhanhlaxanh/sets/sgp",
        "https://soundcloud.com/nhanhlaxanh/sets/msgldt1",
        "https://soundcloud.com/nhanhlaxanh/sets/sgtls2",
        "https://soundcloud.com/slavomir-such/sets/vietnam"
    ],
    "hanoi": [
        "https://soundcloud.com/mrhapham/sets/quoc-trung-duong-xa-van-dam-the-road-to-infinity",
        "https://soundcloud.com/1stbst/sets/suoi-va-co-nguyen-thao",
        "https://soundcloud.com/d-ng-xit-xa-xay/sets/copy-of-don-moen-songs"
    ],
    "dalat": [
        "https://soundcloud.com/nhanhlaxanh/sets/dl2",
        "https://soundcloud.com/nhanhlaxanh/sets/dl1"
    ],
    "buzzing": [
        "https://soundcloud.com/buzzing-playlists/sets/buzzing-pop",
        "https://soundcloud.com/buzzing-playlists/sets/buzzing-r-b",
        "https://soundcloud.com/buzzing-playlists/sets/buzzing-mexico",
        "https://soundcloud.com/buzzing-playlists/sets/buzzing-hip-hop",
        "https://soundcloud.com/buzzing-playlists/sets/buzzing-indie",
        "https://soundcloud.com/buzzing-playlists/sets/buzzing-rock",
        "https://soundcloud.com/buzzing-playlists/sets/buzzing-electronic",
        "https://soundcloud.com/buzzing-playlists/sets/buzzing-metal"
    ],
    "soul": [
        "https://soundcloud.com/nhanhlaxanh/sets/ncdnkrrts1",
        "https://soundcloud.com/nhanhlaxanh/sets/ncdnkrrts2",
        "https://soundcloud.com/nhanhlaxanh/sets/ncdnkrrts3"
    ],
    "dance": [
        "https://soundcloud.com/nhanhlaxanh/sets/msgldt1",
        "https://soundcloud.com/nhanhlaxanh/sets/lid2",
        "https://soundcloud.com/nhanhlaxanh/sets/lid1",
        "https://soundcloud.com/nhanhlaxanh/sets/tb1",
        "https://soundcloud.com/nhanhlaxanh/sets/qd2",
        "https://soundcloud.com/nhanhlaxanh/sets/do2",
        "https://soundcloud.com/nhanhlaxanh/sets/eicme2",
        "https://soundcloud.com/nhanhlaxanh/sets/eicme1",
        "https://soundcloud.com/nhanhlaxanh/sets/slq2"
    ],
    "r&b": [
        "https://soundcloud.com/nhanhlaxanh/sets/rvd",
        "https://soundcloud.com/nhanhlaxanh/sets/dpm3",
        "https://soundcloud.com/nhanhlaxanh/sets/ain",
        "https://soundcloud.com/nhanhlaxanh/sets/ds1",
        "https://soundcloud.com/nhanhlaxanh/sets/sts1",
        "https://soundcloud.com/nhanhlaxanh/sets/slq1"
    ],
    "pop": [
        "https://soundcloud.com/nhanhlaxanh/sets/nbn",
        "https://soundcloud.com/nhanhlaxanh/sets/nmbn",
        "https://soundcloud.com/nhanhlaxanh/sets/tcnn",
        "https://soundcloud.com/nhanhlaxanh/sets/mgltb",
        "https://soundcloud.com/nhanhlaxanh/sets/mj1",
        "https://soundcloud.com/nhanhlaxanh/sets/atc2",
        "https://soundcloud.com/nhanhlaxanh/sets/atc1",
        "https://soundcloud.com/nhanhlaxanh/sets/ltbcqk",
        "https://soundcloud.com/nhanhlaxanh/sets/xle",
        "https://soundcloud.com/nhanhlaxanh/sets/lmtls",
        "https://soundcloud.com/nhanhlaxanh/sets/bm1",
        "https://soundcloud.com/nhanhlaxanh/sets/999r2",
        "https://soundcloud.com/nhanhlaxanh/sets/999r1",
        "https://soundcloud.com/nhanhlaxanh/sets/poc",
        "https://soundcloud.com/nhanhlaxanh/sets/ntgnl2",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs5",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs4",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs3",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs2",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs1",
        "https://soundcloud.com/nhanhlaxanh/sets/ynh",
        "https://soundcloud.com/nhanhlaxanh/sets/dl2",
        "https://soundcloud.com/nhanhlaxanh/sets/dl1"
    ],
    "rock": [
        "https://soundcloud.com/tr-n-nguy-n-915588676/sets/liveshow-buc-tuong-tro-ve"
    ],
    "sleep": [
        "https://soundcloud.com/nhanhlaxanh/sets/wpl",
        "https://soundcloud.com/nhanhlaxanh/sets/kvyt",
        "https://soundcloud.com/nhanhlaxanh/sets/sleep"
    ],
    "bolero": [
        "https://soundcloud.com/nhanhlaxanh/sets/bc8",
        "https://soundcloud.com/nhanhlaxanh/sets/bc7",
        "https://soundcloud.com/nhanhlaxanh/sets/bc6",
        "https://soundcloud.com/nhanhlaxanh/sets/bc5",
        "https://soundcloud.com/nhanhlaxanh/sets/bc4",
        "https://soundcloud.com/nhanhlaxanh/sets/bc3",
        "https://soundcloud.com/nhanhlaxanh/sets/bc2",
        "https://soundcloud.com/nhanhlaxanh/sets/bc1"
    ],
    "inspiration": [
        "https://soundcloud.com/nhanhlaxanh/sets/nkm",
        "https://soundcloud.com/nhanhlaxanh/sets/sbh",
        "https://soundcloud.com/nhanhlaxanh/sets/wpl",
        "https://soundcloud.com/nhanhlaxanh/sets/dhm2",
        "https://soundcloud.com/nhanhlaxanh/sets/ms2",
        "https://soundcloud.com/nhanhlaxanh/sets/dhm1",
        "https://soundcloud.com/nhanhlaxanh/sets/cd2",
        "https://soundcloud.com/nhanhlaxanh/sets/cd1",
        "https://soundcloud.com/nhanhlaxanh/sets/mars",
        "https://soundcloud.com/nhanhlaxanh/sets/cm1"
    ],
    "christmas": [
        "https://soundcloud.com/nhanhlaxanh/sets/christmas2",
        "https://soundcloud.com/nhanhlaxanh/sets/christmas1"
    ],
    "xuân": [
        "https://soundcloud.com/nguy-n-c-b-c-675906594/sets/nhac-xuan-bat-hu"
    ],
    "love": [
        "https://soundcloud.com/nhanhlaxanh/sets/dcng",
        "https://soundcloud.com/nhanhlaxanh/sets/vtby",
        "https://soundcloud.com/nhanhlaxanh/sets/mgltb",
        "https://soundcloud.com/nhanhlaxanh/sets/tcnn",
        "https://soundcloud.com/nhanhlaxanh/sets/nmbn",
        "https://soundcloud.com/nhanhlaxanh/sets/xle",
        "https://soundcloud.com/nhanhlaxanh/sets/lmtls",
        "https://soundcloud.com/nhanhlaxanh/sets/bm1",
        "https://soundcloud.com/nhanhlaxanh/sets/999r2",
        "https://soundcloud.com/nhanhlaxanh/sets/999r1"
    ],
    "coffee": [
        "https://soundcloud.com/nhanhlaxanh/sets/hcs5",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs4",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs3",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs2",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs1"
    ],
    "moon": [
        "https://soundcloud.com/nhanhlaxanh/sets/nbn",
        "https://soundcloud.com/nhanhlaxanh/sets/bm1",
        "https://soundcloud.com/nhanhlaxanh/sets/atc1",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs5",
        "https://soundcloud.com/nhanhlaxanh/sets/dayspring2",
        "https://soundcloud.com/nhanhlaxanh/sets/reflection",
        "https://soundcloud.com/nhanhlaxanh/sets/fullmoon"
    ],
    "karaoke": [
        "https://soundcloud.com/nhanhlaxanh/sets/karaoke"
    ],
    "la": [
        "https://soundcloud.com/nhanhlaxanh/sets/eboa"
    ],
    "stories": [
        "https://soundcloud.com/soundcloud-stories/sets/alternative-ireland",
        "https://soundcloud.com/soundcloud-stories/sets/alternative-japan",
        "https://soundcloud.com/soundcloud-stories/sets/alternative-sweden",
        "https://soundcloud.com/soundcloud-stories/sets/big-mood-2016",
        "https://soundcloud.com/soundcloud-stories/sets/festival-radar-desert-rave-trip",
        "https://soundcloud.com/soundcloud-stories/sets/festival-radar-desert-road-trip-2026",
        "https://soundcloud.com/soundcloud-stories/sets/glastonbury-2025",
        "https://soundcloud.com/soundcloud-stories/sets/ibiza-summer-anthems",
        "https://soundcloud.com/soundcloud-stories/sets/new-indie",
        "https://soundcloud.com/soundcloud-stories/sets/passport-puerto-rico",
        "https://soundcloud.com/soundcloud-stories/sets/rewind-electronic-2016",
        "https://soundcloud.com/soundcloud-stories/sets/sounds-of-latin-culture",
        "https://soundcloud.com/soundcloud-stories/sets/sounds-of-the-asian-diaspora",
        "https://soundcloud.com/soundcloud-stories/sets/uk-garage",
        "https://soundcloud.com/soundcloud-stories/sets/women-of-musica-mexicana",
    ],
    "bs": [
        "https://soundcloud.com/nhanhlaxanh/sets/glory"
    ],
    "mj": [
        "https://soundcloud.com/nhanhlaxanh/sets/mj1"
    ],
    "cnkk": [
        "https://soundcloud.com/hi-n-okyo/sets/daily-stoic-am-m-v-c-m-x-c"
    ],
    "tkcx": [
        "https://soundcloud.com/v-n-th-ng-nguy-n-thuong-nguyen-media/sets/tri-k-c-m-x-c-tamsukinhdoanh",
        "https://soundcloud.com/blue-765383763/sets/tri-k-c-m-x-c-tamsukinhdoanh",
        "https://soundcloud.com/m-nh-linh-tr-n-496864268/sets/tri-ky-cam-xuc",
        "https://soundcloud.com/miler-henppy/sets/tri-k-c-m-x-c-tamsukinhdoanh",
        "https://soundcloud.com/minh-h-i-v-593829035/sets/tri-ki-cam-xuc",
        "https://soundcloud.com/le-trung-nhan/sets/tri-ki-cam-xuc",
        "https://soundcloud.com/minh-tu-n-553145952/sets/trikycamxuc",
        "https://soundcloud.com/qu-c-885618429/sets/tri-k-c-m-x-c",
        "https://soundcloud.com/thai-hoang-nam-775236035/sets/tri-k-c-m-x-c-tamsukinhdoanh",
        "https://soundcloud.com/chien-dao-van-895049440/sets/tri-k-c-m-x-c-tamsukinhdoanh",
        "https://soundcloud.com/chen-nguy-n-910823790/sets/tri-k-c-m-x-c-tamsukinhdoanh",
        "https://soundcloud.com/trikycamxuc/sets/t-m-s-kinh-doanh-web5ngay",
        "https://soundcloud.com/user-497407594/sets/tri-k-c-m-x-c",
        "https://soundcloud.com/user-214793012/sets/t-m-s-kinh-doanh-web5ngay",
        "https://soundcloud.com/hey-iamsalem/sets/lemnlife",
        "https://soundcloud.com/gusvie-761004526/sets/greens-podcast"
    ],
    "xd": [
        "https://soundcloud.com/ki-n-nguy-n-ch-306626288/sets/tinh-th-n-x-y-d-ng",
        "https://soundcloud.com/h-nh-v-672592290/sets/b-i-ca-x-y-d-ng",
        "https://soundcloud.com/phuongbte/sets/bi-quyet-xay-dung-nhom-lam",
        "https://soundcloud.com/user-948212987/sets/k-n-ng-kinh-doanh-x-y-d-ng-h",
        "https://soundcloud.com/nuviet/sets/kinh-nghi-m-x-y-d-ng-h-th-ng",
        "https://soundcloud.com/sang-huynh-834491688/sets/b-quy-t-x-y-d-ng-c-nghi-p-b-c",
        "https://soundcloud.com/nguy-n-th-o-31/sets/english-xay-dung",
        "https://soundcloud.com/nguyen-nam-428622813/sets/ti-ng-anh-x-y-d-ng",
        "https://soundcloud.com/ti-ng-anh-x-y-d-ng/sets/english-for-construction-pq"     
    ],
    "audio": [
        "https://soundcloud.com/radioonlinevietnam/sets/radioplusvn-truyen-trang-quynh-trang-lon",
        "https://soundcloud.com/user-380097984/sets/day-con-lam-giau-tap-12-xay-dung-con-thuyen-tai-chinh-cua-ban",
        "https://soundcloud.com/sach-noi-phuong-hoa/sets/gi-n-th-ch-nh-t-h-nh",
        "https://soundcloud.com/sach-noi-phuong-hoa/sets/t-m-b-nh-y-n-trong-gia-nh-th",
        "https://soundcloud.com/sach-noi-phuong-hoa/sets/h-nh-ph-c-c-m-tay-th-ch-nh-t-h",
        "https://soundcloud.com/ncavn/sets/audio-book-van-hoa-va-con-nguoi"	
    ],
}

# alias: country dùng chung với bolero
aliases = {
    "us": ["us", "US", "US-UK", "US-uk", "us-UK", "us-uk", "US_UK", "us_uk",  "nhạc âu mỹ", "nhạc tây", "nhạc nước ngoài", "nhạc mới nước ngoài", "Mỹ", "mỹ"],
    "vn": ["vn", "VN", "nhạc việt nam", "nhạc trong nước", "nhạc mới trong nước", "Việt Nam", "việt nam", "Việt nam", "việt Nam"],
    "fr": ["fr", "france", "France","pháp", "Pháp", "nhạc pháp", "Nhạc Pháp", "nhạc Pháp"],
    "ca": ["ca", "nhạc canada", "Canada"],
    "af": ["af", "Africa", "africa", "nhạc châu phi", "nhạc Châu Phi", "Nhạc Châu Phi", "nhạc Châu phi", "nhạc châu Phi"],
    "world": ["world", "thế giới", "nhạc thế giới"],
    "de": ["de", "nhạc đan mạch", "Đan Mạch", "Đan mạch", "đan Mạch"],
    "buzzing": ["buzzing", "nhạc khám phá", "nhạc nóng", "hàng nóng"],
    "soul": ["soul", "giới trẻ", "genz", "câu hỏi", "tự vấn", "an ủi", "nhạc tâm hồn", "tâm hồn"],
    "dance": ["dance", "nhạc dance", "nhảy", "nhạc nhảy", "bar", "quán bar"],
    "r&b": ["r&b", "R&B", "nhạc r&b", "nhạc luyến láy", "nhạc người da đen", "da đen"],
    "pop": ["pop", "nhạc phổ thông", "nhạc đại chúng"],
    "sleep": ["sleep", "ngủ", "nhạc ngủ", "nhạc làm dịu tinh thần", "nhạc không lời"],
    "bolero": ["bolero", "country", "trữ tình", "nhạc trữ tình", "quê hương"],
    "inspiration": ["inspiration", "nguồn cảm hứng", "đam mê của tôi", "đam mê", "nhạc dân tộc", "nhạc chiết trung"],
    "christmas": ["christmas", "Christmas", "giáng sinh", "Giáng Sinh", "giáng Sinh", "Giáng sinh", "Noel", "noel"],
    "love": ["love", "tình yêu", "yêu thương", "romantic", "nhạc tình yêu", "nhạc lãng mạn"],
    "coffee": ["coffee", "heaven", "shop", "heaven coffee", "coffee shop", "heaven coffee shop"],
    "saigon": ["saigon", "sài gòn", "sài thành", "sg", "Sài Gòn", "sài Gòn", "Sài gòn", "SÀI GÒN", "tphcm", "TpHCM", "TPHCM", "miền nam", "Miền Nam", "miền Nam", "Miền nam", "Phía Nam", "Phía nam", "phía Nam", "PHÍA NAM"],
    "hanoi": ["hanoi", "hà nội", "hn", "Hà Nội", "Hà nội", "hà Nội", "HÀ NỘI", "miền bắc", "miền Bắc", "Miền bắc", "Miền Bắc", "Phía Bắc", "Phía bắc", "phía Bắc", "PHÍA BẮC"],
    "dalat": ["dalat", "da lat", "đà lạt", "Đà Lạt", "đà Lạt"],
    "moon": ["moon", "Moon", "mặt trăng", "Mặt trăng", "mặt Trăng", "Mặt Trăng"],
    "karaoke": ["karaoke", "tự hát", "hát hay không bằng hay hát", "tự sướng"],
    "la": ["la", "chữ a", "playlist a", "A"],
    "stories": ["stories", "Stories", "soundcloud", "Soundcloud", "souncloud stories", "Souncloud stories", "Souncloud Stories", "playlist of soundcloud", "soundcloud playlist", "Soundcloud playlist", "Soundcloud Playlist"],
    "bs": ["bs", "Britney Spears", "công chúa nhạc pop", "britney spears", "britney"],
    "mj": ["mj", "michael jackson", "Michael Jackson", "Michael", "Jackson", "ông vua nhạc pop"],
    "cnkk": ["cnkk", "chủ nghĩa khắc kỷ", "Chủ Nghĩa Khắc Kỷ", "Chủ nghĩa khắc kỷ", "CHỦ NGHĨA KHẮC KỶ"],
    "tkcx": ["tkcx", "tri kỷ", "Tri Kỷ", "tri Kỷ", "Tri kỷ", "tri kỷ cảm xúc", "Tri kỷ cảm xúc", "Tri Kỷ Cảm Xúc", "TRI KỶ CẢM XÚC"],
    "xd": ["xd", "xây dựng", "Xây dựng", "xây Dựng", "XÂY DỰNG", "nghề xây dựng"],
    "audio": ["audio", "truyện đọc", "nghe truyện", "kể chuyện", "nghe kể truyện"],
}

# Lấy playlist theo username và danh sách playlist
@app.get("/feed_soundcloud")
def get_playlists(username: str = Query(...), playlists: str = Query(None)):
    results = []
    if playlists:
        playlist_list = playlists.split(",")
        for pl in playlist_list:
            base_url = f"https://soundcloud.com/{username}/sets/{pl.strip()}"
            api_url = "https://soundcloud.com/oembed"
            params = {"url": base_url, "format": "json"}
            r = requests.get(api_url, params=params)
            if r.status_code == 200:
                data = r.json()
                results.append({
                    "title": data.get("title"),
                    "author_name": data.get("author_name"),
                    "author_url": data.get("author_url"),
                    "thumbnail_url": data.get("thumbnail_url"),
                    "provider_name": data.get("provider_name"),
                    "provider_url": data.get("provider_url"),
                    "html": data.get("html"),
                    "description": data.get("description")  # thêm mô tả
                })
    return results

# Lấy playlist theo tag (dùng chung sample_playlists)
@app.get("/tag_playlists")
def tag_playlists(tag: str = Query(...), limit: int = 3):
    q = tag.lower()

    # tìm alias khớp
    matched_key = None
    for key, alias_list in aliases.items():
        if any(alias in q for alias in alias_list):
            matched_key = key
            break

    if not matched_key:
        return {"message": f"Tag '{tag}' chưa có dữ liệu curated."}

    urls = sample_playlists.get(matched_key, [])
    if not urls:
        return {"message": f"Tag '{tag}' chưa có dữ liệu curated."}

    # ✅ lấy ngẫu nhiên limit playlist thay vì 3 cái đầu
    urls = random.sample(urls, min(limit, len(urls)))

    results = []
    for link in urls:
        api_url = "https://soundcloud.com/oembed"
        params = {"url": link, "format": "json"}
        r = requests.get(api_url, params=params)
        if r.status_code == 200:
            data = r.json()
            results.append({
                "title": data.get("title"),
                "author_name": data.get("author_name"),
                "html": data.get("html"),
                "description": data.get("description")  # thêm mô tả
            })
    return results

# AI Playlist (dùng chung sample_playlists)
@app.get("/ai_playlist")
def ai_playlist(query: str = Query(...)):
    results = []
    q = query.lower()

    matched_key = None
    for key, alias_list in aliases.items():
        if any(alias in q for alias in alias_list):
            matched_key = key
            break

    if matched_key:
        urls = sample_playlists.get(matched_key, [])
        for url in urls:
            api_url = "https://soundcloud.com/oembed"
            params = {"url": url, "format": "json"}
            try:
                r = requests.get(api_url, params=params, headers=DEFAULT_HEADERS, timeout=10)
                if r.status_code == 200:
                    data = r.json()
                    results.append({
                        "title": data.get("title"),
                        "author_name": data.get("author_name"),
                        "html": data.get("html"),
                        "description": data.get("description")  # thêm mô tả
                    })
            except requests.exceptions.RequestException as e:
                logging.error(f"SoundCloud API error: {e}")

    logging.info(f"[ai_playlist] Feed OK - {len(results)} kết quả cho query '{query}'")
    return results

# Random Playlist (lấy ngẫu nhiên trong sample_playlists)
@app.get("/random_playlist")
def random_playlist():
    all_urls = []
    for urls in sample_playlists.values():
        all_urls.extend(urls)

    if not all_urls:
        return {"message": "Không có dữ liệu playlist."}

    chosen = random.choice(all_urls)
    return {"url": chosen}
