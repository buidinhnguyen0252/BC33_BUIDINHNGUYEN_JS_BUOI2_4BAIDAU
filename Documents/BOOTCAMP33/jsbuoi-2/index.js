var isVip = false;

//Toán tử so sánh
// console.log(4 == 4)
// console.log(4 != 4)
console.log(4 === "4")
console.log(4!== "4")

//toán tử logic !, && , ||
console.log(!isVip)

console.log(5 > 4 && 6 ==2)

console.log(5>4 || 6 == 3)



//câu điều kiện
/* if (biểu thức điều kiện) {
    //code sẽ run khi đúng điều kiện
} else {
    code sẽ run khi điều kiện sai
}
*/
var d = 4;
if (d < 0){
    d = -d;
} else {
    console.log(d , " đã là số dương");
}

var creditCardBalance = 4000000;
var payment = 3000000 ;
var balance = creditCardBalance - payment;
var pentalty = balance * ( 1.5 / 100 );
console.log("số tiền phạt phải trả tháng này là : ",pentalty);


var hour = 30;
var pay = 300000;
var totalSalary = hour * pay;
if (hour > 40) {
    totalSalary = totalSalary * 1.5;
    console.log("Số tiền phải trả theo tuần cho nhân viên là : ",totalSalary);
}else {
    console.log("Số tiền phải trả theo tuần cho nhân viên là : ", totalSalary);
}


var ten = "Nguyễn";
var Toan = 1;
var ly = 1;
var hoa = 1;
var diemTB = (Toan + ly + hoa) / 3;
var xeploai;
// console.log(diemTB);
if (diemTB >= 8.5) {
    xeploai = "giỏi";
}else if (diemTB >= 6.5 ){
    xeploai = "khá";}
else if (diemTB >= 5 ) {
    xeploai="trung bình";
} 
else {
    xeploai="yếu";
}
 console.log(ten , "xếp loại học sinh:",xeploai)


var ten = "gạo";
var soluong = 70;
var donGia = 1;
var thanhTien;
if (soluong > 100 ){
    thanhTien = 100 *donGia + (soluong - 100) * donGia *(88 / 100);
} else if (soluong >= 50) {
    thanhTien = 50*donGia + (soluong - 50)*donGia * ( 92 / 100 );
}else {
    thanhTien = soluong * donGia;
}
console.log(ten , "Số tiền phải trả", thanhTien)


var a = 5;
var b = 17;
var c = 20;
var x1,x2,x3,x4,x5,x6;
if (a >b && a > c) {
    x1 = a >b >c;
} else if (a > b && c >b){
    x2 = a > c > b;
} else if ( a > b && c > a){
    x3 = c > a > b;
}else if (b > a && b > c ){
    x4 = b > a > c;
} else if ( b > c && c > a ){
    x5 = b > c > a;
}else {
    x6 = a < b < c;
}
console.log(x1,x2,x6)


var isLogin = true;
var message ="";
/* if (isLogin === true){
    console.log("xin chào bạn")
}else {
    console.log("Vui lòng đăng nhập")
}
*/
isLogin ===true ? console.log("xin chào bạn") : console.log("Vui lòng đăng nhập")
message = isLogin === true ? "Hello" : "Vui lòng đăng nhập"


var d = 4;
if (d < 0){
    d = -d;
} else {
    console.log(d , " đã là số dương");
}

var month = 10;

// if (month === 1){
//     console.log("31 ngày")
// } else if(month === 2){
//     console.log("28 ngày")
// }
switch(month){
    case 1 : console.log("31 ngày");
    break;
    case 2 : console.log("28 ngày");
    break;
    case 3 : console.log("31 ngày");
    break;
    case 4 : console.log ("30 ngày");
    break;
    default:
        console.log("Tháng không hợp lệ")
}
