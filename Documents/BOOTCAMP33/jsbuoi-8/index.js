// // object
// var student1 = {
//   //property : value;
//   name: "Hieu",
//   age: 19,
//   email: "hieu@gmail.com",
//   math: 9,
//   physic: 3,
//   //method : function
//   calcGPA: function () {
//     return (this.math + this.physic) / 2;
//   },
// };
// var student2 = {
//   //property : value;
//   name: "Tieu",
//   age: 12,
//   email: "hieu@gmail.com",
//   math: 9,
//   physic: 9,
//   //method : function
//   calcGPA: function () {
//     return (this.math + this.physic) / 2;
//   },
// };
// student1.phone = "090922901";
// student1.age = 20;
// console.log(student1.name, student1.age, student1);
// console.log(student2.name);

// var key = "email";
// console.log(student1[key]);

// console.log(student1.calcGPA());

// // this : trỏ tới đối tượng mà function đang là phương thức
// //OOP : 4 tính chất của lập trình OOP : đóng gói , kế thừa , đa hình , trừu tượng

// var cyberDog = {
//   name: "cyberDog",
//   address: "457 , Sư Vạn Hạnh",
//   email: "cyberDog@gmail.com",
//   phone: "012123421332",
//   CEO: {
//     name: "dang trung hieu",
//     age: 20,
//   },
//   dogs: [
//     {
//       name: "xu",
//       age: 2,
//     },
//     {
//       name: "na",
//       age: 1,
//     },
//     {
//       name: "inu",
//       age: 2,
//     },
//   ],
// };
// console.log(cyberDog.name, cyberDog.CEO.name);
// for (var i = 0; i < cyberDog.dogs.length; i++) {
//   console.log(cyberDog.dogs[i].name, cyberDog.dogs[i].age);
// }

// //Ex 7 : Cho 1 mảng số nguyên , kiểm tra trong mảng có tổng 2 số là 10 ko

// function ex7(arr) {
//   var obj = {};
//   for (var i = 0; i < arr.length; i++) {
//     //i = 0 ==> arr[i] = 4 ==> num = 6
//     //i = 1 ==> arr[i] =2 ==> num = 8
//     var num = 10 - arr[i];
//     //obj[num] = obj.6 = underfined
//     if (obj[num]) {
//       console.log("có");
//       return;
//     }
//     obj[arr[i]] = true;
//   }
//   console.log("không");
// }

// ex7([3, 4, 5, 6, 10]);

// //scope : global , function
// // lexical scope : nơi tạo ra function sẽ quyết định biến nào đc phép xài
// //dynamic scope : nơi run function sẽ quyết định this là gì

// //function vô chủ ==> con trỏ sẽ tự động về window

// function test() {
//   console.log(this);
// }

// var obj = {
//   test: test,
// };

// test(); //window
// obj.test(); //obj

//JSON.parse : biến chuỗi thành object
//JSON.Stringify : biến object thành chuỗi
//assign : shallow copy object
//reference type : kiểu dữ liệu object

//LỚP ĐỐI TƯỢNG

function Studen(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;

  this.calcGPA = function () {
    return 10;
  };
}

var student1 = new Studen("hieu", 12, "hieu@gmail.com");
var student2 = new Studen("Dung", 17, "Dung@gmail.com");

console.log(student1, student2);
