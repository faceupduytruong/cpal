from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cho phép mọi nguồn gốc
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/feed")
def get_feed(q: str = Query(..., description="Từ khóa tìm kiếm")):
    url = "https://api.github.com/search/repositories"
    all_repos = []

    for page in range(1, 3):  # ví dụ lấy 2 trang cho nhanh
        params = {
            "q": q,
            "sort": "stars",
            "order": "desc",
            "per_page": 100,
            "page": page
        }
        response = requests.get(url, params=params)
        data = response.json()

        for repo in data.get("items", []):
            all_repos.append({
                "name": repo["name"],
                "stars": repo["stargazers_count"],
                "url": repo["html_url"],
                "description": repo.get("description", "")
            })

    return {"feed": all_repos}
