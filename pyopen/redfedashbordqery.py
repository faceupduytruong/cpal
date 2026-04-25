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

@app.get("/feed")
def get_feed(q: str = Query(..., description="Từ khóa tìm kiếm")):
	url = "https://www.reddit.com/search.json"
	headers = {
		"User-Agent": "MyRedditApp/0.1 by yourusername",
		"Accept": "application/json"
	}

	all_posts = []
	after = None

	# Lặp nhiều lần để gom đủ ~1000 kết quả
	for _ in range(10):  # 10 lần * 100 kết quả = 1000
		params = {"q": q, "sort": "relevance", "limit": 100}
		if after:
			params["after"] = after

		response = requests.get(url, params=params, headers=headers)
		if response.status_code != 200:
			break

		try:
			data = response.json()
		except Exception:
			break

		children = data.get("data", {}).get("children", [])
		if not children:
			break

		for post in children:
			p = post["data"]
			all_posts.append({
				"title": p.get("title"),
				"score": p.get("score"),
				"url": "https://reddit.com" + p.get("permalink", ""),
				"summary": p.get("selftext", "")
			})

		# Lấy token để gọi trang tiếp theo
		after = data.get("data", {}).get("after")
		if not after:
			break

	return {"feed": all_posts}
