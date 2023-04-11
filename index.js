console.log("hello");
let a = document.getElementsByClassName("change")[0];

setInterval(() => {
  let url = "h4.webp";

  a.src = url;
}, 3000);
setInterval(() => {
  let url = "h.webp";
  a.src = url;
}, 6000);
setInterval(() => {
  let url = "h3.webp";

  a.src = url;
}, 9000);
setInterval(() => {
  let url = "h4.webp";
  a.src = url;
},15000);
