export class MonAn {
  maMon = "";
  tenMon = "";
  loai = "";
  giaMon = "";
  khuyenMai = "";
  tinhTrang = "";
  hinhMon = "";
  moTa = "";
  tinhGiaKhuyenMai = function () {
    let giaKM = this.giaMon - (this.giaMon * this.khuyenMai) / 100;
    return giaKM;
  };
}
