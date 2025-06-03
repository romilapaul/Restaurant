const navRight = document.querySelector(".nav-right");
const menu = document.querySelector(".ham");

menu.addEventListener("click", () => {
  navRight.classList.toggle("active");
});


