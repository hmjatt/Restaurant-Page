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



    // //-------for sectionAttrEle-------//
    // //make it secure

    // let sectionAttrEle = document.createElement("section");

    // let p1 = document.createElement("p");
    // p1.innerHTML = 'Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a> ';

    // let p2 = document.createElement("p");
    // p2.innerHTML = '<p>Illustration by <a href="https://www.vecteezy.com/vector-art/5152875-illustration-samurai-with-ramen">Riven Ionia</a></a>';
    
    // let p3 = document.createElement("p");
    // p3.innerHTML = '<a href="https://www.vecteezy.com/vector-art/1234546-sushi-oriental-food-icon-set">Sushi Vectors by Stockgiu</a>';

    // let p4 = document.createElement("p");
    // p4.innerHTML = '<a href="https://icons8.com/icons/authors/3kSkbuAyjUdG/justicon/external-justicon-flat-justicon/external-japan-justicon-flat-justicon">Sushi Icons by Justicon</a>';

    // sectionAttrEle.append(p1, p2, p3, p4);

    // //-------for sectionAttrEle-------//

    

    page1Container.append(navEle, sectionNameEle, asideEle, mainEle, sectionButtonsEle, sectionFooterEle);

    

    content.appendChild(page1Container);

}



export default generatePage1;

