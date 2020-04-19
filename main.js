const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".nav_navbar_menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
