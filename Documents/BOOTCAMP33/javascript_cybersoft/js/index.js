//  //tính năng cơ bản trong javacript//
//       // kiểu dữ liệu cơ bản : number , string , boolean, undefine , null
//       var number = 1; // số number : lương , số giờ , giá tiền
//       var title = "Cybersoft developer"; // chuỗi string :họ tên , dia chi , thong tin cá nhân
//       var result = true; // giá trị đúng sai
//       var name1; // undefine
//       var info = null; // rỗng

//       // Javacript sẽ tự hiểu kiểu dữ liệu gán giá trị cho nó
//       console.log(typeof number);
//       console.log(typeof title);
//       console.log(typeof name1);
//       console.log(typeof info);

//       //hiển thị

//       console.log(number);

//       ///-------> Toán tử -----<//
//       var soHang1 = 5;
//       var soHang2 = 11;
//       var tong = soHang1 + soHang2;
//       var tich = soHang1 * soHang2;
//       var thuong = soHang1 / soHang2;
//       var chialaydu = soHang1 % soHang2;
//       console.log("Tổng = ", tong);
//       console.log("Tích =", tich);
//       console.log("Thương = ", thuong);
//       console.log("Phần dư =", chialaydu);
//       var bienA = 5;
//       var bienB = 10;
//       console.log(bienA * bienB);

//       // Kết luận : các phép số học như + - * / thì trong JS cũng giống như toán
//       // JS hỗ trợ toán tử chia lấy dư để lấy kết quả phần dư xử lý
//       //Trong JS đặc biệt đối với phép cộng thì JS cộng 2 số thì ra tổng , nhưng khi cộng chuỗi thì sẽ nối 2 chuỗi lại với nhau

//       var i = 0;
//       i = i + 1;
//       i++;
//       console.log("i = ", i);
 
//       //HẰNG SỐ
//       const HE_SO_LUONG = 5;

//       //INPUT : đầu vào
//       var luong1ngay = 20;
//       var songaylam = 28;

//       // OUTPUT :Tính lương : trên số ngày làm việc
//     var luong = 0;

//     luong = luong1ngay * songaylam;
//     console.log("Tổng lương = ", luong);



//     //Viết choương trình người dùng nhập dài rộng . TÍnh chu vi và diện tích


//     //input : chieudai , chieurong
//     var chieudai = 5;
//     var chieurong = 3;
//     //Output
//     var chuvi = 0;
//     var dientich = 0;
//     //progress 
//     chuVi = (chieudai + chieurong) * 2;
//     dienTich = chieudai * chieurong;
//     console.log("Chu Vi =", chuvi);
//     console.log("Dien Tich = ",dientich);


//     //VIết chương trình cho phép người dùng nhập số ==> tính tổng các kí số đó
//     //ví dụ : 518 ==>  5+1+8 
//     //input
//     var so = 585;
//     //Output
//     var tongKyso =0;
//     //Progress : xử lý
    

    var tagH3 = document.getElementById('title')
    //innerHTML : phần nội dung giữa 2 thẻ đóng mở html

    tagH3.innerHTML ='Cybersoft.edu.vn';

    //value : phần  nội dung của thẻ input thường chứa giá trị người dùng nhập vào
    var taginput = document.getElementById ('txt');

    taginput.value = 'hello khải'

    var taginputnumber = document.getElementById ('number');
    console.log('taginputnumber.value');
    // alert(taginputnumber.value);

    //.src là nội dung hình ảnh của thẻ img

    var tagimg =document.getElementById ('hinhanh');

    tagimg.src = './img/hinh2.jpg'

//Định nghĩa hàm : Dùng để thực thi 1 loạt hành động sau khi chia



//Handle event : xử lý sự kiện
function sayHello (){
  alert('Chào mọi người')
}

  // Ví dụ 1 : VIết chương trình yêu cầu người dùng nhập 1 giá trị và khi bấm vào hiển thị sẽ in ra tại thẻ span#KetQuaHienThi


  function hienthithongtin(){
    //lấy giá trị nhập khi gọi hàm hiển thị thông tin 
    //input : luôn là string
    var input = document.getElementById ('GiaTriNhap');
    //output:string
    var output = input.value;
    //progress:
    //Xử lý kết quả hiện thị trên giao diện
    var tagspanKetQua = document.getElementById('KetQuaHienThi');
    tagspanKetQua.innerHTML = output;
  }


  