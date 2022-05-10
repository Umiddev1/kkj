let darkLightbtn = document.querySelector(".nav__btn");
let body = document.querySelector("body");

darkLightbtn.addEventListener("click", function() {
  body.classList.toggle("dark")
});