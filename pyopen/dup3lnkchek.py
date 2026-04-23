import os
from collections import Counter

# Hỏi người dùng nhập danh sách URL, cách nhau bằng dấu phẩy
raw_input = input("Nhập danh sách URL, cách nhau bằng dấu phẩy:\n").strip()

# Tách chuỗi thành list, loại bỏ khoảng trắng thừa
urls = [u.strip() for u in raw_input.split(",") if u.strip()]

print("\n🔍 Bắt đầu kiểm tra trùng lặp liên kết (≥ 3 lần)...\n")

# Đếm số lần xuất hiện của mỗi URL
url_counts = Counter(urls)

# Lọc ra các URL xuất hiện từ 3 lần trở lên
duplicates_3plus = [url for url, count in url_counts.items() if count >= 3]

# Ghi kết quả vào file
with open("C:/Users/Admin/OneDrive/Desktop/trunglap3.txt", "w", encoding="utf-8") as f:
    f.write("🔍 Kết quả kiểm tra trùng lặp liên kết (≥ 3 lần):\n\n")

    if duplicates_3plus:
        f.write("⚠️ Các liên kết bị trùng lặp từ 3 lần trở lên:\n")
        for url in duplicates_3plus:
            f.write(f"- {url} (xuất hiện {url_counts[url]} lần)\n")
    else:
        f.write("✅ Không có liên kết nào bị trùng lặp từ 3 lần trở lên.\n")

print("📁 File đã được lưu tại:", os.path.abspath("trunglap3.txt"))
