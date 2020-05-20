(function ($, Drupal) {
  'use strict';
  $(window).on('load', function () {
    $('.owl-me .view-content').addClass('owl-carousel');

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1.5,
        },
        480: {
          items: 2.5,
        },
        1024: {
          items: 4.5,
        },
        1340: {
          items: 5.5,
        },
      },
    });
  });
})(jQuery, Drupal);
