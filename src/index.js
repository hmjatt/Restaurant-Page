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
let page1Container = document.getElementById("page1Container");
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




// content animation



function scrollTrigger(selector, options = {}){
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
      addObserver(el, options)
  })
}

function addObserver(el, options){
  if(!('IntersectionObserver' in window)){
      if(options.cb){
          options.cb(el)
      }else{
          entry.target.classList.add('active')
      }
      return
  }
  let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if(options.cb){
                  options.cb(el)
              }else{
                  entry.target.classList.add('active')
              }
              observer.unobserve(entry.target)
          }
      })
  }, options)
  observer.observe(el)
}
// Example usages:
scrollTrigger('.intro-text')

scrollTrigger('.scroll-reveal', {
  rootMargin: '-200px',
})

scrollTrigger('.loader', {
  rootMargin: '-200px',
  cb: function(el){
      el.innerText = 'Loading...'
      setTimeout(() => {
          el.innerText = 'Task Complete!'
      }, 1000)
  }
})