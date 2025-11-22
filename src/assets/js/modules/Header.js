import BaseModule from "./BaseModule"
import $ from "jquery";

export default class Header extends BaseModule {
  register() {
    $(window).on('load resize ', function () {
      $("body").css("padding-top", $('.l-header').height());
    });
    this.userAgent()
    this.menu()
    this.scrollAnimation()
    this.pageTop()
    this.searchBox();
  }
  //userAgentIE
  userAgent() {
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') !== -1 || ua.indexOf('iPod') !== -1 || ua.indexOf('Android') !== -1 && ua.indexOf('Mobile') !== -1) {
      //sp
      $('body').addClass('is-view-sp').css('padding-top', $('.l-header').height());
    } else if (ua.indexOf('iPad') !== -1 || ua.indexOf('Android') !== -1) {
      //tab
      $('body').addClass('is-view-tab').css('padding-top', $('.l-header').height());
    } else {
      // pc
      $('body').addClass('is-view-pc').css('padding-top', $('.l-header').height());
    }
  }
  //menu
  //---------------------------------------------------------
  //menuClose

  menu() {
    const $menuTrriger = $('.js-menu-trigger');
    const $menuTarget = $('.js-menu-target');
    const $menuBg = $('.js-menu-bg');
    const $menuClose = $('.js-menu-close-trigger');
    let scrollPosition;
    //menuTrriger
    $menuTrriger.on('click', function () {
      if (!$(this).hasClass('is-open')) {
        $menuTrriger.addClass('is-open');
        $menuTarget.addClass('is-open');
        $menuBg.addClass('is-open');
        scrollPosition = $(window).scrollTop();
        $('body').addClass('is-locked').css({ 'top': -scrollPosition });
      } else {
        $menuTrriger.removeClass('is-open');
        $menuTarget.removeClass('is-open');
        $menuBg.removeClass('is-open');
        $('.l-search_hide').removeClass('show');
        $('.search-box').removeClass('active');
        $('body').removeClass('is-locked').css({ 'top': '' });
        window.scrollTo(0, scrollPosition);
      }
    });
    //menuClose
    $menuClose.on('click', function () {
      $menuTrriger.removeClass('is-open');
      $menuTarget.removeClass('is-open');
      $menuBg.removeClass('is-open');
      $('.l-search_hide').removeClass('show');
      $('.search-box').removeClass('active');
      $('body').removeClass('is-locked').css({ 'top': '' });
      window.scrollTo(0, scrollPosition);
    });

    var minWidth = $(window).innerWidth();
    if (minWidth < 767) {
      $(".js-anker").on('click',function () {
        $menuTrriger.removeClass('is-open');
        $menuTarget.removeClass('is-open');
        $menuBg.removeClass('is-open');
        $('.l-search_hide').removeClass('show');
        $('.search-box').removeClass('active');
        $('body').removeClass('is-locked').css({ 'top': '' });
        window.scrollTo(0, scrollPosition);
      });
    }


  }
  //animation
  //---------------------------------------------------------
  scrollAnimation() {
    const animationTarget = $('.js-animate');
    animationTarget.addClass('is-animate');
    $(window).on('load scroll', function () {
      animationTarget.each(function () {
        const targetPos = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > targetPos - windowHeight + 100) {
          $(this).addClass('is-animated');
        }
      });
    });
  }
  //pagetop
  //---------------------------------------------------------
  pageTop() {
    const pagetopTrigger = $('.js-pagetop');
    $(window).on('scroll', function () {
      const scrollHeight = $(document).height();
      const triggerHeight = pagetopTrigger.height();
      const scrollPosition = window.innerHeight + $(window).scrollTop() + triggerHeight;
      const footHeight = $('.l-footer').height();
      if (scrollHeight - scrollPosition <= footHeight) {
        pagetopTrigger.removeClass('is-fixed');
      } else {
        pagetopTrigger.addClass('is-fixed');
      }
    });
    pagetopTrigger.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  }
  //search box
  //---------------------------------------------------------
  searchBox() {
    $('.l-search_show').on('click', function () {
      $(this).next().stop().addClass('show');
      setTimeout(function () {
        $('.search-box').addClass('active');
      }, 300);

      return false;
    });
    $('.search-btn, .l-search_hide__bg').on('click', function () {
      $('.l-search_hide').removeClass('show');
      $('.search-box').removeClass('active');
      return false;
    });

  }



}
