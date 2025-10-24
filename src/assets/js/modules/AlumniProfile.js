import BaseModule from "./BaseModule"
import $ from "jquery";
import 'slick-carousel'

export default class AlumniProfile extends BaseModule {
  register() {
    $('.js-slider03').slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      centerMode: false,
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: $(".arrow-icon.arrow--prev03"),
      nextArrow: $(".arrow-icon.arrow--next03"),
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
    var a = 0;
    $(window).scroll(function () {
      var oTop = $(".l-alumniProfile").offset().top - window.innerHeight;
      if (a === 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-number");
          console.log(countTo)
          $({
            countNum: $this.text()
          }).animate(
            {
              countNum: countTo
            },

            {
              duration: 3000,
              easing: "swing",
              step: function () {
                //$this.text(Math.ceil(this.countNum));
                $this.text(
                  Math.ceil(this.countNum).toLocaleString("en")
                );
              },
              complete: function () {
                $this.text(
                  Math.ceil(this.countNum).toLocaleString("en")
                );
                //alert('finished');
              }
            }
          );
        });
        a = 1;
      }
    });

  }


}
