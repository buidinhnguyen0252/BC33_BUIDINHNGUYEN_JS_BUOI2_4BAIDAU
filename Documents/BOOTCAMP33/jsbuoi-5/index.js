// console.log("hello BC33")
// console.log("hello BC33")
// console.log("hello BC33")
// console.log("hello BC33")
// console.log("hello BC33")
// console.log("hello BC33")
// console.log("hello BC33")
// console.log("hello BC33")

//while 
//do while 
//for

//bài tập 1
function demoWhile(){
    //B1 : Lấy giá trị từ người dùng nhập vào input
    var value = document.getElementById("txtNum").value


    var contentHtlm = '';
    var i=0;

    while( i <= value){
        contentHtlm += i + ' '
        i++
    }
    document.getElementById("resultBT1") .innerHTML = contentHtlm;
}


function baiTap2(){
    var value = document.getElementById("txtNumBT2").value*1
    var contentHtlm =''

    var kq = 0
    while( value/2 >= 1){

contentHtlm += value/2  + " "


        value = value/2

    }
    document.getElementById("resBT2") .innerHTML = contentHtlm
}


// Do while

//Bài tập 3
function baiTap3(){
    var value = document.getElementById("txtNumBT3").value*1
    var i=0;
    var total = 0;

    do{
        i++
        total += i
    }while ( i < value){
        document.getElementById("resBT3") .innerHTML = total
    }
}

//bài tập 4
function baiTap4(){
    var value = document.getElementById("txtNumBT4").value*1
    var contentHtlm = ''
for(var i=0 ; i <= value ; i++){
    if(i %  2 ==0){
        contentHtlm += i + ' '
    }
}
document.getElementById('resBT4') .innerHTML = contentHtlm
}

var contentHtlm1 = "" // biến global ( biến khai báo ở ngoài function , ngoài cùng file)
for(var i=0 ;i<5 ; i++ ){
    for(var j= 0 ; j<5 ; j++    ){
        contentHtlm1 += "*"
    }
    contentHtlm1 += "\n"
}
console.log(contentHtlm1)



//lệnh Break

var k = 0 
while (k <= 10) {
 console.log(k)

    k++
 if (k < 5){
  
    break;

 }
}