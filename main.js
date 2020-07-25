const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const navBrand = document.querySelector(".menu-branding");
const menu_nav = document.querySelector(".menu-nav");
const nav_items = document.querySelectorAll(".nav-item");
let show = false;
console.log(menu, menuBtn);
menuBtn.addEventListener("click", toggleMedu);

function toggleMedu() {
  console.log("h");

  if (!show) {
    menuBtn.classList.add("close");
    navBrand.classList.add("show");
    menu.classList.add("show");
    menu_nav.classList.add("show");
    nav_items.forEach((item) => item.classList.add("show"));
    show = true;
  } else {
    menuBtn.classList.remove("close");
    navBrand.classList.remove("show");
    menu.classList.remove("show");
    menu_nav.classList.remove("show");
    nav_items.forEach((item) => item.classList.remove("show"));
    show = false;
  }
}
