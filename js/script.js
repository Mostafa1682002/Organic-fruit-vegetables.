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
let allFiltersLinks=document.querySelectorAll('.filters li');
let allCards=document.querySelectorAll('.content-cards .card');

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


allFiltersLinks.forEach((filter)=>{
    filter.addEventListener('click',()=>{
        allFiltersLinks.forEach((e)=>e.classList.remove('active'));
        filter.classList.add('active');
        let cardVisible=document.querySelectorAll(`.content-cards ${filter.getAttribute('data-category')}`);
        allCards.forEach((e)=>e.style.display='none');
        cardVisible.forEach((e)=>e.style.display='block');
    })
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
            slidesPerView: 2,
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


//Btn Up
let up=document.querySelector('.up');
window.onscroll=()=>{
    if(window.scrollY>600){
        up.classList.add('active')
    }else{
        up.classList.remove('active')
    }
}
up.addEventListener('click',()=>{
    window.scrollTo(0,0)
})
