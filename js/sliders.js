var mySwiper = new Swiper('.swiper-container', {
  
  //добавила эффект, курсор и скорость на слайдеры
  speed: 1000, 
  effect: 'slide',
  grabCursor: true,
  
  // If we need pagination (точечки внизу слайдера, указывают где мы сейчас)
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})