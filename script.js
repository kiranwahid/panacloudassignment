
let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>
    {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');

});

window.addEventListener('scroll', ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
})



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  