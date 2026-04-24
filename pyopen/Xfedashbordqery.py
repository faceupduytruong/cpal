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

BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAJ7m9AEAAAAAkYJ%2B3QPoOi%2BLDhVKwswa97c8xPM%3DiN0QYuL8eu9wKN9NNJ4EGpO6J5Ko97YFcnDqjHVOmSNVzH7kK3"

@app.get("/feed_twitter")
def get_feed_twitter(q: str = Query(..., description="Từ khóa tìm kiếm")):
    url = "https://api.twitter.com/2/tweets/search/recent"
    headers = {
        "Authorization": f"Bearer {BEARER_TOKEN}",
        "User-Agent": "MyTwitterApp/0.1"
    }
    params = {
        "query": q,
        "max_results": 20,  # số lượng tweet mỗi lần gọi
        "tweet.fields": "created_at,public_metrics"
    }

    response = requests.get(url, headers=headers, params=params)
    if response.status_code != 200:
        return {"error": response.text}

    data = response.json()
    tweets = []
    for t in data.get("data", []):
        tweets.append({
            "id": t["id"],
            "text": t["text"],
            "created_at": t["created_at"],
            "retweets": t["public_metrics"]["retweet_count"],
            "likes": t["public_metrics"]["like_count"],
            "url": f"https://twitter.com/i/web/status/{t['id']}"
        })

    return {"feed": tweets}