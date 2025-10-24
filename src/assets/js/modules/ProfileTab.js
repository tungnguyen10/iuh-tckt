import BaseModule from "./BaseModule"
import $ from "jquery";
import 'slick-carousel'
export default class ProfileTab extends BaseModule {
  register() {

    $('.js-slidetabs').not('.slick-initialized').slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      variableWidth: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: true,
      asNavFor: '.js-slidetabs-for',
      prevArrow: $(".arrow-icon.arrow--prev03"),
      nextArrow: $(".arrow-icon.arrow--next03"),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            centerMode: false,
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            // centerMode: true,
            slidesToShow: 4
          }
        }
      ]
    });
    $('.js-slidetabs-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-slidetabs'
    });
    this.tabsProfileEdit();
   
  }
  
  tabsProfileEdit() {
    $('.edit-profile').click(function () {
      const Tabid = $(this).attr('data-profile');
      $('body').addClass('model-open');
      $(this).addClass('is-opened');
      $("#" + Tabid).addClass('is-opened');
      // $("#" + Tabid).find('.btn_add').addClass('aaa')
      $("#" + Tabid).find('.btn_add').on('click', function () {
        $("#" + Tabid).find('.process_experience').append('<div class="row group_contact"><fieldset class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><label>Năm:</label><input class="form-control datepicker-s"  name="year" type="text"></fieldset><fieldset class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><label>Vị trí công việc:</label><input class="form-control" type="text"></fieldset><fieldset class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><label>Ngày bắt đầu:</label><input class="form-control datepicker-s" type="text"></fieldset><fieldset class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><label>Ngày kết thúc:</label><input class="form-control datepicker-s" type="text"></fieldset><fieldset class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><label>Mô tả:</label><textarea class="form-control content-area" rows="5"></textarea></fieldset> </div>');
      });
      $("#" + Tabid).find('.btn_remove').on('click', function () {
        $("#" + Tabid).find('.group_contact:last').remove();
      });

    })

    $('.model-profile-bg, .profile-close').click(function () {
      $('body').removeClass('model-open');
      $('.edit-profile').removeClass('is-opened');
      $('.profile-content').removeClass('is-opened');
    })
    // $('.edit-profile-information-detail').on('click', function () {
    //   $(this).addClass('is-active').children('fieldset').stop().slideDown(300);
    //   return false;
    // });


  }
  tabsEditExperienceContent() {

    $('.btn_remove').on('click', function () {
      $('.group_contact:last').remove();
    });

  }


}
