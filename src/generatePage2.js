function generatePage2() {

    let content = document.getElementById("content");

    let page2Container = document.createElement("div");
    page2Container.id = "page2Container";


    let asideEle = document.createElement("aside");

    let samuraiImg = document.createElement("img");
    samuraiImg.id = "samuraiImg";
    samuraiImg.src = "../src/images/samurai-img.png";
    samuraiImg.alt = "samurai-img";


    asideEle.appendChild(samuraiImg);


    let mainEle = document.createElement("main");


    let articleEle = document.createElement("article");
    let lineBreakEle = document.createElement("br");
    let h2Ele = document.createElement("h2");
    h2Ele.innerText = "Our Story";

    let h6Ele1 = document.createElement("h6");
    h6Ele1.innerText = "At Japanese Cuisine we strive to bring people";
    let h6Ele2 = document.createElement("h6");
    h6Ele2.innerText = "the best Japanese food prepared using the freshest ";
    let h6Ele3 = document.createElement("h6");
    h6Ele3.innerText = "and best ingredients. Amazing Japanese ";
    let h6Ele4 = document.createElement("h6");
    h6Ele4.innerText = "food and a Fantastic Sushi Bar. Great ";
    let h6Ele5 = document.createElement("h6");
    h6Ele5.innerText = "selection of sake, dumplings and more. Perfect for dates, families, ";
    let h6Ele6 = document.createElement("h6");
    h6Ele6.innerText = "and business meetings. Come in and enjoy!!! ";
    let h6Ele7 = document.createElement("h6");
    h6Ele7.innerText = "Youkoso";
    h6Ele7.style.fontWeight = "bold";
    let h6Ele8 = document.createElement("h6");
    h6Ele8.innerText = "(Welcome)";
    
    articleEle.append(h6Ele1, lineBreakEle, h6Ele2, lineBreakEle, h6Ele3, lineBreakEle, h6Ele4, lineBreakEle, h6Ele5, lineBreakEle, h6Ele6, lineBreakEle, h6Ele7, h6Ele8);
    

    mainEle.append(h2Ele, articleEle);


    page2Container.append(asideEle, mainEle);

    

    content.appendChild(page2Container);

}

export default generatePage2;

