/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the hamburger */
function responsiveNav() {
  var nav = document.getElementById("topnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

let scrollArrow = document.getElementById("scrollArrow");
let content = document.getElementById("content");

scrollArrow.addEventListener("click", scrollToContent)

function scrollToContent() {
  content.scrollIntoView();
}