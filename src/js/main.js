(function($) {

  'use strict';


  $(function() {
    $('div.then-and-now').each(function(i, el) {
      var $slider = $(this);

      $slider.imagesLoaded()
        .done(function() {
          $slider.twentytwenty();
          var images = $slider.children('img');
          $slider.find('.twentytwenty-before-label').attr('data-content', $(images[0]).attr('data-label'));
          $slider.find('.twentytwenty-after-label').attr('data-content', $(images[1]).attr('data-label'));
        })
        .fail(function() {
          $slider.parent().remove();
        });

    });
  });

}(jQuery));