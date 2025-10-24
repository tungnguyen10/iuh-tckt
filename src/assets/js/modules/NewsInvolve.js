
import BaseModule from "./BaseModule"
import $ from "jquery";
import 'slick-carousel'

export default class NewsInvolve extends BaseModule {
  register() {
    $('.js-news_involve').slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $(".arrow-icon.arrow--prev02"),
      nextArrow: $(".arrow-icon.arrow--next02"),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            centerMode: false,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
    });

  }


}
