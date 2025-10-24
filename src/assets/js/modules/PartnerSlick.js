import BaseModule from "./BaseModule"
import $ from "jquery";
import 'slick-carousel'

export default class PartnerSlick extends BaseModule {
  register() {
    $('.js-slider04').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: false,
      variableWidth: true,
      prevArrow: $(".arrow-icon.arrow--prev04"),
      nextArrow: $(".arrow-icon.arrow--next04"),

      responsive: [
        {
          breakpoint: 10000,
          settings: 'unslick',
        },
        {
          breakpoint: 767,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }


}
