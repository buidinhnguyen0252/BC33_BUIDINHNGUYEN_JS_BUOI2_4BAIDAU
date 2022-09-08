//Code các chức năng thao với dữ liệu tứ backend
//--------------GET : Lấy thông tin từ server về và hiển thị lên table tbody----->
async function getDataSinhVienApi() {
  try {
    var result = await axios({
      url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien", //Đường dẫn BE cung cấp
      method: "GET",
    });
    console.log(result.data);
    console.log(1);
  } catch (err) {
    console.log(err);
  }
  //Thành công thì làm gì ?
  promise.then(function (result) {
    console.log("result", result.data);
    //Gọi hàm để từ dữ liệu tạo ra thẻ tr trên tbody
    renderSinhVien(result.data);
  });

  //Thát bại
  promise.catch(function (err) {
    console.log("err");
  });
}
//Sau khi giao diện load xong thì sẽ tự động thực thi các hàm trong function này
window.onload = function () {
  //gọi api lấy data từ backend
  getDataSinhVienApi();
};

/**
 * Hàm này sẽ nhận vào 1 array (sinhVien) và trả ra output là string <tr>....</tr>
 * @param {*} arrSinhVien arrSinhVien là mảng các object sinhVien [sinhVien1,sinhVien2,...]
 * @returns trả ra 1 giá trị là 1 htmlString '<tr>...</tr> <tr>...</tr>'
 */
function renderSinhVien(arrSinhVien) {
  //param : input :arrSinhVien
  var html = ""; //output: string html
  for (var i = 0; i < arrSinhVien.length; i++) {
    var sv = arrSinhVien[i]; //Mỗi lần duyệt lấy ra 1 object sinhVien từ mảng {maSinhVien:'1',tenSinhVien:'...',...}
    html += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>
                    <button class="btn btn-primary mr-2" onclick="chinhSua('${sv.maSinhVien}')">Sửa</button>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xoá</button>
                </td>
            </tr>
        `;
  }
  document.querySelector("tbody").innerHTML = html;
}

function chinhSua(maSV) {
  //call api laythongtinsinhvien --> load lên giao diện form input
  var promise = axios({
    url:
      "https://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=" +
      maSV,
    method: "GET",
  });
  promise.then(function (result) {
    //load lên input form
    console.log(result.data);
    document.querySelector("#maSinhVien").value = result.data.maSinhVien;
    document.querySelector("#tenSinhVien").value = result.data.tenSinhVien;
    document.querySelector("#email").value = result.data.email;
    document.querySelector("#soDienThoai").value = result.data.soDienThoai;
    document.querySelector("#loaiSinhVien").value = result.data.loaiSinhVien;
    document.querySelector("#diemToan").value = result.data.diemToan;
    document.querySelector("#diemLy").value = result.data.diemLy;
    document.querySelector("#diemHoa").value = result.data.diemHoa;
    document.querySelector("#diemRenLuyen").value = result.data.diemRenLuyen;
  });
}

function xoaSinhVien(maSV) {
  console.log(maSV);
  var promise = axios({
    url:
      "https://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=" + maSV,
    method: "DELETE",
  });
  promise.then(function (result) {
    console.log(result.data);
    //load lại table
    getDataSinhVienApi();
  });
  promise.catch(function (err) {
    console.log(err);
  });
}

/**-----------------POST : Thêm dữ liệu vào server --------------------- */
document.querySelector("#btnXacNhan").onclick = function () {
  // Lấy thông tin input từ người dùng : Tạo ra format backend yêu cầu
  var sinhVien = new SinhVien();
  sinhVien.maSinhVien = document.querySelector("#maSinhVien").value;
  sinhVien.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  sinhVien.email = document.querySelector("#email").value;
  sinhVien.soDienThoai = document.querySelector("#soDienThoai").value;
  sinhVien.diemToan = document.querySelector("#diemToan").value;
  sinhVien.diemLy = document.querySelector("#diemLy").value;
  sinhVien.diemHoa = document.querySelector("#diemHoa").value;
  console.log("sinhVien", sinhVien);

  //gọi api đưa dữ liệu về server
  var promise = axios({
    url: "https://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
    method: "POST",
    data: sinhVien, //dữ liệu gửi về server format BE quy định
  });
  promise.then(function (result) {
    console.log(result.data);
    getDataSinhVienApi();
  });
  promise.catch(function (err) {
    console.log(err);
  });
};

// ----------------PUT : Cập nhật dữ liệu------------------------
document.querySelector("#btnCapNhat").onclick = function () {
  //Lấy dữ liệu người dùng đúng format của backend
  var svUpdate = new SinhVien();
  svUpdate.maSinhVien = document.querySelector("#maSinhVien").value;
  svUpdate.tenSinhVien = document.querySelector("#tenSinhVien").value;
  svUpdate.email = document.querySelector("#email").value;
  svUpdate.soDienThoai = document.querySelector("#soDienThoai").value;
  svUpdate.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  svUpdate.diemToan = document.querySelector("#diemToan").value;
  svUpdate.diemLy = document.querySelector("#diemLy").value;
  svUpdate.diemHoa = document.querySelector("#diemHoa").value;
  svUpdate.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
  var promise = axios({
    url:
      "https://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=" +
      svUpdate.maSinhVien,
    method: "PUT",
    data: svUpdate, // chuẩn format backend
  });
  promise.then(function (result) {
    getDataSinhVienApi();
  });
  promise.catch(function (err) {
    console.log(err);
  });
};
