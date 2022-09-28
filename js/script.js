let bars=document.querySelectorAll('.menu');
let closee=document.querySelector('.close');
let nav=document.querySelector('nav');
let searchIcon=document.querySelector('.search');
let formSearch=document.querySelector('.form-search');
let favIcon=document.querySelector('.favIcon');
let favbar=document.querySelector('.fav')
let closeFav=document.querySelector('.close-fav');
let cartIcon=document.querySelector('.cartIcon');
let cartbar=document.querySelector('.cart')
let closeCart=document.querySelector('.close-cart');


bars.forEach((e)=>{
    e.addEventListener('click',()=>{
        nav.classList.add('active');
        //Close Search Form
        formSearch.classList.remove('active');
        searchIcon.classList.replace('fa-times','fa-search');
        //close Cart
        cartbar.classList.remove('active');
        //close Fav
        favbar.classList.remove('active');        
    })
})

closee.addEventListener('click',()=>{
    nav.classList.remove('active');
})

searchIcon.addEventListener('click',()=>{
    formSearch.classList.toggle('active');
    if(searchIcon.classList.contains('fa-search')){
        searchIcon.classList.replace('fa-search','fa-times');
    }else{
        searchIcon.classList.replace('fa-times','fa-search');
    }
    //Close Nav
    nav.classList.remove('active');
    //close Cart
    cartbar.classList.remove('active');
    //close Fav
    favbar.classList.remove('active');
})

//Cart
cartIcon.addEventListener('click',()=>{
    cartbar.classList.add('active');
    //close Fav
    favbar.classList.remove('active');
    //Close Nav
    nav.classList.remove('active');
    //Close Search Form
    formSearch.classList.remove('active');
    searchIcon.classList.replace('fa-times','fa-search');
})

closeCart.addEventListener('click',()=>{
    cartbar.classList.remove('active');
})

//Fav
favIcon.addEventListener('click',()=>{
    favbar.classList.add('active');
    //close Cart
    cartbar.classList.remove('active');
    //Close Nav
    nav.classList.remove('active');
    //Close Search Form
    formSearch.classList.remove('active');
    searchIcon.classList.replace('fa-times','fa-search');
})

closeFav.addEventListener('click',()=>{
    favbar.classList.remove('active');
})




// Swiper Trusted Partners
var swiper = new Swiper(".content-trusted ", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1020: {
            slidesPerView: 5,
        },
    },
});

// Swiper Clients
var swiper2 = new Swiper(".content-clients ", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:5500,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

// 'use strict';
// /**
//  * navbar toggle
//  */

// const navOpenBtn = document.querySelector("[data-nav-open-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const navCloseBtn = document.querySelector("[data-nav-close-btn]");

// const navElems = [navOpenBtn, navCloseBtn];

// for (let i = 0; i < navElems.length; i++) {
//   navElems[i].addEventListener("click", function () {
//     navbar.classList.toggle("active");
//   });
// }



// /**
//  * search toggle
//  */

// const searchContainer = document.querySelector("[data-search-wrapper]");
// const searchBtn = document.querySelector("[data-search-btn]");

// searchBtn.addEventListener("click", function () {
//   searchContainer.classList.toggle("active");
// });



// /**
//  * whishlist & cart toggle
//  */

// const panelBtns = document.querySelectorAll("[data-panel-btn]");
// const sidePanels = document.querySelectorAll("[data-side-panel]");

// for (let i = 0; i < panelBtns.length; i++) {
//   panelBtns[i].addEventListener("click", function () {

//     let clickedElemDataValue = this.dataset.panelBtn;

//     for (let i = 0; i < sidePanels.length; i++) {

//       if (clickedElemDataValue === sidePanels[i].dataset.sidePanel) {
//         sidePanels[i].classList.toggle("active");
//       } else {
//         sidePanels[i].classList.remove("active");
//       }

//     }

//   });
// }



// /**
//  * back to top
//  */

// const backTopBtn = document.querySelector("[data-back-top-btn]");

// window.addEventListener("scroll", function () {
//   window.scrollY >= 100 ? backTopBtn.classList.add("active")
//     : backTopBtn.classList.remove("active");
// });



// /**
//  * product details page
//  */

// const productDisplay = document.querySelector("[data-product-display]");
// const productThumbnails = document.querySelectorAll("[data-product-thumbnail]");

// for (let i = 0; i < productThumbnails.length; i++) {
//   productThumbnails[i].addEventListener("click", function () {
//     productDisplay.src = this.src;
//     productDisplay.classList.add("fade-anim");

//     setTimeout(function () {
//       productDisplay.classList.remove("fade-anim");
//     }, 250);

//   });
// }