import logging
logging.basicConfig(level=logging.INFO)
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import requests

# cấu hình logging
logging.basicConfig(level=logging.INFO)

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
    "love": [
        "https://soundcloud.com/nhanhlaxanh/sets/nmbn",
        "https://soundcloud.com/nhanhlaxanh/sets/tcnn",
        "https://soundcloud.com/nhanhlaxanh/sets/mgltb",
        "https://soundcloud.com/nhanhlaxanh/sets/xle",
        "https://soundcloud.com/nhanhlaxanh/sets/lmtls",
        "https://soundcloud.com/nhanhlaxanh/sets/bm1",
        "https://soundcloud.com/nhanhlaxanh/sets/999r2",
        "https://soundcloud.com/nhanhlaxanh/sets/999r1"
    ],
    "saigon": [
        "https://soundcloud.com/nhanhlaxanh/sets/sgp",
        "https://soundcloud.com/nhanhlaxanh/sets/msgldt1",
        "https://soundcloud.com/nhanhlaxanh/sets/sgtls2"
    ],
    "coffee": [
        "https://soundcloud.com/nhanhlaxanh/sets/hcs5",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs4",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs3",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs2",
        "https://soundcloud.com/nhanhlaxanh/sets/hcs1"
    ],
    "Đà Lạt": [
        "https://soundcloud.com/nhanhlaxanh/sets/dl2",
        "https://soundcloud.com/nhanhlaxanh/sets/dl1"
    ],
    "karaoke": [
        "https://soundcloud.com/nhanhlaxanh/sets/karaoke"
    ],
    "la": [
        "https://soundcloud.com/nhanhlaxanh/sets/eboa"
    ],
    "mj": [
        "https://soundcloud.com/nhanhlaxanh/sets/mj1"
    ],
    "bs": [
        "ttps://soundcloud.com/nhanhlaxanh/sets/glory"
    ],
}

# alias: country dùng chung với bolero
sample_playlists["country"] = sample_playlists["bolero"]
sample_playlists["bolero,country"] = sample_playlists["bolero"]
sample_playlists["trữ tình"] = sample_playlists["bolero"]

sample_playlists["heaven"] = sample_playlists["coffee"]
sample_playlists["shop"] = sample_playlists["coffee"]
sample_playlists["heaven coffee"] = sample_playlists["coffee"]
sample_playlists["coffee shop"] = sample_playlists["coffee"]
sample_playlists["heaven coffee shop"] = sample_playlists["coffee"]

@app.get("/feed_soundcloud")
def get_playlists(username: str = Query(...), playlists: str = Query(None)):
    results = []
    if playlists:
        playlist_list = playlists.split(",")
        for pl in playlist_list:
            base_url = f"https://soundcloud.com/{username}/sets/{pl.strip()}"
            api_url = "https://soundcloud.com/oembed"
            params = {"url": base_url, "format": "json"}
            try:
                r = requests.get(api_url, params=params, headers=DEFAULT_HEADERS, timeout=10)
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
                    })
            except requests.exceptions.RequestException as e:
                logging.error(f"SoundCloud API error: {e}")
    logging.info(f"[feed_soundcloud] Feed OK - {len(results)} kết quả cho user '{username}'")
    return results

# Lấy playlist theo tag (dùng chung sample_playlists)
@app.get("/tag_playlists")
def tag_playlists(tag: str = Query(...), limit: int = 20):
    urls = sample_playlists.get(tag.lower(), [])
    if not urls:
        return {"message": f"Tag '{tag}' chưa có dữ liệu curated."}

    urls = urls[:limit]
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
            })
    return results

# Endpoint mới cho AI Playlist
@app.get("/ai_playlist")
def ai_playlist(query: str = Query(...)):
    results = []
    sample_playlists = {
    }

    for key, urls in sample_playlists.items():
        if key in query.lower():
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
                        })
                except requests.exceptions.RequestException as e:
                    logging.error(f"SoundCloud API error: {e}")

    logging.info(f"[ai_playlist] Feed OK - {len(results)} kết quả cho query '{query}'")
    return results
