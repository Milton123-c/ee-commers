



function navb() {
    //navbar
    const navbar = document.querySelector(".navbar");
    const navbarIcon = document.querySelector(".navbar__icon");


    window.addEventListener("scroll", () => {

        if (navbarIcon.classList.contains("new__icon-color")) {

            if (navbar.classList.contains("toggle__navbar-background")) {
                navbar.classList.remove("toggle__navbar-background");
            }

            if (window.scrollY >= 72) {

                navbar.classList.add("toggle__navbar-blac");

            } else if (window.scrollY < 72) {


                navbar.classList.remove("toggle__navbar-blac");


            }

        } else {
            if (navbar.classList.contains("toggle__navbar-blac")) {
                navbar.classList.remove("toggle__navbar-blac");
            }

            if (window.scrollY >= 72) {

                navbar.classList.add("toggle__navbar-background");

            } else if (window.scrollY < 72) {


                navbar.classList.remove("toggle__navbar-background");


            }
        }


    });
}

function menuBar() {
    //getting the evenet of my button

    const closeMenu = document.querySelector(".close__menu");
    const openMenu = document.querySelector(".open__menu");

    //getting the class of the nevbar__menu
    const navbarMenu = document.querySelector(".navbar__menu");

    closeMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle("close");
    });

    openMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle("close");
    });
}


async function getData() {
    try {

        const data = await fetch("https://ecommercebackend.fundamentos-29.repl.co/");

        const res = await data.json();

        window.localStorage.setItem("products", JSON.stringify(res));

        return res;

    } catch (error) {
        console.log(error)
    }
}

let db = JSON.parse(window.localStorage.getItem("products")) || getData();
let newCarts = JSON.parse(window.localStorage.getItem("carts")) || {};


async function main() {

    const data = JSON.parse(window.localStorage.getItem("products")) || await getData();

    const mainContainer = document.querySelector(".main__container");



    let htmlJoin = "";

    //mostramos todos los productos

    const showAll = document.querySelector(".show__all");
    const showShirt = document.querySelector(".show__shirt");
    const showHoddie = document.querySelector(".show__hoddie");
    const showSweater = document.querySelector(".show__sweater");


    //show all
    showAll.addEventListener("click", () => {
        showAll.classList.add('active_nav')

        showShirt.classList.remove("active_nav")
        showHoddie.classList.remove("active_nav")
        showSweater.classList.remove("active_nav")

        htmlJoin = "";
        data.forEach(element => {
            const { category, description, id, image, name, price, quantity } = element;

            const priceDouble = price.toFixed(2);

            let html = `
            <section class="main__cards animate__animated animate__backInDown">
        
                    <article class="card__img">
                        <img  src="${image}" alt="${name} ${id}">
                   
                    </article>
                   
                    <article class="card__body background__cards-body color__white">
                   
                            <svg id="${id}" class="shop"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                  
                        <p> $ ${priceDouble} ${quantity ? `<span>Stock ${quantity}</span>`
                    : `<span class="sold__out">sold out</span>`
                }</p>
                        <p>${name}</p>
                    </article>
        
                </section>
            `;

            htmlJoin += html;

        });


        mainContainer.innerHTML = htmlJoin;
    });

    //show shirt
    showShirt.addEventListener("click", () => {
        showShirt.classList.add('active_nav')

        showAll.classList.remove("active_nav")
        showHoddie.classList.remove("active_nav")
        showSweater.classList.remove("active_nav")

        htmlJoin = '';

        data.forEach(element => {
            const { category, description, id, image, name, price, quantity } = element;

            const priceDouble = price.toFixed(2);


            if (category === "shirt") {
                let html = `
                <section class="main__cards animate__animated animate__backInUp">
            
                        <article class="card__img">
                            <img  src="${image}" alt="${name} ${id}">
                       
                        </article>
                       
                        <article class="card__body background__cards-body color__white">
                          
                                <svg id="${id}" class="shop"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                          
                            <p> $ ${priceDouble} ${quantity ? `<span>Stock ${quantity}</span>`
                        : `<span class="sold__out">sold out</span>`
                    }</p>
                            <p>${name}</p>
                        </article>
            
                    </section>
                `;

                htmlJoin += html;
            }



        });

        mainContainer.innerHTML = htmlJoin;

    });

    //show hoddie
    showHoddie.addEventListener("click", () => {
        showHoddie.classList.add('active_nav')

        showAll.classList.remove("active_nav")
        showShirt.classList.remove("active_nav")
        showSweater.classList.remove("active_nav")

        htmlJoin = '';

        data.forEach(element => {
            const { category, description, id, image, name, price, quantity } = element;

            const priceDouble = price.toFixed(2);


            if (category === "hoddie") {
                let html = `
                <section class="main__cards animate__animated animate__backInLeft">
            
                        <article class="card__img">
                            <img  src="${image}" alt="${name} ${id}">
                       
                        </article>
                       
                        <article class="card__body background__cards-body color__white">
                         
                                <svg id="${id}" class="shop"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                         
                            <p> $ ${priceDouble} ${quantity ? `<span>Stock ${quantity}</span>`
                        : `<span class="sold__out">sold out</span>`
                    }</p>
                            <p>${name}</p>
                        </article>
            
                    </section>
                `;

                htmlJoin += html;
            }



        });

        mainContainer.innerHTML = htmlJoin;
    });

    //show sweater
    showSweater.addEventListener("click", () => {
        showSweater.classList.add('active_nav')

        showAll.classList.remove("active_nav")
        showShirt.classList.remove("active_nav")
        showHoddie.classList.remove("active_nav")


        htmlJoin = '';

        data.forEach(element => {
            const { category, description, id, image, name, price, quantity } = element;

            const priceDouble = price.toFixed(2);


            if (category === "sweater") {
                let html = `
                <section class="main__cards animate__animated animate__backInRight">
            
                        <article class="card__img">
                            <img  src="${image}" alt="${name} ${id}">
                       
                        </article>
                       
                        <article class="card__body background__cards-body color__white">
                           
                                <svg id="${id}" class="shop" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                       
                            <p> $ ${priceDouble} ${quantity ? `<span>Stock ${quantity}</span>`
                        : `<span class="sold__out">sold out</span>`
                    }</p>
                            <p>${name}</p>
                        </article>
            
                    </section>
                `;

                htmlJoin += html;
            }



        });

        mainContainer.innerHTML = htmlJoin;
    });

    data.forEach(element => {
        const { category, description, id, image, name, price, quantity } = element;

        const priceDouble = price.toFixed(2);

        let html = `
        <section class="main__cards animate__animated animate__backInDown">
    
                <article class="card__img">
                    <img  src="${image}" alt="${name} ${id}">
               
                </article>
               
                <article class="card__body background__cards-body color__white">
                  
                        <svg class="shop" id="${id}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                    
                    <p> $ ${priceDouble} ${quantity ? `<span>Stock ${quantity}</span>`
                : `<span class="sold__out">sold out</span>`
            }</p>
                    
                    <p>${name}</p>
                </article>
    
            </section>
        `;

        htmlJoin += html;

    });


    mainContainer.innerHTML = htmlJoin;

}


function toggleColor() {


    const toggleNewColor = document.querySelector(".toggle__color");

    toggleNewColor.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });
}

function openShopping() {
    const shopping = document.querySelector("#open");
    const closeShopping = document.querySelector("#close");

    shopping.addEventListener("click", () => {
        const open = document.querySelector(".card__of-shopping");
        open.classList.toggle("card__shopping-open")
    });

    closeShopping.addEventListener("click", () => {
        const open = document.querySelector(".card__of-shopping");
        open.classList.toggle("card__shopping-open")
    });
}

function activeNavbar() {
    const navbar = document.querySelector(".link__navbar");
    const li = navbar.querySelectorAll("li");

    li[0].addEventListener("click", () => {

        li[0].classList.add("active");
        li[1].classList.remove("active");

    });

    li[1].addEventListener("click", () => {
        li[1].classList.add("active");
        li[0].classList.remove("active");
    });


}

async function getProductToShopping() {



    const products = document.querySelector(".main__container");

    products.addEventListener("click", (e) => {

        if (e.target.classList.contains("shop")) {
            const id = Number(e.target.id);

            let dataZero = db.find(element => element.id === id);

            if (!dataZero.quantity) return alert("Lo sentimos, producto acabado")

            let shopping = null;

            for (const elemen in db) {
                if (db[elemen].id === id) {
                    shopping = db[elemen];
                }
            }

            if (newCarts[shopping.id]) {

                if (shopping.quantity === newCarts[shopping.id].amount)
                    return alert("No hay mas en bodega")

                newCarts[shopping.id].amount++;

            } else {
                newCarts[shopping.id] = { ...shopping, amount: 1 }
            }

            window.localStorage.setItem("carts", JSON.stringify(newCarts));

            printCards(newCarts)

        }

    });


}

function printCards(carts) {

    if (Object.keys(carts).length) {

        let shoppingHtml = '';
        let totalProductShopping = null;
        let totalItem = null;

        let vaciar = null;

        for (const element in carts) {
            const { name, amount, quantity, price, id, image } = carts[element];

            vaciar = amount;

            const total = amount * price;

            totalItem += amount;

            let chopHtml = `
               <section class="shopping__container">
   
              
               <article class="shopping__catalog">
   
                   <article class="card__catalogo">
                       <article class="card__catalogo-img">
                           <img src="${image}"
                               alt="${name} ${id}">
                       </article>
   
                       <article class="card__catalogo-body">
                           <h1>
                               ${name}
                           </h1>
                           <p>
                               <span>Stock: ${quantity} | </span>
                               $${price} Subtotal: $${total}
                           </p>
   
                           <article class="card__catalogo-button">
                               <button class="shopping__button-delete" id="${id}">
                                   -
                               </button>
   
                               <p>${amount} units</p>
   
                               <button class="shopping__button-add" id="${id}">
                                   +
                               </button>
   
                                   <box-icon class="shopping__button-allDelete" id="${id}" name='trash-alt'></box-icon>
                              
                           </article>
   
                       </article>
   
                   </article>
   
               </article>
   
           </section>
               `;

            totalProductShopping += total;
            shoppingHtml += chopHtml
        }



        const chooseShopping = document.querySelector(".card__shopping-container");

        const shoppingItem = document.querySelector(".shopping__body-item");
        const shoppingPrice = document.querySelector(".shopping__body-price");
        const shoppingMenu = document.querySelector(".total__shopping-menu");
        const totalShoppintItem = document.querySelector(".total__shopping");

        totalShoppintItem.innerHTML = totalItem;
        shoppingMenu.innerHTML = totalItem;

        shoppingItem.innerHTML = `${totalItem} items`;

        shoppingPrice.innerHTML = `$${totalProductShopping}`;

        chooseShopping.innerHTML = shoppingHtml;

        shoppingHtml = "";

    } else {
        const chooseShopping = document.querySelector(".card__shopping-container");

        chooseShopping.innerHTML = "";
    }



}



function deteleProducts() {


    const container = document.querySelector(".card__shopping-container");

    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("shopping__button-delete")) {

            const id = Number(e.target.id);

            let findProducto = null;

            for (const element in newCarts) {
                if (newCarts[element].id === id) {
                    findProducto = newCarts[element];
                }
            }

            //procedemos a reducir la cantidad de amount

            if (findProducto.amount === 1) {
                findProducto.amount--;

                for (const element in newCarts) {
                    if (newCarts[element].id === id) {

                        delete newCarts[element];

                    }
                }
                const shoppingItem = document.querySelector(".shopping__body-item");
                const shoppingPrice = document.querySelector(".shopping__body-price");
                const shoppingTotal = document.querySelector(".total__shopping");
                const shoppingMenu = document.querySelector(".total__shopping-menu");
    
                shoppingItem.innerHTML = "0 items";
                shoppingPrice.innerHTML = "$0";
                shoppingTotal.innerHTML = "0";
                shoppingMenu.innerHTML = "0";

                printCards(newCarts)

            } else {
                findProducto.amount--;


                for (const element in newCarts) {
                    if (newCarts[element].id === id) {

                        newCarts[element] = findProducto;

                    }
                }

                printCards(newCarts);
            }

            //actualizamos el localstorage
            window.localStorage.setItem("carts", JSON.stringify(newCarts));

        }
    });



}

function addProducts() {

    const container = document.querySelector(".card__shopping-container");

    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("shopping__button-add")) {

            const id = Number(e.target.id);

            for (const element in newCarts) {

                if (newCarts[element].id === id) {

                    if (newCarts[element].amount === newCarts[element].quantity) return alert("No hay mas productos");

                    newCarts[element].amount++;

                }

            }

            printCards(newCarts)

          
            
        }

    });

}

function deleteSelectProduct() {

    const container = document.querySelector(".card__shopping-container");

    container.addEventListener('click', (e) => {

        if (e.target.classList.contains("shopping__button-allDelete")) {

            const id = Number(e.target.id);

            for (const element in newCarts) {
                if (newCarts[element].id === id) {
                    delete newCarts[element];
                }
            }

            const shoppingItem = document.querySelector(".shopping__body-item");
            const shoppingPrice = document.querySelector(".shopping__body-price");
            const shoppingTotal = document.querySelector(".total__shopping");
            const shoppingMenu = document.querySelector(".total__shopping-menu");

            shoppingItem.innerHTML = "0 items";
            shoppingPrice.innerHTML = "$0";
            shoppingTotal.innerHTML = "0";
            shoppingMenu.innerHTML = "0";

            printCards(newCarts);

            window.localStorage.setItem("carts", JSON.stringify(newCarts));


        }

    });

}

const comprar = () => {
    const buyShopping = document.querySelector('.shopping__card-item');

    buyShopping.addEventListener('click', () => {


        if (!Object.values(newCarts).length) return alert("No tienes nada en el carrito")

        const response = confirm("seguro que quieres comprar ")


        if (!response) return;

        const currentProducts = [];

        for (const product of db) {
            const productCarts = newCarts[product.id]

            if (product.id === productCarts?.id) {

                currentProducts.push(
                    {
                        ...product,
                        quantity: product.quantity - productCarts.amount
                    }
                )
                console.log("entro")

            } else {

                currentProducts.push(product)
            }
        }

        db = currentProducts;
        newCarts = {};

        window.localStorage.setItem("products", JSON.stringify(db))
        window.localStorage.setItem("carts", JSON.stringify(newCarts))
        main();
        printCards(newCarts)

    });
}


activeNavbar();
navb();
menuBar();
toggleColor();
openShopping();
main();
getProductToShopping();
printCards(newCarts)
comprar();
deteleProducts();
addProducts();
deleteSelectProduct()