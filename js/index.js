const open = document.querySelector("#open");
const close = document.querySelector("#close");
const navbar = document.querySelector("nav");

open.addEventListener("click", () => {
  navbar.classList.add("openNav");
});
close.addEventListener("click", () => {
  navbar.classList.remove("openNav");
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("sticky", window.scrollY);
});
