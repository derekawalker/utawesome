(function ($, Drupal, drupalSettings) {
  'use strict';

  // Drupal.behaviors.common = {
  //   attach: function (context) {
  //     // Remove TID's onload.
  //     Drupal.common.remove_tid();

  //     // Remove TID's onchange.
  //     $('body')
  //       .find('.form-autocomplete')
  //       .on('autocompleteclose', function () {
  //         Drupal.common.remove_tid();
  //       });
  //   },
  // };

  // Drupal.common = {
  //   remove_tid: function () {
  //     let field_autocomplete = $('body').find('.form-autocomplete');
  //     let autocomplete_tid_stripped = field_autocomplete.val().replace(/ *\([^)]*\) */g, '');
  //     field_autocomplete.val(autocomplete_tid_stripped);
  //   },
  // };

})(jQuery, Drupal, drupalSettings);
