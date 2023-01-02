const burgerIconEl = document.querySelector('.fa-bars');

const burgerListEl =document.querySelector('.burgerContent');

burgerIconEl.addEventListener('click', () => {
    burgerListEl.classList.toggle('invisible')
})


// swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
