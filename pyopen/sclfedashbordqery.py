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
        "soul": [
            "https://soundcloud.com/nhanhlaxanh/sets/ncdnkrrts1",
            "https://soundcloud.com/nhanhlaxanh/sets/ncdnkrrts2",
            "https://soundcloud.com/nhanhlaxanh/sets/ncdnkrrts3"
        ],
        "saigon": [
            "https://soundcloud.com/nhanhlaxanh/sets/sgp",
            "https://soundcloud.com/nhanhlaxanh/sets/sgtls2"
        ]
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
