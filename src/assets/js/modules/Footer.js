import BaseModule from "./BaseModule";
import $ from "jquery";

export default class Footer extends BaseModule {
  register() {
    this.accordion();
  }
  accordion() {
    $(window).on("load resize", function () {
      if ($(window).width() < 767) {
        $(".f-title").on("click", function () {
          $(this).toggleClass("is-active").next().stop().slideToggle(300);
          return false;
        });
        $(".l-header-nav__item p").on("click", function () {
          $(this).parent().toggleClass("is-active");
        });
      }
    });
    $("a.btn-support").on("click", function (e) {
      e.stopPropagation();
      $(".support-content").slideToggle();
    });
  }
}
