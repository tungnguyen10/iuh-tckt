import BaseModule from "./BaseModule";
// core version + navigation, pagination modules:
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
  EffectFade,
  Thumbs,
} from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default class SwiperFull extends BaseModule {
  register() {
    Swiper.use([
      Navigation,
      Pagination,
      Autoplay,
      EffectCreative,
      EffectFade,
      Thumbs,
    ]);
    this.slidefull = new Swiper(".swiper_slidefull", {
      direction: "horizontal",
      slidesPerView: 1,
      loop: false,
      effect: "creative",
      creativeEffect: {
        limitProgress: 2,
        prev: {
          opacity: 0.85,
          scale: 0.8,
          translate: ["-95%", 0, 0],
        },
        next: {
          opacity: 0.85,
          scale: 0.8,
          translate: ["95%", 0, 0],
        },
      },
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      thumbs: {
        swiper: {
          el: '.swiper_slidefullThums',
          slidesPerView: 1,
          spaceBetween: 0,
          direction: "horizontal",
        }
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // this.swiperThumbs = new Swiper(".swiper_slidefullThums", {
    //   direction: "horizontal",
    //   slidesPerView: 1,
    //   loop: true,
    //   effect: "creative",
    //   creativeEffect: {
    //     limitProgress: 2,
    //     prev: {
    //       opacity: 0.85,
    //       scale: 0.8,
    //       translate: ["-95%", 0, 0],
    //     },
    //     next: {
    //       opacity: 0.85,
    //       scale: 0.8,
    //       translate: ["95%", 0, 0],
    //     },
    //   },
    //   speed: 1000,
    //   autoplay: {
    //     delay: 3000,
    //   },

    //   pagination: {
    //     el: ".swiper-pagination",
    //     type: "bullets",
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   thumbs: {
    //     swiper: this.slidefull,
    //   },
    // });

    // this.swiper = new Swiper(".swiperSlidefullO1", {
    //   slidesPerView: 1,
    //   parallax: true,
    //   loop: true,
    //   // Responsive breakpoints
    //   breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       speed: 900 /* Duration of transition between slides (in ms) */,
    //       slidesPerView: 1.2,
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       speed: 1400,
    //     },
    //   },
    //   centeredSlides: true,
    //   slideToClickedSlide: true,
    //   spaceBetween: 0,
    //   grabCursor: true,
    //   effect: "creative",
    //   creativeEffect: {
    //     limitProgress: 2,
    //     prev: {
    //       opacity: 0.85,
    //       scale: 0.8,
    //       translate: ["-95%", 0, 0],
    //     },
    //     next: {
    //       opacity: 0.85,
    //       scale: 0.8,
    //       translate: ["95%", 0, 0],
    //     },
    //   },

    //   // autoplay: {
    //   //   delay: 4000,
    //   //   waitForTransition: false,
    //   // },

    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });
    // this.swiper = new Swiper(".swiperSlidefullO2", {
    //   slidesPerView: 2,
    //   parallax: true,
    //   loop: true,
    //   // Responsive breakpoints
    //   breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       speed: 900 /* Duration of transition between slides (in ms) */,
    //       slidesPerView: 1.2,
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       speed: 1400,
    //     },
    //   },
    //   centeredSlides: true,
    //   slideToClickedSlide: true,
    //   spaceBetween: 0,
    //   grabCursor: true,
    //   effect: "creative",
    //   creativeEffect: {
    //     limitProgress: 2,
    //     prev: {
    //       opacity: 0.85,
    //       scale: 0.8,
    //       translate: ["-95%", 0, 0],
    //     },
    //     next: {
    //       opacity: 0.85,
    //       scale: 0.8,
    //       translate: ["95%", 0, 0],
    //     },
    //   },

    //   autoplay: {
    //     delay: 4000,
    //     waitForTransition: false,
    //   },

    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });
    // this.swiper = new Swiper(".swiperSlidefullO3", {
    //   slidesPerView: 3,
    //   parallax: true,
    //   loop: true,
    //   // Responsive breakpoints
    //   breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       speed: 900 /* Duration of transition between slides (in ms) */,
    //       slidesPerView: 1.2,
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       speed: 1400,
    //     },
    //   },
    //   centeredSlides: true,
    //   slideToClickedSlide: true,
    //   spaceBetween: 0,
    //   grabCursor: true,
    //   effect: "creative",
    //   creativeEffect: {
    //     limitProgress: 2,
    //     prev: {
    //       opacity: 0.85,
    //       scale: 0.8,
    //       translate: ["-95%", 0, 0],
    //     },
    //     next: {
    //       opacity: 0.85,
    //       scale: 0.8,
    //       translate: ["95%", 0, 0],
    //     },
    //   },

    //   autoplay: {
    //     delay: 4000,
    //     waitForTransition: false,
    //   },

    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    // });
  }
}
