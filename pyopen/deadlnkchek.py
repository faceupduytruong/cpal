import requests
import os

# Hỏi người dùng nhập danh sách URL, cách nhau bằng dấu phẩy
raw_input = input("Nhập danh sách URL, cách nhau bằng dấu phẩy:\n").strip()

# Tách chuỗi thành list, loại bỏ khoảng trắng thừa
urls = [u.strip() for u in raw_input.split(",") if u.strip()]

print("\n🔍 Bắt đầu kiểm tra các liên kết...\n")

with open("C:/Users/Admin/OneDrive/Desktop/ketqua.txt", "w", encoding="utf-8") as f:
    f.write("🔍 Bắt đầu kiểm tra các liên kết...\n\n")

    for url in urls:
        try:
            response = requests.get(url, allow_redirects=True, timeout=5)
            status = response.status_code

            if status == 200:
                result = f"{url} ✅ Hoạt động bình thường (200 OK)"
            elif status == 404:
                result = f"{url} ❌ Không tìm thấy (404 Not Found)"
            else:
                result = f"{url} ⚠️ Trạng thái khác: {status}"
        except requests.exceptions.RequestException as e:
            result = f"{url} ❌ Lỗi khi truy cập: {e}"

        print(result)
        f.write(result + "\n")

print("\n📁 File đã được lưu tại:", os.path.abspath("ketqua.txt"))
