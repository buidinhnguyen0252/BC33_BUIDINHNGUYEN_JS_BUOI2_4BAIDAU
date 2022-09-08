//BÀI 1 : TÍNH TỔNG LƯƠNG
var salaryPerDay = 100000;
var workingDays = 20;
var totalSalary = salaryPerDay * workingDays;
console.log("Tổng lương trong tháng là", totalSalary);

//BÀI 2 : TÍNH GIÁ TRỊ TRUNG BÌNH
var realNumber1 = 7;
var realNumber2 = 5;
var realNumber3 = 4;
var realNumber4 = 9;
var realNumber5 = 8;
var totalRealNumber =
  realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5;
var averageValue = totalRealNumber / 5;
console.log("Giá trị trung bình là : ", averageValue);

//BÀI 3 : QUY ĐỔI TIỀN
var USD = 23500;
var moneyUSD = 10;
var exchangeUSD = moneyUSD * USD + "VND";
console.log("Quy đổi tiền ra là : ", exchangeUSD);

//BÀI 4 : TÍNH CHU VI VÀ DIỆN TÍCH HÌNH CHỮ NHẬT
var length = 10;
var width = 20;
var perimeterHCN = (length + width) * 2;
var areaHCN = length * width;
console.log("Chu vi Hình chữ nhật là : ", perimeterHCN);
console.log("Diện tích Hình chữ nhật là : ", areaHCN);

//BÀI 5 : TÍNH TỔNG 2 KÝ SỐ
var n = 35;
var num1 = n % 10;
var num2 = Math.floor(n / 10);
var total = num1 + num2;
console.log("Tổng 2 ký số", total);
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  !1
),
  (document.onkeydown = function (e) {
    return (
      123 != (e = e || window.event).keyCode &&
      (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) &&
      void 0
    );
  }),
  (document.getElementById("btnSalary").onclick = function () {
    var e =
      document.getElementById("inputNum1").value *
      document.getElementById("inputNum2").value;
    document.getElementById("txtSalary").innerHTML = e;
  }),
  (document.getElementById("btnTB").onclick = function () {
    let e = document.querySelectorAll(".bai2 .form-control"),
      t = 0;
    for (let n = 0; n < e.length; n++) t += Number(e[n].value);
    document.getElementById("txtTB").innerHTML = t / e.length;
  }),
  (document.getElementById("btnCurrency").onclick = function () {
    var e = document.getElementById("usd").value,
      t = new Intl.NumberFormat("vn-VN").format(23500 * e);
    document.getElementById("txtCurrency").innerHTML = t;
  }),
  (document.getElementById("btnCal").onclick = function () {
    var e = document.getElementById("width").value,
      t = document.getElementById("height").value,
      n = e * t,
      u = 2 * (Number(e) + Number(t));
    document.getElementById(
      "txtCal"
    ).innerHTML = `\n        Diện tích: ${n};\n        Chu vi: ${u}\n    `;
  }),
  (document.getElementById("btnSum").onclick = function () {
    var e = document.getElementById("number").value,
      t = Math.floor(e / 10),
      n = e % 10;
    document.getElementById("txtSum").innerHTML = t + n;
  });
