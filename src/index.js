import generatePage1 from "./generatePage1";
import generatePage2 from "./generatePage2";
// import generatePage3 from "./generatePage3";



document.addEventListener("load",  generatePage1());



let aboutLink = document.getElementById("about");

aboutLink.addEventListener("click", generatePage2());
