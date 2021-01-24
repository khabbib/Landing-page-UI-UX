const hamburger = document.querySelector(".humburger");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelectorAll(".links-container li");

hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  console.log("hello")
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.getElementById("header").style.width = "95%";
    document.getElementById("header").style.height = "10vh";
    document.getElementById("header").style.background = "none";
    // document.getElementById("logoText").style.fontSize = "25px";
    document.getElementById("links-container").style.color = "#224";
  } else {
    // document.getElementById("logoText").style.fontSize = "0px";
    document.getElementById("header").style.height = "6vh";
    document.getElementById("header").style.width = "100%";
    document.getElementById("links-container").style.color = "#225";
  }
  prevScrollpos = currentScrollpos;
};