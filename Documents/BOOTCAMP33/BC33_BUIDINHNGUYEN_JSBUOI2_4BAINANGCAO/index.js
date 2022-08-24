// //Bài 1 : Xuất ra 3 số nguyên theo thứ tự tăng dần
// var a = 9;
// var b = 2;
// var c = 1;
// var min;
// var max;
// var x; // giá trị nằm giữa lớn và nhỏ
// if (a >b && a > c) {
//     max = a;
//     x = b;
//     min = c;
// } else if (a > b && c >b){
//     max = a;
//     x=c;
//     min = b;
// } else if ( a > b && c > a){
//     max = c;
//     x = a;
//     min = b;
// }else if (b > a && b > c ){
//     max = b;
//     x = a;
//     min = c;
// } else if ( b > c && c > a ){
//     max = b;
//     x = c;
//     min = a;
// }else {
//     max =c;
//     x = b;
//     min = a;
// }
// console.log(min , x ,max)

// //Bài 2 : CHƯƠNG TRÌNH CHÀO HỎI CÁC THÀNH VIÊN TRONG GIA ĐÌNH

// var familyMembers = 'S';
// switch (familyMembers){
//     case 'D' : console.log("Hi Dad");
//     break;
//     case 'M' : console.log("Hi Mom");
//     break;
//     case 'B' : console.log("Hi Brother");
//     break;
//     case 'S' : console.log("Hi Sister");
//     break;
//     default : console.log ("Hi . Chào người lạ không quen")
// }


// //Bài 3 : Cho 3 số nguyên và xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
// var a = 3;
// var b = 10;
// var c = 10 ;

// if (a % 2 === 0 && b % 2 === 0 && c % 2 ===0 ){
//     console.log("3 số chẵn và 0 số lẻ")
// }else if (a % 2 === 0 && b % 2 === 0 && c % 2 !==0 ){
//   console.log("2 chẵn và 1 số lẻ")  
// }else if (a % 2 === 0 && b % 2 !== 0 && c % 2 !==0 ){
//     console.log("1 chẵn và 2 số lẻ")
// }else if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !==0 ){
//     console.log("0 chẵn và 3 số lẻ")
// }else if (a % 2 !== 0 && b % 2 !== 0 && c % 2 ===0 ){
//     console.log("1 chẵn và 2 số lẻ");
// }else if (a % 2 !== 0 && b % 2 === 0 && c % 2 ===0 ){
//     console.log("2 chẵn và 1 số lẻ");
// }else{
//     console.log("2 lẻ và 1 chẵn"); }



// //Bài 4 : Chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
// var a = 3;
// var b = 4;
// var c = 5;

// if (a===2 && b===2 && c===1){
//     console.log("Đây là tam giác cân");} 
//     else if (a===3 && b===3 && c===3){
//     console.log("Đây là tam giác đều");}
//     else if (a===3 && b===4 && c===5){
//     console.log("Đây là tam giác vuông");}
//     else {
//     console.log("Đây là tam giác thường");}


//BÀI 5 : chương trình nhập vào ngày, tháng, năm . Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.

//  + Xuất ngày tháng năm hôm qua

var date = 30;
var month = 5;
var year = 2000;

if ( month != 1 && date ==1){
    console.log("ngày tháng năm hôm qua",date = 30, month -=1, year);
}else if (date == 1 && month == 1){
    console.log("ngày tháng năm hôm qua",date = 30, month = 12, year-=1);
}else {
    console.log("ngày tháng năm hôm qua", date-= 1 ,month ,year);
}



//      + Xuất ngày tháng năm ngày mai


var date = 30;
var month = 12;
var year = 2010;
if ( month != 12 && date ==30){
    console.log("ngày tháng năm ngày mai",date = 1, month=1 + month, year);
}else if (date == 30 && month == 12){
    console.log("ngày tháng năm ngày mai",date = 1, month = 1, year+=1);
}else {
    console.log("ngày tháng năm ngày mai", date+= 1 ,month ,year);
}



//Bài 6 : Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận).
       
var month =11;
var year = 2009;

if (month===2 && year % 4 ===0 && year % 100 !==0 ){
    console.log("tháng 2 năm",year, " có 29 ngày" );
}else if(month===2 && year % 400 ===0){
    console.log("tháng 2 năm",year, " có 29 ngày");
}else if (month === 2){
    console.log("tháng 2 năm",year, " có 28 ngày")
}else if (month === 1 || month === 3 || month === 5 || month === 7 ||month === 8 || month === 10 ||month === 12){
    console.log("tháng",month, "năm",year, " có 31 ngày")
}else{
    console.log("tháng",month, "năm",year, " có 30 ngày")}


//Bài 7 : Chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
var integer = 229; // biến integer là 1 số nguyên có 3 chữ số
var hundreds = integer / 100;
var dozens = (integer / 10) % 10;
var units = integer % 10;
var a,b,c; // a b c lần lượt gán vào hàng trăm chục đơn vị
if ( integer > 100 && integer < 999){ //999 > integer > 100
    console.log ("Nhập số nguyên có 3 chữ số :" , integer);
}
else (console.log("Số nhập không đúng yêu cầu"))
{
switch( Math.floor (hundreds )) {
    case 1 : a ="một trăm"; break;
    case 2 : a ="hai trăm"; break;
    case 3 : a ="ba trăm"; break;
    case 4 : a ="bốn trăm"; break;
    case 5 : a ="năm trăm"; break;
    case 6 : a ="sáu trăm"; break;
    case 7 : a ="bảy trăm"; break;
    case 8 : a ="tám trăm"; break;
    case 9 : a ="chín trăm"; break;
}
switch ( Math.floor(dozens)){
    case 0 : b="lẻ";break;
    case 1 : b="mười";break;
    case 2 : b="hai mươi";break;
    case 3 : b="ba mươi";break;
    case 4 : b="bốn mươi";break;
    case 5 : b="năm mươi";break;
    case 6 : b="sáu mươi";break;
    case 7 : b="bảy mươi";break;
    case 8 : b="tám mươi";break;
    case 9 : b="chín mươi";break;
}
switch ( units ){
    case 0 : c = "";break;
    case 1 : c = "một";break;
    case 2 : c = "hai";break;
    case 3 : c = "ba";break;
    case 4 : c = "tư";break;
    case 5 : c = "năm";break;
    case 6 : c = "sáu";break;
    case 7 : c = "bảy";break;
    case 8 : c = "tám";break;
    case 9 : c = "chín";break;
}
console.log("Đọc số nguyên trên là :",a,b,c);
}



//Bài 8 : Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương trình in tên sinh viên xa trường nhất.

var name1 = "Tuấn";
var name2 = "Nam"
var name3 = "Hà";
var school;
var x1 = 2;
var y1 = 20;
var x2 = 3;
var y2 = 20;
var x3 = 4;
var y3 = 2;
var x_school = 5;
var y_school = 5;
var length;
var d1 = Math.sqrt ((x_school - x1)*(x_school - x1) + (y_school - y1)* (y_school - y1));
var d2 = Math.sqrt ((x_school - x2)*(x_school - x2) + (y_school - y2)*(y_school - y2)) ;
var d3 = Math.sqrt ((x_school - x3)*(x_school - x3) + (y_school - y3)*(y_school - y3)) ;
 if (d1 > d2 && d2 > d3 ){//d1>d2>d3
    length = "Tuấn";
 }  else if (d2 > d3 && d3 >d1 )//d2 > d3 > d1
 {
    length = "Nam";
 }  else if (d1 > d3 && d3 > d2 ) // d1 >d3 > d2
{
    length = "Tuấn"
}   else if (d2 > d1 && d1 > d3) //d2 > d1>d3
{
    length = "Nam"
} else {length = "Hà"};
 console.log("Sinh viên xa trường nhất là",length)
 console.log (d1,d2,d3);