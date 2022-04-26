function generatePage3() {

    let content = document.getElementById("content");

    let page3Container = document.createElement("div");
    page3Container.id = "page3Container";


    page3Container.innerHTML = `
        <main>
            <h2>Chef's Specials</h2>
            <article>
                <h6>Our Chef Akihiro Hayashi has been cooking for more than 18 years. He's known</h6>
                <h6>for serving 6 course meals, in which all the dishes have a natural flow</h6>
                <h6>and progression to them, and uses highly seasonal ingredients, some</h6>
                <h6>of which come from Nakayama's </h6>
                <h6>plenty of vegetables and herbs. <b>Itadakimasu</b>(Bon appétit).</h6>
                
            </article>

        </main>

        <section>

            <div class="item" id="item1">
                <div class="itemImg">
                    <img src="../src/images/items/ramen-item.png" alt="ramen">
                </div>
                <div class="itemText">
                    <h3>Ramen</h3>
                    <p>
                        A Japanese noodle dish consisting of a broth, meat, and vegetables.
                        Additional toppings such as sliced pork, nori, menma, eggs and
                        scallions could be added to the broth.
                    </p>
                </div>
                <div class="itemPrice">
                    <p>
                        <b>$10.00</b> 
                    </p>
                    <img class="shoppingBagItem" src="../src/images/svg/shopping-bag-item.svg" alt="bag-item">
                </div>
            </div>

            <div class="item" id="item2">
                <div class="itemImg">
                    <img src="../src/images/items/sushi-item.png" alt="sushi">
                </div>
                <div class="itemText">
                    <h3>Sushi</h3>
                    <p>
                        A quintessential Japanese food crafted with a combination of raw fish, vegetables,
                        and rice. It is served with three condiments on the side - soy sauce,
                        a dollop of wasabi (a dry green paste), and gari (pickled ginger). 
                    </p>
                </div>
                <div class="itemPrice">
                    <p>
                        <b>$15.00</b> 
                    </p>
                    <img class="shoppingBagItem" src="../src/images/svg/shopping-bag-item.svg" alt="bag-item">
                </div>
            </div>

            <div class="item" id="item3">
                <div class="itemImg">
                    <img src="../src/images/items/takoyaki-item.png" alt="takoyaki">
                </div>
                <div class="itemText">
                    <h3>Takotaki</h3>
                    <p>
                        A octopus-filled deep fried wheat batter balls, they are topped with
                        dried bonito flakes, dried seaweed flakes, and a special takoyaki sauce.
                        Can also be made with pickled ginger, and green onion.
                    </p>
                </div>
                <div class="itemPrice">
                    <p>
                        <b>$15.00</b> 
                    </p>
                    <img class="shoppingBagItem" src="../src/images/svg/shopping-bag-item.svg" alt="bag-item">
                </div>
            </div>

            <div class="item" id="item4">
                <div class="itemImg">
                    <img src="../src/images/items/onigiri-item.png" alt="onigiri">
                </div>
                <div class="itemText">
                    <h3>Onigiri</h3>
                    <p>
                        A dish consisting of a white or yellow rice ball, topped with
                        a filling such as salmon, tuna, or crab. Can also be made with
                        pickled plum, or more modern additions like teriyaki chicken.
                    </p>
                </div>
                <div class="itemPrice">
                    <p>
                        <b>$12.00</b>
                    </p>
                    <img class="shoppingBagItem" src="../src/images/svg/shopping-bag-item.svg" alt="bag-item">
                </div>
            </div>

            <div class="item" id="item5">
                <div class="itemImg">
                    <img src="../src/images/items/noodle-item.png" alt="Udon">
                </div>
                <div class="itemText">
                    <h3>Udon</h3>
                    <p>
                        These thick wheat-flour noodles are made of dashi broth, soy sauce, 
                        and mirin. offered with a wide range of toppings such as raw egg, 
                        tempura bits, and spring onion.
                    </p>
                </div>
                <div class="itemPrice">
                    <p>
                        <b>$10.00</b>
                    </p>
                    <img class="shoppingBagItem" src="../src/images/svg/shopping-bag-item.svg" alt="bag-item">
                </div>
            </div>

            <div class="item" id="item6">
                <div class="itemImg">
                    <img src="../src/images/items/green-tea-item.png" alt="green-tea">
                </div>
                <div class="itemText">
                    <h3>Green Tea</h3>
                    <p>
                        A tea that is made from Camellia sinensis leaves rich in immune-enhancing
                        antioxidants. Tea leaves are then steamed, rolled, and dried. which
                        are then used to make green tea.
                    </p>
                </div>
                <div class="itemPrice">
                    <p>
                        <b>$5.00</b>
                    </p>
                    <img class="shoppingBagItem" src="../src/images/svg/shopping-bag-item.svg" alt="bag-item">
                </div>
            </div>

        </section>`;

    content.appendChild(page3Container);

}

export default generatePage3;


