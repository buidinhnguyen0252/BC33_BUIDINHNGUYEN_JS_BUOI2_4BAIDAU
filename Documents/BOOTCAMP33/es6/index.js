//hoisting
/*
    Phân biệt var, let, const
    var: hỗ trợ cơ chế hoisting, phạm vi hoạt động toàn scope. Khi khai báo 2 biến cùng tên nhau thì js sẽ lấy giá trị biến sau đè giá trị biến trước.
    let: không hỗ trợ cơ chế hoisting. Trong phạm vi 1 scope sẽ không thể khai báo 2 biến cùng tên, nếu khác scope thì js sẽ tự phân biệt 2 biến.
    const: tương tự let không hỗ trợ cơ chế hoisting. Trong phạm vi 1 scope sẽ không thể khai báo 2 biến cùng tên, nếu khác scope thì js sẽ tự phân biệt 2 biến. Tuy nhiên khai báo = const sẽ không thể gán lại giá trị. Đối hằng số là object thì không thể gán = object khác, tuy nhiên có thể gán lại các giá trị thuộc tính bên trong object.
    => Trong javascript nên xài let thay thế var trong tất cả trường hợp.
    //Kiểu dữ liệu
    + Primitive value (Kiểu dữ liệu nguyên thuỷ): string, number, boolean, undefined, null;
    + Reference value (Kiểu dữ liệu tham chiếu object | array): Prototype, {} , []
*/
let title = "cybersoft";
{
  //scope
  let title = "bootcamp33";
  console.log(title);
}
console.log(title);
const DOMAIN = "https://api.com/getall";
{
  const DOMAIN = "https://api.com/getall";
}
// DOMAIN = 'abc';

const config = {
  //0xxx
  url: "https://api.com/getAll",
  method: "GET",
};
// config = {}; //0yyy
console.log(config);
config.url = "aaaa";

let obA = { id: 1 };
let obB = obA;
obB.id = 2;

console.log(obA);
console.log(obB);

//===================== Ví dụ 1: demo var let =================
let arrButton = document.querySelectorAll("button");
console.log(arrButton);
//               0      1      2
//arrButton = [button,button,button];
for (let index = 0; index < arrButton.length; index++) {
  //Mỗi lần duyệt lấy ra 1 button
  let btn = arrButton[index];
  //Định nghĩa onlick cho button
  btn.onclick = function () {
    alert(index);
  };
}

// {
//     let index = 0;
//     //Mỗi lần duyệt lấy ra 1 button
//     var btn = arrButton[index];
//     //Định nghĩa onlick cho button
//     btn.onclick = function () {
//         alert(index);
//     }
// }

// {
//     let index = 1;
//     //Mỗi lần duyệt lấy ra 1 button
//     var btn = arrButton[index];
//     //Định nghĩa onlick cho button
//     btn.onclick = function () {
//         alert(index);
//     }
// }

// {
//     let index = 2;
//     //Mỗi lần duyệt lấy ra 1 button
//     var btn = arrButton[index];
//     //Định nghĩa onlick cho button
//     btn.onclick = function () {
//         alert(index);
//     }
// }

/* =============================== Function  ================= */

main();
//declaration function : Hỗ trợ hoisting (Cho phép sử dụng trước khi khai báo)
function main() {
  console.log(123);
}

//expression function : Không hỗ trợ hoisting (Không cho phép sử dụng trước khi khai báo)
var sayHello = function () {
  console.log("hello");
};
sayHello();

/* =============================== Arrow function ============================= */
/*
    arrow function giống expression function: Không hỗ trợ hoisting
    Đối với function chỉ có 1 tham số thì bỏ dấu () ở phần tham số.
    Đối với function chỉ có 1 lệnh return thì bỏ {} và chữ return 
    Đối với function chỉ có 1 lệnh return về 1 object thì thay bằng () tương đương {return }
    * Arrow function không hỗ trợ ngữ cảnh this (context)
*/

var sayHelloEs6 = () => {
  console.log("hello");
};
sayHelloEs6();
//Hàm có 1 lệnh return và 1 tham số
let apiEdit = (id) => `https://api.com?id=${id}`; // Đầy đủ: (id) =>  { return `https://api.com?id=${id}`}
console.log(apiEdit(2));
//Hàm có 1 lệnh return về 1 object
let renderHocVien = (id, name) => {
  return {
    id: id,
    name: name,
  };
};
let renderHV = (id, name) => ({
  id: id,
  name: name,
});

/* ====================== Từ khoá this (Context - Ngữ cảnh) ================ */
/*
    + Ngữ cảnh mặc định: this là window 
    + Trong đối tượng: this đại diện đối tượng đó (object đó)
    + Trong function : this đại diện cho function đó (Prototype)
    => Đối với this khi sử dụng trong phương thức của object hoặc phương thức của prototype nếu dùng function thì sẽ khai báo dạng arrowFunction

*/
console.log(this);
// console.log(this.innerWidth);
// console.log(this.innerHeight);

let product = {
  id: 1,
  name: "Iphone",
  showInfo: function () {
    console.log(this.id);
    console.log(this.name);
  },
};
product.showInfo();
function HocVien() {
  this.maHV = "";
  this.tenHV = "";
  this.layThongTinHocVien = function () {
    return {
      maHV: this.maHV,
      tenHV: this.tenHV,
    };
  };
}

let hv1 = new HocVien();
hv1.maHV = 1;
hv1.tenHV = "A";
console.log(hv1.layThongTinHocVien());
let hv2 = new HocVien();
hv2.maHV = 2;
hv2.tenHV = "B";
console.log(hv2.layThongTinHocVien());

// var maHocVien = 1;
// window.maHocVien = 1;

let hocVienCybersoft = {
  maHocVien: 1,
  tenHocVien: "Đỗ Quang Khải",
  hienThiThongTin: function () {
    let layThongTinHocVien = () => {
      return {
        maHocVien: this.maHocVien,
        tenHocVien: this.tenHocVien,
      };
    };
    let hv = layThongTinHocVien();
    return hv;
  },
};
console.log(hocVienCybersoft.hienThiThongTin());

//Trường hợp khai báo function: Prototype, phương thức
// prototype
function Product() {
  this.id = "";
  this.name = "";
  this.showInfo = function () {
    //phương thức
    console.log(this.id);
    console.log(this.name);
  };
}
//Hàm xử lý : Dùng arrow function thay cho function
// function tinhTong(a, b) {
//     return a + b;
// }

let tinhTong = (a, b) => a + b;

/*
    Ví dụ 2: 
    Cho mảng màu sắc: arrColor = ['red','green','blue','pink','orange', 'yellow','black']
    + Yêu cầu từ mảng arrColor tạo ra các nút button với màu sắc tương ứng ở div#colors
    + Xây dựng chức năng click cho button. Khi người dùng click vào button nào thì div#home đổi màu tương ứng
*/

let arrColor = ["red", "green", "blue", "pink", "orange", "yellow", "black"];

/**
 * Hàm duyệt qua các phần tử của mảng arrColor => hiển thị html '<button>...</button>' ra giao diện
 * @param {*} colors : là mảng các màu ['red','green',...]
 */
//Cách 1:
let renderButton = (colors) => {
  let output = ""; //string html
  for (let index = 0; index < colors.length; index++) {
    //Mỗi lần duyệt lấy ra 1 màu
    let color = colors[index];
    output += `
        <button class="btn mx-2" style="background: ${color}; color: #fff;" onclick="changeColor('${color}')">${color}</button>
        `;
  }
  //Hiển thị output lên giao diện
  document.querySelector("#colors").innerHTML = output;
};
renderButton(arrColor);

window.changeColor = (color) => {
  document.querySelector("#home").style.color = color;
};

// //Cách 2: arrColor = ['red','green','blue','pink','orange', 'yellow','black']
// // let renderButton2 = () => {
// //     for(let index = 0 ; index <arrColor.length ;index++) {
// //         let color = arrColor[index];
// //         let button = document.createElement('button');
// //         button.className = 'btn mx-2';
// //         button.innerHTML = color;
// //         button.style.color = '#fff';
// //         button.style.backgroundColor = color;
// //         button.onclick = function () {
// //             document.querySelector('#home').style.color = color;
// //         }
// //         document.querySelector('#colors').appendChild(button);
// //     }
// // }
// // renderButton2();

// var tinhTongES6 = (...restParam) => {
//   // [param1 , param2 , param3]
//   switch (restParam.length) {
//     case 2:
//       {
//         //nội dung function 1
//         console.log(restParam[0] + restParam[1]);
//       }
//       break;
//     case 3:
//       {
//         //Nội dung functon 2
//         console.log(restParam[0] + restParam[1]);
//       }
//       break;
//     default: {
//       console.log("Tham số đầu vào không hợp lệ");
//     }
//   }
// };
// tinhTongES6(1);
// tinhTongES6(1, 2);
// tinhTongES6(1, 2, 3);
// tinhTongES6(1, 2, 3, 4);

// /*

// Spread operator : dùng để sao chép giá trị của object hoặc array trong js

// 2 loại trong lập trình
// +Primitive value: giá trị máy tính có thể dễ dàng hiểu ( num , string, null , boolean, underfine)
// +reference value : object - array ( giá trị tham chiếu)
// Lưu ý : mỗi lần dùng new hoặc {} hoặc [] ==> Là cú pháp tạo 1 địa chỉ vùng nhớ mới
// / Khi sử dụng spread operator có thể vừa sao chép giá trị và vừa gán giá trị mới trên cùng 1 dòng , vừa thêm được thuộc tính trên cùng 1 dòng

//  */

// let ob1 = { id: 5, name: "a" };
// let ob2 = { ...ob1 };
// ob2.id = 10;
// console.log(ob1); //5
// console.log(ob2); //10

// let arr1 = [1, 2, 3, 5];
// let arr2 = [9, 10, ...arr1, 4, ...arr1];
// //arr2.push(4);
// console.log("arr1", arr1);
// console.log("arr2", arr2);

// let productPhone = {
//   id: 1,
//   name: "Iphone XS",
//   price: 1000,
//   img: "https://picsum.photos/200/200",
// };

// let { name, price, img, ...restParam } = productPhone;
// console.log(restParam);

// let html = `
//   <div class="card w-25">
//     <img src="$(img)" alt="phone" />
//     <div class="card-body">
//       <h3> $(name)</h3>
//       <h3> $(price)</h3>
//       <button class="btn btn-success">Add to cart</button>
//     </div>
//   </div>
// `;
// document.querySelector("#renderPhone").innerHTML = html;

// //tuple : mảng chứa giá trị phần tử không giống nhau
// let date = ["thứ 2", 10, 10, 2022];
// let [thu, ngay, thang, nam] = date;

// let [maSP, tenSP, giaSP, hienThi] = [
//   1,
//   "iphoneX",
//   1000,
//   function () {
//     console.log("show info");
//   },
// ];
// //gọi hàm show info
// hienThi();

// /*
// Object Literal : Cho phép truyền 1 biến vào làm tên thuộc tính và lấy giá trị biến đó làm giá trị thuộc tính của object
//  */
// let maSanPham = "SP001";
// let tenSanPham = "Sony WH";

// let headPhone = {
//   maSanPham,
//   tenSanPham,
// };
// console.log(headPhone);

// /*
// Dynamic key : cho phép truyền 1 giá trị vào phần key của object
//  */
// let key = "name";
// let person = {
//   [key]: "tèo",
// };

// console.log(person[key]);

// /*
// for of : dùng để duyệt các phần tử của mảng

// for in : dùng để duyệt qua index của mảng.Thường dùng để duyệt các thuộc tính ('key') của object
//  */
// let arrProduct = [
//   { id: 1, name: "phone1", price: 1000 },
//   { id: 2, name: "phone2", price: 1000 },
//   { id: 3, name: "phone3", price: 1000 },
//   { id: 4, name: "phone4", price: 1000 },
// ];
// for (let prod of arrProduct) {
//   console.log("prod", prod);
// }
// for (let index in arrProduct) {
//   console.log("index", index);
//   console.log("prod", arrProduct[index]);
// }

// let objectProduct = {
//   id: 1,
//   name: "Phone",
//   price: 800,
//   showInfo: function () {
//     console.log("showInfo");
//   },
//   desc: "description",
// };
// for (let key in objectProduct) {
//   if (typeof objectProduct[key] == "function") {
//     objectProduct[key]();
//   } else {
//     console.log("key", key);
//     console.log("giá trị", objectProduct[key]);
//   }
// }

// document.querySelector("#frmNhanVien").onsubmit = (event) => {
//   //Dùng event để chặn sự kiện reload form
//   event.preventDefault();
//   console.log(123);

//   // Lấy tất cả dữ liệu input từ phía người dùng
//   let arrInput = document.querySelectorAll(
//     "#frmNhanVien input, #frmNhanVien select"
//   );
//   let nhanVien = {};
//   for (let input of arrInput) {
//     // let id = input.id;
//     // let value = input.value;
//     let { id, value, style } = input; //input : document.getelementById('id').id| .value | .style
//     // console.log(id, value);
//     nhanVien[id] = value;
//     style.color = "green";
//   }
//   console.log(nhanVien);
//   //Hiển thị thông tin ra giao diện
//   //nhanVien = {maNhanVien:1, tenNhanVien:"Nguyen van a", luongCoBan:"1000", chucVu:"Nhân viên"};

//   let html = "";
//   for (let key in nhanVien) {
//     html += `<tr>
//     <th>${key}</th> <th>${nhanVien[key]}</th>;
//     </tr>`;
//   }

//   document.querySelector("tbody").innerHTML = html;
// };

// //============== import export ===================
// // Khi import phải viết tên chính xác 100%
// import { Product, arrProduct } from "./models/Product.js";
// // import {arrProduct} from "./models/Product.js"
// //Khi import default : giống import thường nhưng không có 2 dấu {} có thể rename
// import ProductDefault from "./models/Product.js";
// let prod = new Product();
// console.log(prod);
// console.log(arrProduct);
// console.log(ProductDefault);

// export default Product;
// import { SinhVienES6 } from "./models/SinhVien.js";
// let sv = new SinhVienES6(1);
// console.log(sv);
