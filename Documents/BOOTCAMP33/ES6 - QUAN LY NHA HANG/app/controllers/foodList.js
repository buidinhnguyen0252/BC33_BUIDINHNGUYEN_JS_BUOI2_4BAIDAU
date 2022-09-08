import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";
let menu = new Menu();
document.querySelector("#btnThemMon").innerHTML = function () {
  //Tạo ra đối tượng món ăn để lưu trữ thông tin từ nguồi dùng nhập vào
  let arrInput = document.querySelectorAll(
    "#foodform input ,#foodform select,#foodform textarea"
  );
  //Tạo món ăn để lưu trữ
  let monMoi = new MonAn();
  for (let input of arrInput) {
    //Lấy ra từng thẻ ( lấy value , id của thẻ)
    let { id, value } = input;
    monMoi[id] = value;
  }
  console.log(monMoi);
  //Dùng đối tượng menu để lưu thông tin món
  menu.themMonAn(monMoi);
  menu.luuMonAn();

  console.log("menu", menu);
};

window.onload = function () {
  menu.layMonAn();
  console.log("menu", menu);
};
