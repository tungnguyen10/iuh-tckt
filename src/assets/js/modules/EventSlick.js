import BaseModule from "./BaseModule"
import $ from "jquery";
import 'slick-carousel'

export default class EventSlick extends BaseModule {
  register() {
    $('.js-slider').slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".arrow-icon.arrow--prev"),
      nextArrow: $(".arrow-icon.arrow--next"),
    });
    // $('.js-slider').slick({
    //   infinite: true,
    //   autoplay: false,
    //   autoplaySpeed: 2000,
    //   centerMode: false,
    //   variableWidth: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   prevArrow: $(".arrow-icon.arrow--prev"),
    //   nextArrow: $(".arrow-icon.arrow--next"),
    // });
    $('.js-slider02').slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      centerMode: true,
      variableWidth: true,
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
