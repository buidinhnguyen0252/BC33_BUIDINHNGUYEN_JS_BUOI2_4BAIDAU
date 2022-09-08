//a , b ,c : tham số đâu vào của hàm
function calcSum(a,b,c){
    var sum=a+b+c;
    return sum; // dòng cuối cùng
}
var res = calcSum(2 , 3, 5);
console.log(res); 
// calcSum(8,9,5);
// calcSum(10,3,4);


//scope : phạm vi truy cập của biến (global scope-biến toàn cục vs function scope- biến phạm vi)


//Nhận vào khu vực ==> điểm ưu tiên
function calcAreaGrade(area){
    if(area ==="A"){
        return 2;
    } 
    if(area ==="B"){
        return 1;
    } 
    if(area ==="C"){
        return 0.5;
    } 
    return 0;
}

function calcStudentTypeGrade(type){
    if(type ===1){
        return 2.5;
    }
    if(type ===2){
        return 1.5;
    } 
    if(type ===3){
        return 1;
    } 
    return 0; 
}
function ex1(){
    //code logic kiểm tra thí sinh đậu hay rớt!
    var standardGrade = 23;
    var sub1 = 6;
    var sub2 = 9;
    var sub3 = 7;
    var area = 'A';
    var studentType = '1';

//tính điểm ưu tiên theo khu vực
    var areaGrade = calcAreaGrade(area);
//tính điểm ưu tiên theo đối tượng
   var studentTypeGrade = calcStudentTypeGrade(studentType);

   var totalGrade = sub1 + sub2 + sub3 + areaGrade +studentTypeGrade;
   if (totalGrade >= standardGrade && sub1 > 0 && sub2 > 0 && sub3 > 0){
    console.log("Đậu",totalGrade);
   }else {console.log("rớt",totalGrade);}
    }
    ex1();

function calctotalPrice(Kw){
    if (Kw <= 50){
        totalPrice = 500 * Kw;
    }else if (Kw <= 100){
        totalPrice = (500 * Kw) + ( Kw - 50 )*150;
    }else if (Kw <= 200){
        totalPrice = 50*500 + 50*650 + (Kw - 100)*850;
    }else if (Kw <= 350){
        totalPrice = 50*500 + 50*650 + 100*850 + (Kw - 200)*1100;
    }else {totalPrice=50*500 + 50*650 + 100*850 + 150*1100 + (Kw -350 )*1300}

    return totalPrice;
}
    function ex2(){
        //tính tiền điện
        var name = "Nguyễn";
        var Kw = 300;
        var totalPrice;
        //tính tiền điện
    var totalPrice = calctotalPrice(Kw);
console.log("tiền điện",totalPrice);
    }
    ex2();


    function ex3(){
        //tính thuế thu nhập cá nhân
        var fullname = "Đình Nguyễn"
        var totalSalary = 500;
        var people = 6;
        var thue;
        var totalCanhan = totalSalary - 4 - people*1.6;
        if (totalCanhan <= 60){thue = 0.05 * totalCanhan;
        }else if (totalCanhan<=120){thue = 0.05*60 + (totalCanhan - 60)*0.1}
        else if (totalCanhan<= 210){thue = 0.05*60 + 60*0.1 + (totalCanhan-120)*0.15}
        else if (totalCanhan<=384){thue = 0.05*60 + 60*0.1 + 60*0.15 + (totalCanhan-180)*0.2}
        else if (totalCanhan<=624){thue = 0.05*60 + 60*0.1 + 60*0.15 + 174*0.2 + (totalCanhan - 354)*0.25}
        else if (totalCanhan<=960){thue = 0.05*60 + 60*0.1 + 60*0.15 + 174*0.2 + 240*0.25 + (totalCanhan - 594)*0.3}
        else {thue = 0.05*60 + 60*0.1 + 60*0.15 + 174*0.2 + 240*0.25 + 336*0.3 + (totalCanhan-930)*0.35}
        console.log(thue);
    }
    ex3();