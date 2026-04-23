import os
from collections import Counter

# Hỏi người dùng nhập danh sách URL, cách nhau bằng dấu phẩy
raw_input = input("Nhập danh sách URL, cách nhau bằng dấu phẩy:\n").strip()

# Tách chuỗi thành list, loại bỏ khoảng trắng thừa
urls = [u.strip() for u in raw_input.split(",") if u.strip()]

print("\n🔍 Đang lọc các liên kết không bị trùng lặp...\n")

# Đếm số lần xuất hiện của mỗi URL
url_counts = Counter(urls)

# Lọc ra các URL chỉ xuất hiện đúng 1 lần
unique_urls = [url for url, count in url_counts.items() if count == 1]

# Ghi kết quả vào file
with open("C:/Users/Admin/OneDrive/Desktop/link_khong_trung.txt", "w", encoding="utf-8") as f:
    f.write("🔗 Các liên kết không bị trùng lặp:\n\n")
    for url in unique_urls:
        f.write(f"{url}\n")

print("📁 File đã được lưu tại:", os.path.abspath("link_khong_trung.txt"))
