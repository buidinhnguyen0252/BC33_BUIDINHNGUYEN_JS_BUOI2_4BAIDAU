function Product() {
  this.id = "";
  this.name = "";
  this.price = 0;
  this.desc = "";
  this.img = "";
}

const arrProduct = [
  { id: "1", name: "product 1", price: 1000, desc: "description product1" },
  { id: "2", name: "product 2", price: 2000, desc: "description product2" },
  { id: "3", name: "product 3", price: 3000, desc: "description product3" },
];
export { Product, arrProduct };

// Trường hợp đăc biệt : lệnh export default
//export default : Mỗi file chỉ đc sử dụng 1 lệnh
