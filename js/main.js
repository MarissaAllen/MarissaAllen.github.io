
(function($) {

  // Setup variables
  $window = $(window);
  $slide = $('.cover, .content');
  $body = $('body');

  //FadeIn all sections
  $body.imagesLoaded(function() {
    setTimeout(function() {
      // Resize sections
      adjustWindow();
      // Fade in sections
      $body.removeClass('loading').addClass('loaded');
    }, 800);
  });
//   //FadeIn all sections
// $body.imagesLoaded( function() {
//   setTimeout(function() {
//
//         // Resize sections
//         adjustWindow();
//
//         // Fade in sections
//       $body.removeClass('loading').addClass('loaded');
//
//   }, 800);
// });
  function adjustWindow() {
    // Init Skrollr
    var s = skrollr.init({
      render: function(data) {
      },
      smoothScrolling: true
    });

    // Get window size
    winH = $window.height();
    // Keep minimum height 550
    if (winH <= 450) {
      winH = 450;
    }

    // Resize slides
    $slide.height(winH);
    var halfWindowHeight = winH - (winH / 2);
    var onethirdsHeight = (winH) / 3;
    var onefourthHeight = (winH) / 4;

    $('#cover-0').height(winH);
    $('#cover-1').height(winH);
    $('#cover-2').height(winH);

    $('#content-0').height($('#content-0 .container').height() + 60);
    $('#content-1').height($('#content-1 .container').height() + 60);
    $('#content-2').height($('#content-2 .container').height() + 60);


    // Refresh Skrollr after resizing sections
    s.refresh($('.cover, .content'));
  }

  causeRepaintsOn = $("h1, h2, h3, p");

  $(window).resize(function() {
    causeRepaintsOn.css("z-index", 1);
    adjustWindow();
  });

  //Initialize featherlightGallery
  $('.gallery').featherlightGallery({
    gallery: {
      next: 'next »',
      previous: '« previous'
    },
    variant: 'featherlight-gallery'
  });

  //highlight
  hljs.initHighlightingOnLoad();


})(jQuery);
