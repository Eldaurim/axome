const swiper = new Swiper('.swiper', {
  
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {  
     768: {       
        slidesPerView: 2,  
     },
     1255: {       
      slidesPerView: 3,  
      }
    },  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});