var names = ["hieu", "dung", "thinh"];

// console.log(names[2],names[1]);

// thêm 1 phần tử vào cuối mảng
// names.push("khai");

//thêm 1 phần tử vào đầu mảng
//names.unshift("chuong");

//xóa 1 phần tử cuối mảng
//names.pop()

//xóa 1 phần tử đầu mảng
//names.shift();

//xóa 1 phần tử ở vị trí bất kì
//names.splice(2,1);

//thêm 1 phần tử ở vị trí bất kì
//names.splice(2,0,"khai");

//cập nhật 1 phần tử
// names[2] = "anh";

//tách chuổi thành mảng
var address = ["43/8", "Nguyen thi ,dang", "q12"];
// var addressArray = address.split(" , ")
// console.log(addressArray);

var fullname = ["dang", "trung", "hieu"];
console.log(fullname.join(" "));

//hàm nối 2 mảng
var num1 = [1, 2, 3];
var num2 = [2, 4, 5];
var num3 = num1.concat(num2);
console.log(num3);

//cắt mảng
var names = ["hieu", "dung", "thinh"];
var namespage1 = names.slice(1, 2); //"hieu dung"
console.log(namespage1);

// var numbers = [1,2,3,4,5,6,7,8,9,11];
// for(var i = 0 ; i < numbers.length ; i++){
//     if (numbers[i] % 2 ===0) {
//         console.log(numbers[i] , "là số chẵn");
//     } else {
//         console.log(numbers[i] , " số lẻ");
//     }
// }

//Ex1 : Cho 1 mảng số nguyên , tính tổng các số lẻ trong mảng
function Ex1(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i];
    }
  }
  console.log(sum);
}

Ex1([7, 2, 3, 4, 5, 6, , 8, 9]);

//Ex2 : Cho 1 mảng số nguyên , đếm có bao nhiêu số âm trong mảng
function Ex2(arr2) {
  var sum = 0;
  for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] < 0) {
      sum++;
    }
  }
  console.log(sum);
}
Ex2([2, -3, -4, -5, 2, 3, 4, 5]);

//Ex3 : Cho 1 mảng số nguyên , tính tb các số trong mảng

function Ex3(arr3) {
  var sum = 0;
  for (var i = 0; i < arr3.length; i++) {
    sum += arr3[i] / arr3.length;
  }
  console.log(sum);
}
Ex3([2, 3, 4, 5, 2, 3, 4, 5]);

//Ex4 : Cho 1 mảng số nguyên , tính số lớn nhất và lớn nhì trong mảng
function Ex4(arr4) {
  var max = arr4[0];
  var sencond = 0;
  for (var i = 1; i < arr4.length; i++) {
    if (arr4[i] > max) {
      sencond = max;

      max = arr4[i];
    } else if (arr4[i] > sencond && arr4[i] !== max) {
      sencond = arr4[i];
    }
  }
  console.log(max, sencond, " số lớn nhất");
}
Ex4([9, 3, 4, 5, 12, , 11, 3, 4, 5]);

//Ex4 : Cho 1 mảng số nguyên , tìm số nhỏ nhất trong mảng
function Ex5(arr5) {
  var min = arr5[0];

  for (var i = 1; i < arr5.length; i++) {
    if (arr5[i] < min) {
      min = arr5[i];
    }
    console.log(min, " số nhỏ nhất");
  }
}
Ex5([9, 3, 4, 5, 12, , 11, 4, 4, 5]);
//Ex6 : Cho 1 mảng số nguyên , in ra đảo ngược

function Ex6(arr6) {
  var reverseArr = [];
  for (var i = arr6.length - 1; i >= 0; i--) {
    reverseArr.push(arr6[i]);
  }
  console.log(reverseArr);
}
Ex6([1, 2, 4, 6, 7, 9, 0, 5, 3]);

//Ex7 : Cho 1 mảng số nguyên , kiểm tra xem trong mảng có 2 số bất kìcó tổng là 10 ko
function Ex7(arr7) {
  for (var i = 0; i < arr7.length; i++) {
    //ar7[i]
    for (var j = i + 1; j < arr7.length; j++) {
      if (arr7[i] + arr7[j] === 10) {
        console.log("có");
        return true;
      }
    }
  }
  console.log("khong");
  return false;
}
Ex7([1, 2, 4, 6, 7, 9, 0, 5, 3]);

//BIG O NOTATION : Độ phức tạp của thuật toán(operators)

//Ex8 : Cho 1 mảng số nguyên có thứ tự tăng dần , kiểm tra xem trong mảng có 2 số bất kìcó tổng là 10 ko

function ex8(arr) {
  var i = 0;
  var k = arr.length - 1;

  while (i < k) {
    var sum = arr[i] + arr[k];
    if (sum === 10) {
      console.log("có");
      return;
    } else if (sum > 10) {
      k--;
    } else {
      i++;
    }
  }
  console.log("không có");
}

ex8(1, 2, 3, 6, 8, 9, 14);
//Ex9: Viết hàm chia bài cho 4 người chơi . Cho 4 mảng đại diện cho 4 người chơi
//var players = [[],[],[],[]];
//và 1 mảng bài var cards = ["4K","KH" , "5C" , "KA" , "QH","KD","2H","10S","A5","7H","9K","10D"]
//Yêu cầu viết code chia cho mỗi players 3 lá bài theo luật , chia lần lượt mỗi người 1 lá
//Kết quả : [ ["4K","QH","A5"], [ "KH", "KD", "7H"],[ "5C","2H","9K"], [ "KA", "10S", 10D] ]

function ex9() {
  var players = [[], [], [], []];
  var cards = [
    "4K",
    "KH",
    "5C",
    "KA",
    "QH",
    "KD",
    "2H",
    "10S",
    "A5",
    "7H",
    "9K",
    "10D",
  ];
  for (var i = 0; i < cards.length; i++) {
    var playerIndex = i % 4;
    players[playerIndex].push(cards[i]);
    //i = 0 ==> playerIndex = 0
    //i = 1 ==> playerIndex = 1
    //i = 2 ==> playerIndex = 2
    //i = 3 ==> playerIndex = 3
    //i = 4 ==> playerIndex = 0
  }
  console.log(players);
}
ex9();

//Ex10 : Cho 1 mảng số nguyên bất kì , sắp xếp tăng dần
// function ex10(arr) {
//   for (var k = 0; k < arr.length; k++) {
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         var temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
function ex10(arr) {
  for (var k = arr.length - 1; k >= 0; k--) {
    //k=5
    //k=4
    //k=3
    var isSwapped = false;
    for (var i = 0; i < k; i++) {
      //i = 0,1,2,3,4
      //i = 0,1,2,3
      //i = 0,1,2
      console.log(arr[i], arr[i + 1]);
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
    if (isSwapped === false) {
      console.log(arr);
      return;
    }
  }
  console.log(arr);
}
ex10([9, 7, 4, 3, 2, 6]);
//buble sort
//sorting : interchange , selection, insertion , bubble sort , heap, quick sort , merge sort  , radix sort...
