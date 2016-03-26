
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
    }, 10);
  });


  function adjustWindow() {

    // Init Skrollr
    var s = skrollr.init({
      render: function(data) {
        //Debugging - Log the current scroll position.
        //console.log(data.curTop);
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
    // $('#cover-1').height(2*onethirdsHeight);
    // $('#cover-2').height(2*onethirdsHeight);
    // $('#cover-0').height(halfWindowHeight);
    $('#cover-1').height(winH);
    $('#cover-2').height(winH);

    //TODO:  slight hack because sections need to be fixed heights
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
//facebook
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

  //Initialize featherlightGallery
  $('.gallery').featherlightGallery({
    gallery: {
      next: 'next »',
      previous: '« previous'
    },
    variant: 'featherlight-gallery'
  });

})(jQuery);
