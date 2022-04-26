import generatePage1 from "./generatePage1";
import generatePage2 from "./generatePage2";
import generatePage3 from "./generatePage3";
import generatePage4 from "./generatePage4";



document.addEventListener("load",  generatePage1(), generatePage2(), generatePage3(), generatePage4());

// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFunction()};

// Get the navbar
let navbar = document.getElementById("navEle");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



// let aboutLink = document.getElementById("about");

// aboutLink.addEventListener("click", );
