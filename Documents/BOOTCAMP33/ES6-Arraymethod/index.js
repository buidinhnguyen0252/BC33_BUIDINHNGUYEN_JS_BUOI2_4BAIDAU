const arrProduct = [
  { id: 1, name: "iphone", price: 1000, type: "phone" },
  { id: 2, name: "iphoneX", price: 2000, type: "phone" },
  { id: 3, name: "iphoneXS", price: 3000, type: "phone" },
  { id: 4, name: "macbook pro 2020", price: 4000, type: "laptop" },
  { id: 5, name: "macbook pro 2021", price: 5000, type: "laptop" },
  { id: 6, name: "macbook pro 2022", price: 6000, type: "laptop" },
  { id: 7, name: "ipad pro 2020", price: 7000, type: "table" },
  { id: 8, name: "ipad pro 2021", price: 8000, type: "table" },
  { id: 9, name: "ipad pro 2022", price: 9000, type: "table" },
];
// Viet ham console.log ra các sản phẩm là laptop

const getAllLaptop = (arr) => {
  // input là 1 mảng các sản phẩm
  //output : arrResult = [] : laptop
  let arrResult = [];
  for (let index = 0; index < arr.length; index++) {
    // Mỗi lần duyệt qua 1 phần tử
    let product = arr[index];
    if (product.type === "laptop") {
      arrProduct.push;
    }
  }
};
//goi hàm
// getAllLaptop(arrProduct);

//filter : kết quả trả về sẽ là 1 mảng thỏa điều kiện return của arrow function . Nếu khongo thỏa thì return về mảng rỗng []

let arrProductLaptop = arrProduct.filter((prod) => prod.type === "laptop");
console.log(arrProductLaptop);

//log ra các sản phẩm có giá >= 3000

let result = arrProduct.filter((prodd) => prodd.price >= 3000);
console.log(result);

// find : tương tự filter tuy nhiên chỉ trả ra 1 object đầu tiên thỏa điều kiện, nếu ko có phần tử nào thỏa điều kiện thì trả về underfined. Thường dùng trên thuộc tính id( thuộc tính không trùng nhau để edit dữ liệu )

//Yêu cầu lấy ra sp có ID 4 để tăng giá lên 1000
let prod4 = arrProduct.find((prod) => prod.id === 4);
// Khi lấy ra là reference value ( mình thay đổi nó thì trong maảng cũng sẽ tự thay đổi theo )
if (prod4 !== undefined) {
  prod4.price += 1000;
}
console.log("arrProductupdate", arrProduct);

//findindex : tương tự find kết quả của findindex sẽ trả về vị trí (thay vì object) của phần tử đầu tiên thỏa điều kiện . Dùng trên thuộc tính định danh (ko trùng dữ liệu với các object khác) không tìm thấy trả về -1

let indexDel = arrProduct.findIndex((prodDel) => prodDel.id === 6);
console.log("indexDel", indexDel);
if (indexDel !== -1) {
  arrProduct.splice(indexDel, 1);
}
console.table(arrProduct);

//Dùng filter để xóa
let arrSplice4 = arrProduct.filter((p) => p.id !== 4);
console.log("arrsplice4", arrSplice4);

//foreach() : thực thi khối lệnh trong callback và không trả về gì cả (có thể dùng for in hoặc for of thay thế )
let resultForeach = arrProduct.forEach((prod, index) => {
  //Thực thi khối lệnh
  console.log(prod, index);
});

//Map(): dùng để biến đổi mảng này thành mảng khác
let resultMap = arrProduct.map((prod, index) => {
  let newProduct = { id: prod.id, name: prod.name, price: prod.price + 2000 };
  return newProduct; // Lần lượt đc add vào mảng kết quả sau lệnh return
});
console.log("resultMap", resultMap);

//reduce() : dùng để biến đổi mảng thành 1 giá trị (array, number, string , object)
// Ví dụ : TÍnh tổng tiền các sản phẩm
//Hàm nhận vào 2 tham số : callback , giá trị bắt đầu muốn biến đổi
let tongTien = arrProduct.reduce((tt, pd, index) => {
  // tt = 0 , lần 2 tt 1000 lần 3 tt 3000
  //Xử lý
  let tongT = tt + pd.price;
  return tongT;
}, 0);
console.log(tongTien);

//html reduce

let htmlContent = arrProduct.reduce((html, prod) => {
  return (
    html +
    `
    <div class="col-4">
        <div class ="card shadow">
        <img src="https://picsum.photos/id/${prod.id}/200/200 alt="..." class="w-100">
        <div class="card-body">
        <p>${prod.name}</p>
        </div>
        </div>
    </div>
    `
  );
}, "");
console.log(htmlContent);
document.querySelector("#product-list").innerHTML = htmlContent;

//sort() : sort theo số , sort theo chuỗi

const resultOderNumber = arrProduct.sort((prodNext, prod) => {
  //   let priceProdNext = prodNext.price; //2000
  //   let priceProduct = prod.price; //1000
  //   if (priceProdNext > priceProduct) {
  //     return 1;
  //   }
  //   result - 1;
  return prodNext.price - prod.price; // return về âm thì nghịch đảo , return về dương thì giữ nguyên
});
console.log(resultOderNumber, "giá thấp đến cao");

const resultOderByName = arrProduct.sort((prodNext, prod) => {
  let nameProdNext = prodNext.name.toLocaleLowerCase();
  let nameProd = prod.name.toLocaleLowerCase();
  if (nameProdNext < nameProd) {
    return -1;
  }
  return 1;
});
console.log(resultOderByName, "sắp xếp theo tên ");

//So sánh object

let objA = { id: 1 }; //0xxx
let objB = { id: 1 }; //0yyy
// _ : là đối tượng lodash
console.log("kết quả", _.isEqual(objA, objB));

//sắp xếp theo tên = lodash

const arrProduct1 = [
  { id: 1, name: "iphone", price: 1000, type: "phone" },
  { id: 2, name: "iphoneX", price: 2000, type: "phone" },
  { id: 3, name: "iphoneXS", price: 3000, type: "phone" },
  { id: 4, name: "macbook pro 2020", price: 4000, type: "laptop" },
  { id: 5, name: "macbook pro 2021", price: 5000, type: "laptop" },
  { id: 6, name: "macbook pro 2022", price: 6000, type: "laptop" },
  { id: 7, name: "ipad pro 2022", price: 9000, type: "table" },
  { id: 8, name: "ipad pro 2022", price: 7000, type: "table" },
  { id: 9, name: "ipad pro 2022", price: 8000, type: "table" },
];

const ketqua = _.orderBy(arrProduct1, ["name", "price"], ["desc"]);
console.log("kết quả", ketqua);
