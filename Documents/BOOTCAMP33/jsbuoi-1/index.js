console.log("Hello world 2 !!")

//variable : biến

var name = "Bùi Đình Nguyễn";

var age = 26;
age = 28;

//camel case
var phoneNumber = "0773615380";
var dateOfBirth= "25/02/1996";
console.log(age);
console.log(name);
console.log(phoneNumber);
console.log(dateOfBirth);

/* 
dasdasd
fasfas
asfas
scasc
sada
dad*/

//Data Type : kiểu dữ liệu
var number = 1;
var email = "buinguyen.2521996@gmail.com";
var isLogin = true;
var weight; //undefined
var height =null; // null

//operators
var res1 = 5 + 6;
var res2 = 5 - 6;
var res3 = 5 * 6;
var res4 = 5 / 6;
var res5 = 5 % 6;
var res6 = "dinh" + "Nguyen";
var res7 = 7 + "5"; //==> "75"
var res8 = 7-"5"; //==> 2

res2++; // res2 = res2 + 1;
res2--; // res2 = res2 - 1;

res3 += 5; // res3 = res3 + 5;
res3 -=2 ; // res3 = res3 -2;
res3 *= 4; // res3 = res3 *4;
res3 %=5; // res3 = res3 % 5;

var res10 = res5++ + 2; // res5 = 6 , res10 = 7
var res11 = ++res5 +2; // res11 = 8
var res12 = res11++; //res12 = 8
res12 = res12++ +3; // res12 = 11

console.log('Tổng là',res1)
console.log('Hiệu là',res2)
console.log('Tích là',res3)
console.log('Thương là',res4)
console.log('Phần dư là',res5)

/* Sơ đồ 3 khối 
Input : lương 1 ngày và số ngày làm

Process :(pseudo code) 
    1. Lấy được input (hardcode)
    2. Tính lương = luón 1 ngày * số ngày làm
    3. log lương ra màn hình

OutPut : tính lương


*/
var salaryPerDay = 100000;
var workingDays = 20;
var totalSalary = salaryPerDay * workingDays;
console.log("Tổng lương trong tháng là", totalSalary);

var soThuc1 = 7;
var soThuc2 = 9;
var soThuc3 = 9;
var soThuc4 = 9;
var soThuc5 = 10;
var tong = soThuc1 + soThuc2 +soThuc3 +soThuc4 +soThuc5;
var trungbinh = tong / 5;
console.log("Trung bình 5 số thực chia cho 5", trungbinh);


var n = 30;
var num1 = n % 10;
var num2 = Math.floor(n / 10);
var total = num1 + num2;
console.log("Tổng 2 ký số",total)

var cd = 20;
var cr = 10;
var S = cd * cr;
var CV = (cd + cr) * 2;
