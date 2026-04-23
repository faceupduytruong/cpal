import os
import shutil
import zipfile
import requests
import subprocess
import stat

def remove_readonly(func, path, excinfo):
    os.chmod(path, stat.S_IWRITE)
    func(path)

def load_env(path):
    """Đọc file config.env và set biến môi trường"""
    if not os.path.exists(path):
        raise FileNotFoundError(f"Không tìm thấy file cấu hình: {path}")
    with open(path, encoding="utf-8") as f:
        for line in f:
            if "=" in line:
                key, value = line.strip().split("=", 1)
                os.environ[key] = value

# Luôn tìm config.env nằm cạnh file .py
script_dir = os.path.dirname(os.path.abspath(__file__))
config_path = os.path.join(script_dir, "config.env")
load_env(config_path)

MEGA_USER = os.getenv("MEGA_USER")
MEGA_PASS = os.getenv("MEGA_PASS")

if not MEGA_USER or not MEGA_PASS:
    raise ValueError("Thiếu MEGA_USER hoặc MEGA_PASS trong config.env")

# 0. Xóa nội dung trong thư mục đích
dst_folder = r"C:\Users\Admin\OneDrive\Documents\Reset System Windows\Music Playlist\Support Create Web\JavaScript GitHub"
print("Đang xóa nội dung trong thư mục đích...")
if os.path.exists(dst_folder):
    shutil.rmtree(dst_folder, onerror=remove_readonly)

# 1. Tải file ZIP từ GitHub
url = "https://github.com/faceupduytruong/cpal/archive/refs/heads/main.zip"
download_dir = r"C:\Users\Admin\Downloads\Compressed"
zip_path = os.path.join(download_dir, "cpal-main.zip")

print("Đang tải repo từ GitHub...")
response = requests.get(url)
with open(zip_path, "wb") as f:
    f.write(response.content)

# 2. Giải nén
extract_folder = "cpal-main"
print("Đang giải nén...")
with zipfile.ZipFile(zip_path, "r") as zip_ref:
    zip_ref.extractall(download_dir)

# 3. Xóa nội dung trong thư mục đích (lặp lại)
print("Đang xóa nội dung trong thư mục đích...")
if os.path.exists(dst_folder):
    shutil.rmtree(dst_folder, onerror=remove_readonly)

# 4. Copy nội dung repo sang thư mục đích
src_folder = os.path.join(download_dir, extract_folder)
print("Đang copy nội dung...")
shutil.copytree(src_folder, dst_folder)

# 5. Nén toàn bộ thư mục gốc với tên mới trong ZIP và di chuyển sang Desktop
root_folder = r"C:\Users\Admin\OneDrive\Documents\Reset System Windows"
zip_name = "Reset System Windows (Fullscreen)"
zip_output = zip_name + ".zip"

print("Đang nén toàn bộ thư mục...")
temp_dir = os.path.join(download_dir, "temp_zip")
if os.path.exists(temp_dir):
    shutil.rmtree(temp_dir, onerror=remove_readonly)
os.makedirs(temp_dir)

new_root = os.path.join(temp_dir, zip_name)
shutil.copytree(root_folder, new_root)

shutil.make_archive(zip_name, 'zip', temp_dir, zip_name)

desktop_zip = r"C:\Users\Admin\OneDrive\Desktop\Reset System Windows (Fullscreen).zip"
if os.path.exists(desktop_zip):
    os.remove(desktop_zip)

shutil.move(zip_output, desktop_zip)
print("Đã tạo và di chuyển file ZIP tới Desktop:", desktop_zip)

# 6. Xóa các file/thư mục cpal-* và temp_zip trong thư mục Compressed
print("Đang xóa các file/thư mục cpal-* và temp_zip trong thư mục Compressed...")
for item in os.listdir(download_dir):
    if item.startswith("cpal-") or item == "temp_zip":
        item_path = os.path.join(download_dir, item)
        if os.path.isdir(item_path):
            shutil.rmtree(item_path, onerror=remove_readonly)
        else:
            os.remove(item_path)

# 7. Upload lên Mega.nz
print("Đang upload lên Mega.nz...")

megatools_exe = r"C:\ProgramData\chocolatey\bin\megatools.exe"
mega_target = "/Root/Luu/Windows/Ứng dụng làm đẹp/Giả Full Transparent"

# Xóa file cũ nếu có
subprocess.run([
    megatools_exe, "rm",
    "--username", MEGA_USER,
    "--password", MEGA_PASS,
    mega_target + "/Reset System Windows (Fullscreen).zip"
])

# Upload file mới
subprocess.run([
    megatools_exe, "put",
    "--username", MEGA_USER,
    "--password", MEGA_PASS,
    "--path", mega_target,
    desktop_zip
])

print("Upload hoàn tất!")
