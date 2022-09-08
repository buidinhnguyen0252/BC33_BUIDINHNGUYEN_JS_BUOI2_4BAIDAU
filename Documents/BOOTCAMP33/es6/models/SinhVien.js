//Prototype ( Lớp đối tượng - kiểu dữ liệu mình tự định nghĩa)
function SinhVien(maSV) {
  this.maSinhVien = "";
  this.tenSinhVien = "";
  this.diemToan = "";
  this.diemLy = "";
  this.diemHoa = "";
  this.tinhDiemTrungBinh = function () {
    return Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa);
  };
}

//ES6 : khai báo class (prototype)
export class SinhVienES6 {
  //Thuộc tính
  maSinhVien = "";
  tenSinhVien = "";
  diemToan = "";
  diemLy = "";
  diemHoa = "";
  //Hàm khởi tạo : là hàm mà mình new SinhVienES6() ==> Tạo xong sẽ chạy luôn hàm này
  constructor(maSV) {
    this.maSinhVien = maSV;
  }
  //Phương thức

  tinhDiemTrungBinh() {
    return Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa);
  }
}

/*
Các tính chất của hướng đối tượng
+Tính trừu tượng (Abstraction) : loại bỏ những tính chất không quan trọng , chỉ tập trung vào các tính chất quan trọng lần lưu trữ trong hệ thống
+ Tính chất đóng gói ( Encapsulation): mô tả đặc trưng của lớp đối tượng (Phương thức và thuộc tính). Thuộc tính và phương thức của đối tượng nào thì phải thông qua đối tượng đó mới đc truy xuất .(JS không hỗ trợ access modifier)
+ Tính đa hình (Polymorphism) : Javascript không hỗ trợ 

1 lớp đối tượng có 2 thành phần chính 
+Thuộc tính : Biến trong đối tượng
+Phương thức : là hàm trong đối tượng
Khai báo phương thức:
    +Phương thức thuần (ô lập phương đỏ) : khi cần override function
    + Phương thức là thuộc tính (expression function - hình hộp chữ nhật màu xanh): dùng cho tất cả các trường hợp ngoại trừ override4
 */

//Kế thừa
class NguoiDung {
  maNguoiDung = "";
  tenNguoiDung = "";
  dangNhap() {
    console.log("call api đăng nhập");
  }
}
class HocVien extends NguoiDung {
  danhSachLopHoc = [];
}
