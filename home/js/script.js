let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

//Notification
let bell = document.querySelector('.notification');

document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active');
}

//Swiper
const swiper = new Swiper('.trending-content', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      // when window width is >= 640px
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
});