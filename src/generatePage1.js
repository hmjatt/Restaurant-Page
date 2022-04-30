function generatePage1() {

    let content = document.getElementById("content");

    let page1Container = document.createElement("div");
    page1Container.id = "page1Container";


    //-------for navEle-------//

    let navEle = document.createElement("nav");
    navEle.id = "navEle";

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

    let homeLink = document.createElement("a");
    homeLink.href = "#";
    homeLink.id = "home";
    homeLink.innerText = "Home";

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
    
    navMiddle.append(homeLink, aboutLink, menuLink, contactLink);


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
    githubLogoImg.src = "../src/images/svg/github-outline.svg";
    githubLogoImg.alt = "github";
    githubLink.appendChild(githubLogoImg);
    github.appendChild(githubLink);

    navRight.append(bag, github);

    
    navEle.append(navLeft, navMiddle, navRight);

    //-------for navEle-------//



    //-------for sectionNameEle-------//

    let sectionNameEle = document.createElement("section");
    sectionNameEle.id = "sectionNameEle";

    let restaurantName = document.createElement("h1");
    let restaurantNamediv1 = document.createElement("div");
    let restaurantNamediv2 = document.createElement("div");
    let br = document.createElement("br");
    restaurantName.id = "restaurantName";
    restaurantNamediv1.innerText = "Japanese";
    restaurantNamediv2.innerText = "Cuisine";
    restaurantName.append(restaurantNamediv1, br, restaurantNamediv2);


    let asideEle = document.createElement("aside");

    let lanternGif = document.createElement("img");
    lanternGif.id = "lanternGif";
    lanternGif.src = "../src/images/gif/lantern.gif";
    lanternGif.alt = "lantern-gif";

    asideEle.append(lanternGif);

    sectionNameEle.append(restaurantName, asideEle);

    //-------for sectionNameEle-------//


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

    sectionFooterEle.innerHTML =     `
                                        <div id="footItem1" data-aos="flip-up"><h3>18912</h3><h6>Orders Delivered</h6></div>
                                        <div id="footItem2" data-aos="flip-down"><h3><span>4.6</span><img src="../src/images/svg/star.svg" alt="rating-star"></h3><h6>Google Score</h6></div>
                                        <div id="footItem3" data-aos="flip-up"><h3>456</h3><h6>Orders this week</h6></div>
                                        <div id="footItem4" data-aos="flip-down"><h3>97 %</h3><h6>Natural products we use</h6></div>
                                    `;


    //-------for sectionFooterEle-------//

    page1Container.append(navEle, sectionNameEle, mainEle, sectionButtonsEle, sectionFooterEle);

    content.appendChild(page1Container);

}



export default generatePage1;

