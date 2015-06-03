(function($) {

  'use strict';


  $(function() {
    $('div.then-and-now').each(function(i, el) {
      var $slider = $(this);

      $slider.imagesLoaded()
        .done(function() {
          $slider.twentytwenty();
          var images = $slider.children('img');
          if (typeof $(images[0]).attr('data-label') !== 'undefined' || $(images[0]).attr('data-label') !== false) {
            $slider.find('.twentytwenty-before-label').attr('data-content', $(images[0]).attr('data-label'));
          } else {
            $slider.find('.twentytwenty-before-label').attr('data-content', 'Then');
          }
          if (typeof $(images[1]).attr('data-label') !== 'undefined' || $(images[1]).attr('data-label') !== false) {
            $slider.find('.twentytwenty-after-label').attr('data-content', $(images[1]).attr('data-label'));
          } else {
            $slider.find('.twentytwenty-after-label').attr('data-content', 'Now');
          }
        })
        .fail(function() {
          $slider.parent().remove();
        });

    });
  });

}(jQuery));