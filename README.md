# VNFarm - Website Bán Nông Sản Sạch


## Giới thiệu

VNFarm là nền tảng thương mại điện tử chuyên về mua bán nông sản sạch, kết nối người nông dân và các nhà cung cấp uy tín trực tiếp với người tiêu dùng. Dự án này được phát triển với mục tiêu mang đến cho người dùng trải nghiệm mua sắm trực tuyến đơn giản, tiện lợi, đồng thời đảm bảo chất lượng sản phẩm nông nghiệp.

## Tính năng chính

### Dành cho khách hàng
- **Đăng ký/Đăng nhập**: Hệ thống tài khoản bảo mật với nhiều quyền khác nhau
- **Tìm kiếm và lọc sản phẩm**: Theo danh mục, giá cả, xuất xứ và nhiều tiêu chí khác
- **Đặt hàng trực tuyến**: Giỏ hàng thông minh, áp dụng mã giảm giá
- **Thanh toán**: Hỗ trợ nhiều phương thức thanh toán (VNPay, COD, chuyển khoản)
- **Theo dõi đơn hàng**: Cập nhật trạng thái theo thời gian thực
- **Đánh giá sản phẩm**: Chia sẻ trải nghiệm mua hàng
- **Chat với người bán**: Trao đổi trực tiếp với shop
- **Yêu cầu hoàn tiền**: Xử lý các trường hợp không hài lòng với sản phẩm

### Dành cho người bán
- **Quản lý cửa hàng**: Cập nhật thông tin, logo, mô tả
- **Quản lý sản phẩm**: Thêm, sửa, xóa sản phẩm
- **Quản lý đơn hàng**: Xử lý đơn hàng, cập nhật trạng thái
- **Chat với khách hàng**: Hỗ trợ khách hàng trực tiếp
- **Thống kê bán hàng**: Báo cáo doanh thu, sản phẩm bán chạy

### Dành cho quản trị viên
- **Quản lý người dùng**: Phân quyền, khóa/mở tài khoản
- **Quản lý danh mục**: Tổ chức sản phẩm theo danh mục
- **Kiểm duyệt sản phẩm**: Đảm bảo chất lượng nội dung
- **Cài đặt hệ thống**: Cấu hình chung toàn bộ hệ thống

## Công nghệ sử dụng

### Backend
- **ASP.NET Core MVC**: Framework phát triển web
- **Entity Framework Core**: ORM để thao tác với cơ sở dữ liệu
- **JWT Authentication**: Xác thực người dùng
- **SignalR**: Giao tiếp thời gian thực cho chức năng chat
- **Pusher**: Hỗ trợ tính năng nhắn tin thời gian thực

### Frontend
- **HTML5/CSS3/JavaScript**: Nền tảng frontend cơ bản
- **Bootstrap**: Framework UI responsive
- **jQuery**: Thư viện JavaScript
- **AJAX**: Giao tiếp không đồng bộ với server
- **Font Awesome**: Icon đẹp và thân thiện

### Cơ sở dữ liệu
- **SQL Server**: Lưu trữ dữ liệu chính

### Công cụ và dịch vụ khác
- **VNPay**: Cổng thanh toán trực tuyến
- **Azure/AWS**: Dịch vụ lưu trữ đám mây (tùy chọn)
- **Git**: Quản lý mã nguồn

## Cấu trúc dự án

```
VNFarm/
├── Controllers/        # Các controller xử lý logic chính
├── Models/             # Định nghĩa cấu trúc dữ liệu
├── DTOs/               # Các đối tượng truyền dữ liệu
├── Views/              # Giao diện người dùng (Razor)
│   ├── Account/        # Trang liên quan đến tài khoản
│   ├── Admin/          # Trang quản trị
│   ├── Seller/         # Trang dành cho người bán
│   ├── Product/        # Trang sản phẩm
│   └── Shared/         # Thành phần dùng chung
├── Services/           # Các dịch vụ nghiệp vụ
├── Repositories/       # Tầng truy cập dữ liệu
├── wwwroot/            # Tài nguyên tĩnh (CSS, JS, Images)
│   ├── Custom/         # JS/CSS tùy chỉnh
│   ├── img/            # Hình ảnh
│   └── lib/            # Thư viện bên thứ 3
└── Enums/              # Các enum định nghĩa trạng thái
```

## Cài đặt và chạy ứng dụng

### Yêu cầu hệ thống
- .NET 6.0 SDK trở lên
- SQL Server (hoặc SQL Server Express)
- Visual Studio 2022 (khuyên dùng) hoặc Visual Studio Code

### Các bước cài đặt
1. Clone dự án từ repository:
   ```bash
   https://github.com/nguyenngocdantruong/FrontendVNFarm.git
   cd FrontendVNFarm
   ```

2. Khôi phục các gói NuGet:
   ```bash
   dotnet restore
   ```

3. Cập nhật chuỗi kết nối trong `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=your_server;Database=VNFarm;Trusted_Connection=True;MultipleActiveResultSets=true"
   }
   ```

4. Thực hiện migration để tạo cơ sở dữ liệu:
   ```bash
   dotnet ef database update
   ```

5. Chạy ứng dụng:
   ```bash
   dotnet run
   ```

6. Truy cập ứng dụng tại địa chỉ: `https://localhost:5011`

