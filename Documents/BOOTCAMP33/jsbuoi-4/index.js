function login() {
    //lấy username và password
    var usernameInput= document.getElementById("txtUsername");
    var passwordInput= document.getElementById("txtPassword");

if(usernameInput.value ==="cybersoft" && passwordInput.value ==="cybersoft"){
    alert("Dang nhap thanh cong")
}else {alert("thong tin dang nhap khong chinh xac") };
}

function setdefaultAccount(){
    var usernameInput= document.getElementById("txtUsername");
    var passwordInput= document.getElementById("txtPassword");
    usernameInput.value = "cybersoft";
    passwordInput.value = "cybersoft";
}

function changetext(){
    var title =document.getElementById("title");
    title.innerHTML = "thi thoi";
    title.style.color = "red";
    title.style.backgroundColor = "green";
}

function changetext2(){
    var title =document.getElementById("title");
    title.innerHTML = "okay";
    // title.style.color = "red";
    // title.style.backgroundColor = "green";
    title.classList.add("text");
}
function changeTab(e){
   var actionBtn = document.getElementById("action");
   var romanticBtn = document.getElementById("romantic");
   var fictionBtn = document.getElementById("fiction");

   actionBtn.classList.remove("active");
   romanticBtn.classList.remove("active");
   fictionBtn.classList.remove("active");

   e.target.classList.add("active");


  var actionTab = document.getElementById("actionTab");
   var romanticTab = document.getElementById("romanticTab");
   var fictionTab = document.getElementById("fictionTab");

   actionTab.classList.remove("show");
   romanticTab.classList.remove("show");
   fictionTab.classList.remove("show");

   var activeTabId = e.target.getAttribute("data-target");
   document.getElementById(activeTabId).classList.add("show")
}


//event : click , mouseover, mouseout, keyup, keydown, keypress

//handlers : function sẽ chạy khi event xảy ra

function calcTip(){
    var totalPay = +document.getElementById("totalPay").value;
    var select = +document.getElementById("select").value;
    var people = +document.getElementById("people").value;
    // console.log(typeof totalPay, totalPay);
//parseInt , parseFloat 
// totalPay = parseFloat(totalPay);
// console.log(typeof totalPay, totalPay);
// console.log(typeof select, select);
// console.log(typeof people, people);



    var pay; 
    pay =(totalPay * (select/100)/people);
    alert(pay);
}