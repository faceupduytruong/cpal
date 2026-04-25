from fastapi import FastAPI, Query
import requests

app = FastAPI()

@app.get("/feed_soundcloud")
def get_playlists(username: str = Query(...)):
	base_url = f"https://soundcloud.com/{username}/sets"
	# ở đây ta giả định bạn có 1 playlist chính, hoặc bạn có thể mở rộng để crawl nhiều playlist
	api_url = "https://soundcloud.com/oembed"
	params = {"url": base_url, "format": "json"}
	r = requests.get(api_url, params=params)
	return r.json()
