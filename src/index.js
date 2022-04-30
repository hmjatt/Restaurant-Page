import generatePage1 from "./generatePage1";
import generatePage2 from "./generatePage2";
import generatePage3 from "./generatePage3";
import generatePage4 from "./generatePage4";
import AOS from "aos";




document.addEventListener("load",  generatePage1(), generatePage2(), generatePage3(), generatePage4());

// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFunction()};

// Get the navbar
let navbar = document.getElementById("navEle");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction(e) {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

}


// When the user clicks on the link, scroll to that page




let home = document.getElementById("home");
let about = document.getElementById("about");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");
// let page1Container = document.getElementById("page1Container");
let page2Container = document.getElementById("page2Container");
let page3Container = document.getElementById("page3Container");
let page4Container = document.getElementById("page4Container");

function tabFunction(e) {

    home.addEventListener("click", function(e) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    e.preventDefault();
    });

    about.addEventListener("click", function(e) {
    window.scrollTo({
        top: page2Container.offsetTop,
        left: 0,
        behavior: "smooth"
    });
    e.preventDefault();
    });

    menu.addEventListener("click", function(e) {
    window.scrollTo({
        top: page3Container.offsetTop,
        left: 0,
        behavior: "smooth"
    });
    e.preventDefault();
    });

    contact.addEventListener("click", function(e) {
    window.scrollTo({
        top: page4Container.offsetTop,
        left: 0,
        behavior: "smooth"
    });
    e.preventDefault();
    });

    
}


tabFunction();



//  AOS 



AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
});


//  AOS



// // burger button 

// function myFunction() {
//     let x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

