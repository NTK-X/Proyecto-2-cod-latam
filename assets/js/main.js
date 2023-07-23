const navMenu = document.querySelectorAll(".navbar-menu");
navMenu.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    e.target.classList.add("active");
  });
});

const toggleButton = document.getElementById("hmb-btn")
const hmbList = document.getElementById("navbar-menu")
toggleButton.addEventListener("click", function () {
  toggleButton.classList.toggle("close");
  hmbList.classList.toggle("open");
});
