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
    let h2Ele = document.createElement("h2");
    h2Ele.innerText = "Our Story";

    let h6Ele1 = document.createElement("h6");
    h6Ele1.innerText = "At Japanese Cuisine we strive to bring people the best Japanese food prepared using the freshest and best ingredients. Amazing Japanese food and a Fantastic Sushi Bar. Great  selection of sake, dumplings and more. Perfect for dates, families, and business meetings. Come in and enjoy!!! " ;
    let h6Ele2 = document.createElement("h6");
    h6Ele2.innerText = "Youkoso";
    h6Ele2.style.fontWeight = "bold";
    let h6Ele3 = document.createElement("h6");
    h6Ele3.innerText = "(Welcome)";
    
    articleEle.append(h6Ele1, h6Ele2, h6Ele3);
    

    mainEle.append(h2Ele, articleEle);


    page2Container.append(asideEle, mainEle);

    

    content.appendChild(page2Container);

}

export default generatePage2;

