



function navb() {
    //navbar
    const navbar = document.querySelector(".navbar");
    const navbarIcon = document.querySelector(".navbar__icon");


    window.addEventListener("scroll", () => {

        if (navbarIcon.classList.contains("new__icon-color")) {

            if(navbar.classList.contains("toggle__navbar-background")){
                navbar.classList.remove("toggle__navbar-background");
            }

            if (window.scrollY >= 72) {

                navbar.classList.add("toggle__navbar-blac");

            } else if (window.scrollY < 72) {


                navbar.classList.remove("toggle__navbar-blac");


            }

        } else {
            if(navbar.classList.contains("toggle__navbar-blac")){
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

async function main() {

    const data = JSON.parse(window.localStorage.getItem("products") ) || await getData();

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
            const {category, description, id, image, name, price, quantity} = element;
    
            const priceDouble = price.toFixed(2);
    
            let html = `
            <section class="main__cards animate__animated animate__backInDown">
        
                    <article class="card__img">
                        <img  src="${image}" alt="${name} ${id}">
                   
                    </article>
                   
                    <article class="card__body background__cards-body color__white">
                        <button id="${id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                        </button>
                        <p> $ ${priceDouble} <span>Stock ${quantity}</span></p>
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
            const {category, description, id, image, name, price, quantity} = element;
    
            const priceDouble = price.toFixed(2);
    
            
            if(category === "shirt"){
                let html = `
                <section class="main__cards animate__animated animate__backInUp">
            
                        <article class="card__img">
                            <img  src="${image}" alt="${name} ${id}">
                       
                        </article>
                       
                        <article class="card__body background__cards-body color__white">
                            <button id="${id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                            </button>
                            <p> $ ${priceDouble} <span>Stock ${quantity}</span></p>
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
            const {category, description, id, image, name, price, quantity} = element;
    
            const priceDouble = price.toFixed(2);
    
            
            if(category === "hoddie"){
                let html = `
                <section class="main__cards animate__animated animate__backInLeft">
            
                        <article class="card__img">
                            <img  src="${image}" alt="${name} ${id}">
                       
                        </article>
                       
                        <article class="card__body background__cards-body color__white">
                            <button id="${id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                            </button>
                            <p> $ ${priceDouble} <span>Stock ${quantity}</span></p>
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
            const {category, description, id, image, name, price, quantity} = element;
    
            const priceDouble = price.toFixed(2);
    
            
            if(category === "sweater"){
                let html = `
                <section class="main__cards animate__animated animate__backInRight">
            
                        <article class="card__img">
                            <img  src="${image}" alt="${name} ${id}">
                       
                        </article>
                       
                        <article class="card__body background__cards-body color__white">
                            <button id="${id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                            </button>
                            <p> $ ${priceDouble} <span>Stock ${quantity}</span></p>
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
        const {category, description, id, image, name, price, quantity} = element;

        const priceDouble = price.toFixed(2);

        let html = `
        <section class="main__cards animate__animated animate__backInDown">
    
                <article class="card__img">
                    <img  src="${image}" alt="${name} ${id}">
               
                </article>
               
                <article class="card__body background__cards-body color__white">
                    <button id="${id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                    </button>
                    <p> $ ${priceDouble} <span>Stock ${quantity}</span></p>
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

function openShopping(){
    const shopping = document.querySelector("#open");
    const closeShopping = document.querySelector("#close");
    
    shopping.addEventListener("click", ()=>{
        const open = document.querySelector(".card__of-shopping");
        open.classList.toggle("card__shopping-open")
    });

    closeShopping.addEventListener("click", ()=>{
        const open = document.querySelector(".card__of-shopping");
        open.classList.toggle("card__shopping-open")
    });
}

function activeNavbar(){
    const navbar = document.querySelector(".link__navbar");
    const li = navbar.querySelectorAll("li");

    li[0].addEventListener("click", ()=> {
        
        li[0].classList.add("active");
        li[1].classList.remove("active");

    });

    li[1].addEventListener("click", ()=> {
        li[1].classList.add("active");
        li[0].classList.remove("active");
    });
            
       
}

function getProductToShopping(){

    const products = document.querySelectorAll(".main__cards");

    products.addEventListener("click", (e)=>{

        console.log(e)
        
    });
}



activeNavbar();
navb();
menuBar();
toggleColor();
openShopping();
main();
getProductToShopping();
