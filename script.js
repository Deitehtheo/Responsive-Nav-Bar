const toggleButton = document.querySelector(".toggle");
const closeButton = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");
const box= document.querySelector(".box");

toggleButton.addEventListener("click",() => {
  sideBar.style.right = 0;
});

closeButton.addEventListener("click", (e) => {
  console.log(e.target)
  sideBar.style.right = "-100%";
});


box.addEventListener("click", () => {
const isRounded=box.classList.contains("rounded")
console.log(isRounded)
box.classList.toggle("rounded")

// if (isRounded){
//   box.classList.remove("rounded")
// } else{
//   box.classList.add("rounded")
// }

});
