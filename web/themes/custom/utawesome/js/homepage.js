(function ($, Drupal) {
  'use strict';

  $(window).on('load', function () {
    var currentTime = new Date().getHours();
    var $banner = $('.block-utawesome-banner');
    console.log(currentTime);
    if (currentTime > 5 && currentTime <= 9) {
      $banner.addClass('morning');
      console.log('morning');
    } else if (currentTime > 9 && currentTime <= 17) {
      $banner.addClass('day');
      console.log('day');
    } else if (currentTime > 17 && currentTime <= 20) {
      $banner.addClass('evening');
      console.log('evening');
    } else {
      $banner.addClass('night');
      console.log('night');
    }
  });
})(jQuery, Drupal);
