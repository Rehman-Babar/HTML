// scrool-up //
const scroolup = document.querySelector("#scrool-up");
scroolup.addEventListener("click",function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth",
  }) ;
}) ;
window.addEventListener("scroll", function () {
  if (window.scrollY >= 700) {
    scroolup.style.opacity = 1;
  }
  else{
    scroolup.style.opacity = 0;
  }
});

//  theme// 
const themetoggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");
if (themetoggle = true ){
  body.style.backgroundColor= 'black'
  themetoggle.checked = true
};

themetoggle.addEventListener("change", function () {
body.classList.toggle("dark");

if (body.classList.contains("dark")) {
  localStorage.setItem("dark","active")
}
else{
  localStorage.removeItem("dark")
}
});