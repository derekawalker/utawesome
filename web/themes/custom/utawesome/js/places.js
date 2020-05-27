(function ($, Drupal) {
  'use strict';
  $(document).ready(function () {
    $('.node-attraction-tab').on('click', function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });
  });
})(jQuery, Drupal);
