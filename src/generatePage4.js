
function generatePage4() {

    let content = document.getElementById("content");

    let page4Container = document.createElement("div");
    page4Container.id = "page4Container";


    page4Container.innerHTML = 
    `   <main>
            <h2>Locations</h2>
            <article>
                <h6>Our Japanese Cuisine is based in Ottawa City.</h6>
            </article>
        </main>

        <section id="footerContact">
            
            <aside id="asideLeft">
                <h5>JAPANESE CUISINE</h5>
                <div id="horizontalLine"></div>
                <h6>18234 Bank Street, Woodroffe Ave,</h6>
                <h6>Ottawa, ON K2P 1V5</h6>
                
                <h5>Tel: (613)456-7890</h5>
                
                <h6>Hours:</h6>
                <h6>Mon to Fri: <b>10:00 AM - 10:00 PM</b></h6>
                <h6>Sat & Sun: <b>11:00 AM - 11:00 PM</b></h6>
            </aside>

            <aside id="asideRight">
                <img src="../src/images/svg/ottawa.svg" alt="map">
            </aside>

        </section>

        <footer>
            <section id="footerTop">
                <div id="footerLeft">
                    <img src="../src/images/svg/japan-logo.svg" alt="logo">
                    <h4>CUISINE</h4>
                </div>

                <div id="footerMiddle">
                    <a href="#" id="about">About</a>
                    <a href="#" id="menu">Menu</a>
                    <a href="#" id="contact">Contact</a>
                </div>

                <div id="footerRight">
                    <a href="https://twitter.com/hmjatt" id="twitter">
                        <img src="../src/images/svg/twitter-outline.svg" alt="twitter">
                    </a>
                    <a href="https://github.com/hmjatt" id="githubFooter">
                        <img src="../src/images/svg/github-outline.svg" alt="github">
                    </a>
                </div>
            </section>

            <section id="footerBottom">
                <div id="attribution">
                    <p>Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
                    <p>Illustration by <a href="https://www.vecteezy.com/vector-art/5152875-illustration-samurai-with-ramen">Riven Ionia</a></p>
                    <p>Sushi Vectors by <a href="https://www.vecteezy.com/vector-art/1234546-sushi-oriental-food-icon-set">Stockgiu</a></p>
                    <p>Sushi Icons by <a href="https://icons8.com/icons/authors/3kSkbuAyjUdG/justicon/external-justicon-flat-justicon/external-japan-justicon-flat-justicon">Justicon</a></p>
                    <p>Ottawa Vectors by<a href="https://www.vecteezy.com/free-vector/toronto"> Vecteezy</a></p>
                </div>
            </section>

        </footer>`;

    content.appendChild(page4Container);

}

export default generatePage4;




