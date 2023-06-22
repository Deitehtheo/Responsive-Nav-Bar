const toggleButton = document.querySelector(".toggle");
const closeButton = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", opensideBar);

closeButton.addEventListener("click", () => {
  sideBar.style.right = "-100%";
});

const opensideBar = () => {
  sideBar.style.right = 0;
};
