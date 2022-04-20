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
    mainEle.innerHTML = '<article><h6>At Japanese Cuisine we strive to bring people <br> the best Japanese food prepared using the freshest<br> and best ingredients.Amazing Japanese <br> food and a Fantastic Sushi Bar. Great <br> selection of sake, dumplings and more. Perfect for dates, families, <br> and business meetings. Come in and enjoy!!! <br><b>Youkoso</b>(Welcome).</h6></article>';

    

    page2Container.append(asideEle, mainEle);

    

    content.appendChild(page2Container);

}

export default generatePage2;



// <div id="page2Container">

// <aside>
//     <img src="../src/images/samurai-img.png" alt="samurai-img" id="samuraiImg">
// </aside>

// <main>
//     <article>
//         <h6>At Japanese Cuisine we strive to bring people <br> the best Japanese food prepared using the freshest<br> and best ingredients.
//             Amazing Japanese food and a Fantastic Sushi Bar. Great <br> selection of sake, dumplings and more. Perfect for dates, families, 
//             and business meetings. Come in and enjoy!!!
//             <b>Youkoso</b>(Welcome).
//         </h6>
//     </article>
// </main>

// </div>