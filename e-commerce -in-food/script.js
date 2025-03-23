let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
}


document.getElementById("login-btn").addEventListener("click", function() {
    window.location.href = "login.html";  
});

let navbar=document.querySelector('.navbar');
    document.querySelector('#menu-btn').onclick=()=>{
        navbar.classList.toggle('active');
    }
window.onscroll=()=>{
    searchForm.classList.remove('active');
}
var swiper = new Swiper(".book-table-img-slider", {
    slidesPerView: 3,  // Number of slides visible at a time
    spaceBetween: 30,  // Space between slides
    loop: true,        // Infinite loop
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

