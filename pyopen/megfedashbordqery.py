import os
import subprocess
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

# --- Load config.env ---
script_dir = os.path.dirname(os.path.abspath(__file__))
config_path = os.path.join(script_dir, "config.env")

def load_env(path):
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            for line in f:
                if "=" in line:
                    key, value = line.strip().split("=", 1)
                    os.environ[key] = value

load_env(config_path)

MEGA_USER = os.getenv("MEGA_USER")
MEGA_PASS = os.getenv("MEGA_PASS")

if not MEGA_USER or not MEGA_PASS:
    raise ValueError("Thiếu MEGA_USER hoặc MEGA_PASS trong config.env")

# Đường dẫn tới megatools.exe
megatools_exe = r"C:\ProgramData\chocolatey\bin\megatools.exe"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def format_size(size_str: str) -> str:
    """Chuyển bytes sang MB, làm tròn 2 chữ số thập phân"""
    try:
        size = int(size_str)
        return f"{size/1024/1024:.2f} MB"
    except ValueError:
        return size_str  # nếu không phải số thì giữ nguyên

@app.get("/feed")
def get_feed(q: str = Query(..., description="Từ khóa tìm kiếm")):
    cmd = [
        megatools_exe, "ls",
        "--username", MEGA_USER,
        "--password", MEGA_PASS,
        "--long"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")

    if result.returncode != 0:
        return {"error": result.stderr.strip()}

    output = result.stdout.splitlines() if result.stdout else []
    results = []

    for line in output:
        if q.lower() in line.lower():
            parts = line.strip().split(maxsplit=6)
            if len(parts) == 7:
                file_id = parts[0]
                size = format_size(parts[3])          # dung lượng quy đổi sang MB
                date = parts[4] + " " + parts[5]      # ngày + giờ
                path = parts[6]                       # đường dẫn đầy đủ
                results.append({
                    "name": path,                      # hiển thị luôn đường dẫn
                    "id": file_id,
                    "size": size,
                    "date": date,
                    "type": "folder" if path.endswith("/") else "file"
                })

    return {"feed": results}