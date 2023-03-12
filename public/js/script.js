
import { loadWindows } from './loaderScript.js'


function navb() {
    //navbar
    const navbar = document.querySelector(".navbar");
    const navbarIcon = document.querySelector(".navbar__icon");
    const linkNabvar = document.querySelector(".link__navbar");
    const li = navbar.querySelectorAll("li");
    const menuNambar = document.querySelector(".menu__navbar-items");
    const liMenu = menuNambar.querySelectorAll("li");


    window.addEventListener("scroll", () => {

        if (window.scrollY >= 541) {

            li[0].classList.remove("active");
            li[1].classList.add("active");
            liMenu[0].classList.remove("active");
            liMenu[1].classList.add("active");


        } else {
            li[0].classList.add("active");
            li[1].classList.remove("active");
            liMenu[0].classList.add("active");
            liMenu[1].classList.remove("active");


        }

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

        const data = await fetch("https://ecommercebackend.fundamentos-29.repl.co/")

        const res = await data.json();

        window.localStorage.setItem("products", JSON.stringify(res));

        return res;

    } catch (error) {
        console.log(error)
    }
}

let db = JSON.parse(window.localStorage.getItem("products")) || getData();
let newCarts = JSON.parse(window.localStorage.getItem("carts")) || {};

const showDocumentForCategory = async(elements, animar) => {
    const mainContainer = document.querySelector(".main__container");

    const data = JSON.parse(window.localStorage.getItem("products")) || await getData();


    let htmlJoin = null;

    switch (elements) {

        case "showAll":
            htmlJoin = "";

            data.forEach(element => {
                const { id, image, name, price, quantity } = element;

                const priceDouble = price.toFixed(2);

                let html = `
            <section class="main__cards ${animar ? "animate__animated animate__backInDown" : ''} ">
        
                    <article class="card__img">
                        <img  src="${image}" alt="${name} ${id}">
                   
                    </article>
                   
                    <article class="card__body background__cards-body color__white">
                   
                    
                    <button class="shop" id="${id}">+</button> 

                        <p> $ ${priceDouble} ${quantity ? `<span class="sold__nout">Stock ${quantity}</span>`
                        : `<span class="sold__out">sold out</span>`
                    }</p>
                        <p>${name}</p>
                    </article>
        
                </section>
            `;

                htmlJoin += html;

            });
            mainContainer.innerHTML = htmlJoin;
            break;

        case "showShirt":
            htmlJoin = '';

            data.forEach(element => {
                const { category, description, id, image, name, price, quantity } = element;
    
                const priceDouble = price.toFixed(2);
    
    
                if (category === "shirt") {
                    let html = `
                    <section class="main__cards ${animar ? "animate__animated animate__backInUp" : ''}">
                
                            <article class="card__img">
                                <img  src="${image}" alt="${name} ${id}">
                           
                            </article>
                           
                            <article class="card__body background__cards-body color__white">
                              
                                    
                        <button class="shop" id="${id}">+</button> 

                                <p> $ ${priceDouble} ${quantity ? `<span class="sold__nout">Stock ${quantity}</span>`
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
    
            break;

            case "showHoddie":
                htmlJoin = '';

                data.forEach(element => {
                    const { category, description, id, image, name, price, quantity } = element;
        
                    const priceDouble = price.toFixed(2);
        
        
                    if (category === "hoddie") {
                        let html = `
                        <section class="main__cards ${animar ? "animate__animated animate__backInLeft" : ''}">
                    
                                <article class="card__img">
                                    <img  src="${image}" alt="${name} ${id}">
                               
                                </article>
                               
                                <article class="card__body background__cards-body color__white">
                                 
                                      
                        <button class="shop" id="${id}">+</button> 

                                    <p> $ ${priceDouble} ${quantity ? `<span class="sold__nout">Stock ${quantity}</span>`
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
            break;

            case "showSweater":
                htmlJoin = '';

                data.forEach(element => {
                    const { category, description, id, image, name, price, quantity } = element;
        
                    const priceDouble = price.toFixed(2);
        
        
                    if (category === "sweater") {
                        let html = `
                        <section class="main__cards ${animar ? "animate__animated animate__backInRight" : ''}">
                    
                                <article class="card__img">
                                    <img  src="${image}" alt="${name} ${id}">
                               
                                </article>
                               
                                <article class="card__body background__cards-body color__white">
                                   
                                       
                        <button class="shop" id="${id}">+</button> 

                                    <p> $ ${priceDouble} ${quantity ? `<span class="sold__nout">Stock ${quantity}</span>`
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
            break;
    }

};

async function main(animar = true) {

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
        animar = true;


        showAll.classList.add('active_nav')

        showShirt.classList.remove("active_nav")
        showHoddie.classList.remove("active_nav")
        showSweater.classList.remove("active_nav")

        showDocumentForCategory("showAll", animar);

    });

    //show shirt
    showShirt.addEventListener("click", () => {
        animar = true;

        showShirt.classList.add('active_nav')

        showAll.classList.remove("active_nav")
        showHoddie.classList.remove("active_nav")
        showSweater.classList.remove("active_nav")

        showDocumentForCategory("showShirt", animar);
    });

    //show hoddie
    showHoddie.addEventListener("click", () => {
        animar = true;
        showHoddie.classList.add('active_nav')

        showAll.classList.remove("active_nav")
        showShirt.classList.remove("active_nav")
        showSweater.classList.remove("active_nav")

        showDocumentForCategory("showHoddie", animar);
        
    });

    //show sweater
    showSweater.addEventListener("click", () => {
        animar = true;
        showSweater.classList.add('active_nav')

        showAll.classList.remove("active_nav")
        showShirt.classList.remove("active_nav")
        showHoddie.classList.remove("active_nav")

        showDocumentForCategory("showSweater", animar);
        
    });

    data.forEach(element => {
        const { category, description, id, image, name, price, quantity } = element;

        const priceDouble = price.toFixed(2);

        let html = `
        <section class="main__cards  ${animar ? "animate__animated  animate__backInDown" : ''}">
    
                <article class="card__img">
                    <img  src="${image}" alt="${name} ${id}">
               
                </article>
               
                <article class="card__body background__cards-body color__white">
                  
           
                        <button class="shop" id="${id}">+</button> 

                    <p> $ ${priceDouble} ${quantity ? `<span class="sold__nout">Stock ${quantity}</span>`
                : `<span class="sold__out" >sold out</span>`
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

    const menuNambar = document.querySelector(".menu__navbar-items");
    const liMenu = menuNambar.querySelectorAll("li");


    li[0].addEventListener("click", () => {

        li[0].classList.add("active");
        li[1].classList.remove("active");

        liMenu[0].classList.add("active");
        liMenu[1].classList.remove("active");

    });

    li[1].addEventListener("click", () => {
        li[1].classList.add("active");
        li[0].classList.remove("active");
        liMenu[0].classList.remove("active");
        liMenu[1].classList.add("active");
    });


    const mNabars = document.querySelector(".menu__navbar-items");

    mNabars.addEventListener("click", (e) => {
        if (e.target.classList.contains("menu__one")) {

            li[0].classList.add("active");
            li[1].classList.remove("active");

            liMenu[0].classList.add("active");
            liMenu[1].classList.remove("active");

        } else if (e.target.classList.contains("menu__two")) {

            li[1].classList.add("active");
            li[0].classList.remove("active");
            liMenu[0].classList.remove("active");
            liMenu[1].classList.add("active");
        }
    })


}

async function getProductToShopping() {



    const products = document.querySelector(".main__container");

    products.addEventListener("click", (e) => {

        if (e.target.classList.contains("shop")) {
            const id = Number(e.target.id);

            let dataZero = null;

            try {
                dataZero = db.find(element => element.id === id);

            } catch (error) {

                db = JSON.parse(window.localStorage.getItem("products"));

                dataZero = db.find(element => element.id === id);

            }


            if (!dataZero.quantity) return alertify.alert('Lo sentimos', 'Producto Acabado', function () { alertify.success('Ok'); });

            let shopping = null;

            for (const elemen in db) {
                if (db[elemen].id === id) {
                    shopping = db[elemen];
                }
            }

            if (newCarts[shopping.id]) {

                if (shopping.quantity === newCarts[shopping.id].amount)
                    return alertify.alert('Lo sentimos', 'No hay mas en bodega', function () { alertify.success('Ok'); });

                newCarts[shopping.id].amount++;

            } else {
                newCarts[shopping.id] = { ...shopping, amount: 1 }
            }

            window.localStorage.setItem("carts", JSON.stringify(newCarts));
            showSorryShopping();
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




function actionDeleteProducts(findProducto, id) {
    if (findProducto.amount === 1) {



        findProducto.amount--;

        for (const element in newCarts) {
            if (newCarts[element].id === id) {

                delete newCarts[element];

            }
        }
        clearBuy();
        
        printCards(newCarts)
        showSorryShopping();

    } else {
        findProducto.amount--;


        for (const element in newCarts) {
            if (newCarts[element].id === id) {

                newCarts[element] = findProducto;

            }
        }

        printCards(newCarts);
        showSorryShopping();
    }

    //actualizamos el localstorage
    window.localStorage.setItem("carts", JSON.stringify(newCarts));
    showSorryShopping();
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
                alertify.confirm('Warning', 'Desea eliminar este producto',

                    function () { alertify.success('Eliminado 😠😠 '); actionDeleteProducts(findProducto, id) }

                    , function () { alertify.error('No eliminado 😁😀') })


                return;
            }

            actionDeleteProducts(findProducto);


        }
    });



}
//version 0.8
function addProducts() {

    const container = document.querySelector(".card__shopping-container");

    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("shopping__button-add")) {

            
            const id = Number(e.target.id);

            for (const element in newCarts) {

                if (newCarts[element].id === id) {
                   
                    if (newCarts[element].amount === newCarts[element].quantity) return alertify.alert('Lo sentimos', 'No hay mas producto en bodega', function () { alertify.success('Ok'); });;

                    newCarts[element].amount++;

                }

            }
            showSorryShopping();
            printCards(newCarts)



        }

    });

}

const eventoEleminar = (e) => {
    const id = Number(e.target.id);


    for (const element in newCarts) {

        if (newCarts[element].id === id) {
            delete newCarts[element];
        }
    }

    clearBuy();
    
    printCards(newCarts);

    window.localStorage.setItem("carts", JSON.stringify(newCarts));
    showSorryShopping();
}
function deleteSelectProduct() {

    const container = document.querySelector(".card__shopping-container");
    container.addEventListener('click', (e) => {

        if (e.target.classList.contains("shopping__button-allDelete")) {

            alertify.confirm('Warning', 'Desea eliminar este producto', function () { alertify.success('Eliminado 😠😠 '); eventoEleminar(e) }
                , function () { alertify.error('No eliminado 😁😀') })
        }

    });

}


const acctionBoy = () => {
    const currentProducts = [];

    let showCategory = null;

    for (const product of db) {
        const productCarts = newCarts[product.id]

        if (product.id === productCarts?.id) {

            currentProducts.push(
                {
                    ...product,
                    quantity: product.quantity - productCarts.amount
                }
            )
            showCategory = product.category;
        } else {

            currentProducts.push(product)
        }
    }

    db = currentProducts;
    newCarts = {};

    window.localStorage.setItem("products", JSON.stringify(db))
    window.localStorage.setItem("carts", JSON.stringify(newCarts))

    showCategory = showCategory.split("")[0].toUpperCase() + showCategory.slice(1, showCategory.length);

    showDocumentForCategory( `show${showCategory}`, false);
    showSorryShopping();
    clearBuy();
    printCards(newCarts)
}

const comprar = () => {
    const buyShopping = document.querySelector('.shopping__card-item');

    buyShopping.addEventListener('click', (e) => {

        e.preventDefault;

        if (!Object.values(newCarts).length) return alertify.alert('Palmado 😮', 'No tienes nada en el carrito 😂😂😂', function () { alertify.success('Ok 😪😪'); });

        alertify.confirm("Warning", "Desea comprar este producto 🙂🙂 ",
            () => { alertify.success("Compra realizada 😁😀"); acctionBoy() },
            () => { alertify.error("cancelado"); console.log("cancelado 😠😠") })

    });
}

const clearBuy = () => {

    const buyItem = document.querySelector(".shopping__body-item");
    const buyPrice = document.querySelector(".shopping__body-price")
    const buyTotal = document.querySelector(".total__shopping");
    const buyTotalTwo = document.querySelector(".total__shopping-menu");

    buyItem.innerHTML = "0 Items";
    buyPrice.innerHTML = "$ 0";
    buyTotal.innerHTML = "0";
    buyTotalTwo.innerHTML = "0";

}

const closeMenuNabvar = () => {

    const menuOne = document.querySelector(".menu__one");
    const menuTwo = document.querySelector(".menu__two");
    const menuClose = document.querySelector(".navbar__menu");


    menuOne.addEventListener("click", () => {
        menuClose.classList.toggle("close")
    });

    menuTwo.addEventListener("click", () => {
        menuClose.classList.toggle("close")
    })

};

const closeMenuShopping = () => {

    const menuShopping = document.querySelector(".card__of-shopping");

    const header = document.querySelector("#header");
    const main = document.querySelector("#main");

    header.addEventListener("click", () => {

        if (menuShopping.classList.contains("card__shopping-open")) {
            menuShopping.classList.toggle("card__shopping-open")
        }

    });

    main.addEventListener("click", () => {
        if (menuShopping.classList.contains("card__shopping-open")) {
            menuShopping.classList.toggle("card__shopping-open")
        }
    });

}

const showSorryShopping = () => {

    const datas = JSON.parse(window.localStorage.getItem("carts")) || {};
    const empy = document.querySelector(".error");
       
    if(!Object.keys(datas).length){
        empy.style.display = "flex"
        
    }else{
        empy.style.display = "none"
        
    }
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
deleteSelectProduct();
closeMenuNabvar();
closeMenuShopping();
showSorryShopping();
loadWindows();