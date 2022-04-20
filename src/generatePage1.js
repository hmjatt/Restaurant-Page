function generatePage1() {
    
    let content = document.getElementById("content");

    let page1Container = document.createElement("div");
    page1Container.id = "page1Container";


    //-------for navEle-------//

    let navEle = document.createElement("nav");

    let navLeft = document.createElement("div");
    navLeft.id = "navLeft";
    
    let logoImgNavLeft = document.createElement("img");
    logoImgNavLeft.src = "../src/images/svg/japan-logo.svg";
    logoImgNavLeft.alt = "logo";
    let h4NavLeft = document.createElement("h4");
    h4NavLeft.innerText = "CUISINE";

    navLeft.append(logoImgNavLeft, h4NavLeft);


    let navMiddle = document.createElement("div");
    navMiddle.id = "navMiddle";

    let aboutLink = document.createElement("a");
    aboutLink.href = "#";
    aboutLink.id = "about";
    aboutLink.innerText = "About";

    let menuLink = document.createElement("a");
    menuLink.href = "#";
    menuLink.id = "menu";
    menuLink.innerText = "Menu";

    let contactLink = document.createElement("a");
    contactLink.href = "#";
    contactLink.id = "contact";
    contactLink.innerText = "Contact";
    
    navMiddle.append(aboutLink, menuLink, contactLink);


    let navRight = document.createElement("div");
    navRight.id = "navRight";

    let bag = document.createElement("div");
    bag.id = "bag";
    let bagLogoImg = document.createElement("img");
    bagLogoImg.id = "bagLogo";
    bagLogoImg.src = "../src/images/svg/shopping-bag.svg";
    bagLogoImg.alt = "shopping-bag";
    let bagItemsDiv = document.createElement("div");
    bagItemsDiv.id = "bagItems";
    let bagItemsP = document.createElement("p");
    bagItemsP.innerText = "1";
    bagItemsDiv.appendChild(bagItemsP);
    bag.append(bagLogoImg, bagItemsDiv);

    let github = document.createElement("div");
    github.id = "github";
    let githubLink = document.createElement("a");
    githubLink.href = "https://github.com/hmjatt";
    let githubLogoImg = document.createElement("img");
    githubLogoImg.id = "githubLogo";
    githubLogoImg.src = "../src/images/github.png";
    githubLogoImg.alt = "github";
    githubLink.appendChild(githubLogoImg);
    github.appendChild(githubLink);

    navRight.append(bag, github);

    
    navEle.append(navLeft, navMiddle, navRight);

    //-------for navEle-------//



    //-------for sectionNameEle-------//

    let sectionNameEle = document.createElement("section");

    let restaurantName = document.createElement("h1");
    let restaurantNamediv1 = document.createElement("div");
    let restaurantNamediv2 = document.createElement("div");
    let br = document.createElement("br");
    restaurantName.id = "restaurantName";
    restaurantNamediv1.innerText = "Japanese";
    restaurantNamediv2.innerText = "Cuisine";
    restaurantName.append(restaurantNamediv1, br, restaurantNamediv2);

    sectionNameEle.appendChild(restaurantName);

    //-------for sectionNameEle-------//



    //-------for asideEle-------//

    let asideEle = document.createElement("aside");

    let dragonGif = document.createElement("img");
    dragonGif.id = "dragonGif";
    dragonGif.src = "../src/images/gif/dragon.gif";
    dragonGif.alt = "dragon-gif";

    let sushiImg = document.createElement("img");
    sushiImg.id = "sushiImg";
    sushiImg.src = "../src/images/sushi.png";
    sushiImg.alt = "sushi-img";

    let ramenImg = document.createElement("img");
    ramenImg.id = "ramenImg";
    ramenImg.src = "../src/images/ramen.png";
    ramenImg.alt = "ramen-img";

    asideEle.append(dragonGif, sushiImg, ramenImg);

    //-------for asideEle-------//



    //-------for mainEle-------//

    let mainEle = document.createElement("main");

    let mainEleArticle = document.createElement("article");
    let mainEleArticleH6 = document.createElement("h6");
    let mainEleArticleDiv1 = document.createElement("div");
    mainEleArticleDiv1.innerText = "At Japanese Cuisine we strive to bring people";
    let mainEleArticleDiv2 = document.createElement("div");
    mainEleArticleDiv2.innerText = "the best Japanese food prepared using the freshest";
    let mainEleArticleDiv3 = document.createElement("div");
    mainEleArticleDiv3.innerText = "and best ingredients.";

    mainEleArticleH6.append(mainEleArticleDiv1, mainEleArticleDiv2, mainEleArticleDiv3);
    mainEleArticle.appendChild(mainEleArticleH6);

    mainEle.appendChild(mainEleArticle);

    //-------for mainEle-------//



    //-------for sectionButtonsEle-------//

    let sectionButtonsEle = document.createElement("section");
    sectionButtonsEle.id = "sectionButtons";

    let orderNowBtn = document.createElement("button");
    orderNowBtn.id = "orderNowBtn";
    let orderNowH5 = document.createElement("h5");
    orderNowH5.innerText = "Order Now";
    let rightArrowWhiteSvg = document.createElement("img");
    rightArrowWhiteSvg.src = "../src/images/svg/right-arrow-white.svg";
    rightArrowWhiteSvg.alt = "right-arrow-white";

    orderNowBtn.append(orderNowH5, rightArrowWhiteSvg);

    let menuBtn = document.createElement("button");
    menuBtn.id = "menuBtn";
    let menuH5 = document.createElement("h5");
    menuH5.innerText = "Menu";
    let rightArrowSvg = document.createElement("img");
    rightArrowSvg.src = "../src/images/svg/right-arrow-livid-brown.svg";
    rightArrowSvg.alt = "right-arrow";

    menuBtn.append(menuH5, rightArrowSvg);


    sectionButtonsEle.append(orderNowBtn, menuBtn);

    //-------for sectionButtonsEle-------//

    

    //-------for sectionFooterEle-------//

    let sectionFooterEle = document.createElement("section");
    sectionFooterEle.id = "page1Footer";

    let footItem1 = document.createElement("div");
    footItem1.id = "footItem1";
    let footItem1H3 = document.createElement("h3");
    footItem1H3.innerText = "18912"
    let footItem1H6 = document.createElement("h6");
    footItem1H6.innerText = "Orders Delivered";

    footItem1.append(footItem1H3, footItem1H6);

    let footItem2 = document.createElement("div");
    footItem2.id = "footItem2";
    let footItem2H3 = document.createElement("h3");
    let footItem2H3Span = document.createElement("span");
    footItem2H3Span.innerText = "4.6";
    let footItem2H3Img = document.createElement("img");
    footItem2H3Img.src = "../src/images/svg/star.svg";
    footItem2H3Img.alt = "rating-star";
    footItem2H3.append(footItem2H3Span, footItem2H3Img);
    let footItem2H6 = document.createElement("h6");
    footItem2H6.innerText = "Google Score";

    footItem2.append(footItem2H3, footItem2H6);

    let footItem3 = document.createElement("div");
    footItem3.id = "footItem3";
    let footItem3H3 = document.createElement("h3");
    footItem3H3.innerText = "456";
    let footItem3H6 = document.createElement("h6");
    footItem3H6.innerText = "Orders this week";

    footItem3.append(footItem3H3, footItem3H6);

    let footItem4 = document.createElement("div");
    footItem4.id = "footItem4";
    let footItem4H3 = document.createElement("h3");
    footItem4H3.innerText = "97 %";
    let footItem4H6 = document.createElement("h6");
    footItem4H6.innerText = "Natural products we use";

    footItem4.append(footItem4H3, footItem4H6);


    sectionFooterEle.append(footItem1, footItem2, footItem3, footItem4);

    //-------for sectionFooterEle-------//



    //-------for sectionAttrEle-------//

    let sectionAttrEle = document.createElement("section");

    let p1 = document.createElement("p");
    p1.innerHTML = 'Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a> ';

    let p2 = document.createElement("p");
    p2.innerHTML = '<p>Illustration by <a href="https://icons8.com/illustrations/author/oZpGJx8ts63Q">Thierry Fousse</a> from <a href="https://icons8.com/illustrations">Ouch!</a>';
    
    let p3 = document.createElement("p");
    p3.innerHTML = '<a href="https://www.vecteezy.com/vector-art/1234546-sushi-oriental-food-icon-set">Sushi Vectors by stockgiu</a>';


    sectionAttrEle.append(p1, p2, p3);

    //-------for sectionAttrEle-------//

    

    page1Container.append(navEle, sectionNameEle, asideEle, mainEle, sectionButtonsEle, sectionFooterEle, sectionAttrEle);

    content.appendChild(page1Container);

}

export default generatePage1;







// <!-- <div id="page1Container">
//             <nav>
//                 <div id="navLeft">
//                     <img src="../src/images/svg/japan-logo.svg" alt="logo">
//                     <h4>CUISINE</h4>
//                 </div>
//                 <div id="navMiddle">
//                     <a href="#" id="about">About</a>
//                     <a href="#" id="Menu">Menu</a>
//                     <a href="#" id="contact">Contact</a>
//                 </div>
//                 <div id="navRight">                 
//                     <div id="bag">
//                         <img id="bagLogo" src="../src/images/svg/shopping-bag.svg" alt="shopping-bag">
//                         <div id="bagItems"><p>1</p></div>
//                     </div>
//                     <div id="github"><a href="https://github.com/hmjatt"><img id="githubLogo" src="../src/images/github.png" alt="github"></a></div>
//                 </div>

//             </nav>
    
//             <section>
//                 <h1 id="restaurantName">Japanese <br> Cuisine</h1>
//             </section>

//             <aside>
//                 <img src="../src/images/gif/dragon.gif" alt="dragon" id="dragonGif">
//                 <img src="../src/images/sushi.png" alt="sushi-img" id="sushiImg">
//                 <img src="../src/images/ramen.png" alt="ramen-img" id="ramenImg">
//             </aside>
            
//             <main>
//                 <article>
//                     <h6>At Japanese Cuisine we strive to bring people <br> the best Japanese food prepared using the freshest<br> and best ingredients.</h6>
//                 </article>
//             </main>
    
//             <section id="sectionButtons">
//                 <button id="orderNowBtn">
//                     <h5>Order Now</h5>
//                     <img src="../src/images/svg/right-arrow-white.svg" alt="right-arrow">
//                 </button>
//                 <button id="menuBtn">
//                     <h5>Menu</h5>
//                     <img src="../src/images/svg/right-arrow-livid-brown.svg" alt="right-arrow">
//                 </button>
//             </section>
    
//             <section id="page1Footer">
//                 <div id="footItem1">
//                     <h3>18000</h3>
//                     <h6>Orders Delivered</h6>
//                 </div>
//                 <div id="footItem2">
//                     <h3>4.5<img src="../src/images/svg/star.svg" alt="rating-star"></h3>
//                     <h6>Google Score</h6>
//                 </div>
//                 <div id="footItem3">
//                     <h3>456</h3>
//                     <h6>Orders this week</h6>
//                 </div>
//                 <div id="footItem4">
//                     <h3>97 %</h3>
//                     <h6>Natural products we use</h6>
//                 </div>
//             </section>

//              <section>
//                 <p>Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
//                 <p>Illustration by <a href="https://icons8.com/illustrations/author/oZpGJx8ts63Q">Thierry Fousse</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
                    // <p><a href="https://www.vecteezy.com/vector-art/1234546-sushi-oriental-food-icon-set">Sushi Vectors by stockgiu</a></p>
//             </section> 
//         </div> --></main>