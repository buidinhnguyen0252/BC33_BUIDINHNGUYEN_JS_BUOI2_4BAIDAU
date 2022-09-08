document.querySelector("#btnGetText").onclick = function () {
  //Sử dụng thư viện axios đến file data.txt
  var promise = axios({
    URL: "/data/data.txt", //Đường dẫn đến file muốn đọc
    method: "GET", //GET : phương thức đọc dữ liệu
    responseType: "text", // Dữ liệu trả về kiểu text
  });

  //Xử lý thành công
  promise.then(function (result) {
    console.log("kết quả", result);
    //Ghi dữ liệu lên thẻ p
    document.querySelector("#txt").innerHTML = result.data;
  });

  //Thất bại
  promise.catch(function (error) {
    console.log("error", error);
  });
};

document.querySelector("#btnGetXML").onclick = function () {
  var promise = axios({
    url: "./data/data.xml", //BE cung cấp
    method: "GET", //BE cung cấp
    responseType: "document", //BE cung cấp
  });
  //Xử lý thành công
  promise.then(function (result) {
    console.log("kết quả", result.data);
    var ketQua = result.data.querySelector("data").innerHTML;
    document.querySelector("#xml").innerHTML = ketQua;
  });

  //Thất bại
  promise.catch(function (error) {
    console.log("error", error);
  });
};

document.querySelector("#btnGetJSON").onclick = function () {
  var promise = axios({
    url: "./data/data.json", //BE cung cấp
    method: "GET", //BE cung cấp
    responseType: "JSON", //BE cung cấp
  });
  //Xử lý thành công
  promise.then(function (result) {
    console.log("kết quả", result.data);
    document.querySelector("#json").innerHTML = result.data.data;
  });

  //Thất bại
  promise.catch(function (error) {
    console.log("error", error);
  });
};
