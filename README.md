# 🚀 Project Node.js Express & MongoDB CRUD

Đây là một dự án Node.js cơ bản sử dụng Express framework và MongoDB (thông qua Mongoose) để thực hiện các chức năng CRUD (Thêm, Đọc, Sửa, Xóa) người dùng. Dự án đã được tích hợp Bootstrap để có giao diện thân thiện.

---

## 🛠️ Yêu cầu hệ thống
- **Node.js**: Phiên bản 14.x hoặc mới hơn.
- **MongoDB**: Bạn có thể dùng MongoDB Local hoặc MongoDB Atlas (Cloud).
- **NPM**: Đi kèm khi cài đặt Node.js.

---

## 🏃‍♂️ Hướng dẫn cài đặt và chạy thử

### 1. Clone project hoặc tải về máy
Sau khi có mã nguồn, bạn hãy mở terminal tại thư mục gốc của dự án.

### 2. Cài đặt các thư viện (Dependencies)
Chạy lệnh sau để cài đặt toàn bộ các thư viện cần thiết:
```bash
npm install
```

### 3. Cấu hình biến môi trường (Environment Variables)
Vì các thông tin bảo mật (như chuỗi kết nối Database) không được đưa lên GitHub, bạn cần tạo file cấu hình riêng:
- Copy file `.env.example` và đổi tên thành `.env`.
- Mở file `.env` vừa tạo và điền các giá trị phù hợp:

```env
PORT=8080
NODE_ENV=development
# Thay chuỗi bên dưới bằng chuỗi kết nối MongoDB của bạn
MONGO_URI=mongodb://127.0.0.1:27017/crud_db
```

> **Lưu ý:** Nếu bạn dùng MongoDB Atlas, hãy thay `MONGO_URI` bằng chuỗi kết nối được cấp từ Dashboard của Atlas.

### 4. Khởi động ứng dụng
Chạy lệnh sau để bắt đầu:
```bash
npm start
```
Ứng dụng sẽ chạy tại địa chỉ: [http://localhost:8080](http://localhost:8080)

---

## 📂 Cấu trúc thư mục chính
- `src/server.js`: File khởi chạy server chính.
- `src/controllers/`: Xử lý logic khi người dùng gọi các route.
- `src/services/`: Xử lý nghiệp vụ và tương tác trực tiếp với Database.
- `src/models/`: Định nghĩa cấu trúc dữ liệu (Mongoose Schema).
- `src/routes/`: Quản lý các đường dẫn (URLs) của trang web.
- `src/views/`: Chứa các giao diện EJS (HTML templates).

---

## 📝 Các chức năng hiện có
- [x] **Xem danh sách**: Xem toàn bộ người dùng trong Database tại trang chủ.
- [x] **Thêm mới**: Tạo người dùng mới với đầy đủ thông tin.
- [x] **Chỉnh sửa**: Cập nhật thông tin người dùng đã tồn tại.
- [x] **Xóa**: Xóa người dùng kèm theo xác nhận.

---
**Author:** Nguyen Ngoc Thai Bao
**License:** ISC
