import BaseModule from "./BaseModule"
import $ from "jquery";
import 'slick-carousel'

export default class FinancialNews extends BaseModule {
  register() {
    $('.js-sliderFinancialNews').slick({
      infinite: true,
      // autoplay: true,
      autoplaySpeed: 4000,
      centerMode: false,
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: $(".arrow-icon.arrow--prevFnews"),
      nextArrow: $(".arrow-icon.arrow--nextFnews"),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            centerMode: true,
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
    // var a = 0;
    // $(window).scroll(function () {
    //   var oTop = $(".l-financial-news").offset().top - window.innerHeight;
    //   if (a === 0 && $(window).scrollTop() > oTop) {
    //     $(".counter").each(function () {
    //       var $this = $(this),
    //         countTo = $this.attr("data-number");
    //       $({
    //         countNum: $this.text()
    //       }).animate(
    //         {
    //           countNum: countTo
    //         },

    //         {
    //           duration: 3000,
    //           easing: "swing",
    //           step: function () {
    //             //$this.text(Math.ceil(this.countNum));
    //             $this.text(
    //               Math.ceil(this.countNum).toLocaleString("en")
    //             );
    //           },
    //           complete: function () {
    //             $this.text(
    //               Math.ceil(this.countNum).toLocaleString("en")
    //             );
    //             //alert('finished');
    //           }
    //         }
    //       );
    //     });
    //     a = 1;
    //   }
    // });

  }


}
