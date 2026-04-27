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

MEGA_USER1 = os.getenv("MEGA_USER1")
MEGA_PASS1 = os.getenv("MEGA_PASS1")
MEGA_USER2 = os.getenv("MEGA_USER2")
MEGA_PASS2 = os.getenv("MEGA_PASS2")

if not MEGA_USER1 or not MEGA_PASS1 or not MEGA_USER2 or not MEGA_PASS2:
    raise ValueError("Thiếu MEGA_USER1/MEGA_PASS1 hoặc MEGA_USER2/MEGA_PASS2 trong config.env")

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
        return size_str

def run_megatools(user, password):
    cmd = [
        megatools_exe, "ls",
        "--username", user,
        "--password", password,
        "--long"
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="ignore")
    if result.returncode != 0:
        return []
    return result.stdout.splitlines() if result.stdout else []

@app.get("/feed")
def get_feed(q: str = Query(..., description="Từ khóa tìm kiếm")):
    output1 = run_megatools(MEGA_USER1, MEGA_PASS1)
    output2 = run_megatools(MEGA_USER2, MEGA_PASS2)

    results = []

    for account_name, output in [("Account1", output1), ("Account2", output2)]:
        for line in output:
            if q.lower() in line.lower():
                parts = line.strip().split(maxsplit=6)
                if len(parts) == 7:
                    file_id = parts[0]
                    size = format_size(parts[3])
                    date = parts[4] + " " + parts[5]
                    path = parts[6]
                    results.append({
                        "name": os.path.basename(path) if not path.endswith("/") else path,
                        "path": path,
                        "id": file_id,
                        "size": size,
                        "date": date,
                        "type": "folder" if path.endswith("/") else "file",
                        "account": account_name   # thêm thông tin tài khoản
                    })

    return {"feed": results}
