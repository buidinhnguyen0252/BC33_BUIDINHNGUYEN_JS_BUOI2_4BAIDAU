export class menu {
  arrMonAn = []; //dữ liệu của table
  themMonAN = (monMoi) => {
    this.arrMonAn.push(monMoi);
  };

  luuMonAn() {
    //Biến đổi arr món ăn thành chuỗi
    localStorage.setItem("arrMon", JSON.stringify(this.arrMonAn));
  }
  layMonAn() {
    if (localStorage.getItem("arrMon")) {
      this.arrMonAn = JSON.parse(localStorage.getItem("arrMon"));
    }
  }
}
