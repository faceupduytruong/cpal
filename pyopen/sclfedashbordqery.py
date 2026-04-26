from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    return results

# Endpoint mới cho AI Playlist
@app.get("/ai_playlist")
def ai_playlist(query: str = Query(...)):
    results = []
    sample_playlists = {
        "discover": [
            "https://soundcloud.com/trending-music-us/sets/pop-1",
            "https://soundcloud.com/trending-music-us/sets/r-b-1",
            "https://soundcloud.com/trending-music-us/sets/soul",
            "https://soundcloud.com/trending-music-us/sets/reggae",
            "https://soundcloud.com/trending-music-us/sets/latin",
            "https://soundcloud.com/trending-music-us/sets/indie-1",
            "https://soundcloud.com/trending-music-us/sets/jazz",
            "https://soundcloud.com/trending-music-us/sets/folk",
            "https://soundcloud.com/trending-music-us/sets/electronic-1",
            "https://soundcloud.com/trending-music-us/sets/country"
        ],
        "soul": [
            "https://soundcloud.com/nhanhlaxanh/sets/ncdnkrrts1",
            "https://soundcloud.com/nhanhlaxanh/sets/ncdnkrrts2",
            "https://soundcloud.com/nhanhlaxanh/sets/ncdnkrrts3"
        ],
        "saigon": [
            "https://soundcloud.com/nhanhlaxanh/sets/sgp",
            "https://soundcloud.com/nhanhlaxanh/sets/sgtls2"
        ],
        "dance": [
            "https://soundcloud.com/nhanhlaxanh/sets/msgldt1",
            "https://soundcloud.com/nhanhlaxanh/sets/lid2",
            "https://soundcloud.com/nhanhlaxanh/sets/lid1",
            "https://soundcloud.com/nhanhlaxanh/sets/tb1",
            "https://soundcloud.com/nhanhlaxanh/sets/qd2",
            "https://soundcloud.com/nhanhlaxanh/sets/eicme2",
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
            "https://soundcloud.com/nhanhlaxanh/sets/lmtls5",
            "https://soundcloud.com/nhanhlaxanh/sets/999r2",
            "https://soundcloud.com/nhanhlaxanh/sets/999r1",
            "https://soundcloud.com/nhanhlaxanh/sets/ntgnl2",
            "https://soundcloud.com/nhanhlaxanh/sets/hcs5",
            "https://soundcloud.com/nhanhlaxanh/sets/hcs2",
            "https://soundcloud.com/nhanhlaxanh/sets/ynh",
            "https://soundcloud.com/nhanhlaxanh/sets/dl2",
            "https://soundcloud.com/nhanhlaxanh/sets/dl1"
        ],
        "world": [
            "https://soundcloud.com/nhanhlaxanh/sets/lit",
            "https://soundcloud.com/nhanhlaxanh/sets/lip",
            "https://soundcloud.com/nhanhlaxanh/sets/lif2",
            "https://soundcloud.com/nhanhlaxanh/sets/lis",
            "https://soundcloud.com/nhanhlaxanh/sets/lif1",
            "https://soundcloud.com/nhanhlaxanh/sets/lid2",
            "https://soundcloud.com/nhanhlaxanh/sets/lid1",
            "https://soundcloud.com/nhanhlaxanh/sets/lii"
        ],
        "sleep": [
            "https://soundcloud.com/nhanhlaxanh/sets/wpl",
            "https://soundcloud.com/nhanhlaxanh/sets/kvyt"
        ],
        "bolero": [
            "https://soundcloud.com/nhanhlaxanh/sets/bc4",
            "https://soundcloud.com/nhanhlaxanh/sets/mxg"
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
        "mj": [
            "https://soundcloud.com/nhanhlaxanh/sets/mj1"
        ],
    }

    for key, urls in sample_playlists.items():
        if key in query.lower():
            for url in urls:
                api_url = "https://soundcloud.com/oembed"
                params = {"url": url, "format": "json"}
                r = requests.get(api_url, params=params)
                if r.status_code == 200:
                    data = r.json()
                    results.append({
                        "title": data.get("title"),
                        "author_name": data.get("author_name"),
                        "html": data.get("html"),
                    })

    return results
