import { MonAn } from "../models/MonAn.js";
import EnLanguage from "../language/en.js";
import VniLanguage from "../language/vni.js";
document.querySelector("#btnThemMon").onclick = () => {
  // Sử dụng ES6 lấy thông tin từ món ăn
  let mon = new MonAn();
  //Dom đến các thẻ input đưa vào object món
  let arrInput = document.querySelectorAll(`#foodForm input ,
   #foodForm select,
  #foodForm textarea`);
  //arrInput = [input#maMon ; input#tenmon]
  console.log(arrInput);
  for (let input of arrInput) {
    //Mỗi lần duyệt lấy ra id và value
    let { id, value } = input;
    mon[id] = value;
  }
  console.log(mon);
  //xử lý hiện thị output
  let html = "";
  //process
  for (let key in mon) {
    let tenThuocTinh = VniLanguage[key];
    let giaTri = mon[key];
    if (typeof mon[key] === "function") {
      giaTri = mon[key]();
    }
    if (key === "hinhMon") {
      giaTri = <img src="${giaTri}" width="300" />;
    }
    html += ` <li
    class="list-group-item d-flex justify-content-between lh-condensed"
  >
    <div>
      <h6 class="my-0">${tenThuocTinh}</h6>
    </div>
    <span id="span-${key}" class="text-muted">${giaTri}</span>
  </li>`;
  }
  document.querySelector("#ul-result").innerHTML = html;
};
