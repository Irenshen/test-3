// import mobileNav from './modules/mobile-nav.js';
// mobileNav();


document.addEventListener("DOMContentLoaded", function () {
  //burder
  const burger = document.querySelector(".burger");
  const headerClose = document.querySelector(".header-close");
  const menuWrap = document.querySelector(".menu-wrap");
  const body = document.body;

  burger.addEventListener("click", () => {
    menuWrap.classList.add("menu-active");
    body.classList.add("modal-open");
  });

  headerClose.addEventListener("click", () => {
    menuWrap.classList.remove("menu-active");
    body.classList.remove("modal-open");
  });

  // menu-mobile
  if (window.innerWidth <= 500) {
    const headerLinks = document.querySelectorAll("header a");
    headerLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuWrap.classList.remove("menu-active");
        body.classList.remove("modal-open");
      });
    });
  }

  //header-fixed-active
  !(function () {
    const e = document.querySelector(".header");
  
    const checkScroll = () => {
      if (window.pageYOffset > 50) {
        e.classList.add("header-active");
      } else {
        e.classList.remove("header-active");
      }
    };
  
    window.onload = checkScroll;
  })();


  //sliders

  new Swiper(".swiper-logo", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 90,
    autoplay: {
      enabled: true,
      delay: 500,
      stopOnLastSlide: false,
      pauseOnMouseEnter: true,
    },
    pauseOnClick: true,
    resumeOnMouseLeave: true,
    allowTouchMove: true,
    speed: 3000,
    freeMode: true,
  });


  new Swiper(".awards-swiper", {
    slidesPerView: 1.36,
    spaceBetween: 48,
    touchRatio: 1,
    grabCursor:true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    loop: true,
    navigation: {
      nextEl: ".awards-swiper-button.swiper-button-next",
      prevEl: ".awards-swiper-button.swiper-button-prev",
    },
    speed: 3000,
    autoplay: {
      delay: 500, 
      disableOnInteraction: true, 
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 48,
      },
    },
  });

  new Swiper(".reasons-swiper", {
    slidesPerView: 1,
    spaceBetween: 48,
    touchRatio: 1,
    watchOverflow: true,
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".reasons-swiper-button.swiper-button-next",
      prevEl: ".reasons-swiper-button.swiper-button-prev",
    },
  });

  new Swiper(".news-swiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    touchRatio: 1,
    watchOverflow: true,
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".news-swiper-button.swiper-button-next",
      prevEl: ".news-swiper-button.swiper-button-prev",
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
        touchRatio: 1,
      },
      1200: {
        slidesPerView: 3,
        touchRatio: 0,
        spaceBetween: 48,
      },
    },
  });

  // new Swiper(".blogs-swiper", {
  //   slidesPerView: 1,
  //   spaceBetween: 40,
  //   touchRatio: 1,
  //   watchOverflow: true,
  //   watchSlidesVisibility: true,
  //   navigation: {
  //     nextEl: ".blogs-swiper-button.swiper-button-next",
  //     prevEl: ".blogs-swiper-button.swiper-button-prev",
  //   }
  // });


});

