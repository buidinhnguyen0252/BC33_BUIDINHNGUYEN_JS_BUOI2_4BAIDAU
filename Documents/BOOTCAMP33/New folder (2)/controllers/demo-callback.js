function main(callback) {
  //   document.querySelector("#content").innerHTML = `
  //   <h1 class = "bg-dark text-white text-center p-5">${content} </h1>
  //   `;
  callback("cybersoft");
}
function renderH1(title) {
  document.querySelector("#content").innerHTML = `
    //   <h1 class = "bg-dark text-white text-center p-5">${title} </h1>`;
}
main(function (title) {
  document.querySelector("#content").innerHTML = `
    //   <h1 class = "bg-dark text-white text-center p-5" style="border-radius :15px">${content} </h1>`;
});
