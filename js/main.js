
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

  //Initialize featherlightGallery
  $('.gallery').featherlightGallery({
    gallery: {
      next: 'next »',
      previous: '« previous'
    },
    variant: 'featherlight-gallery'
  });

  //youtube video

      var v = document.getElementsByClassName("youtube-player");
      for (var n = 0; n < v.length; n++) {
          var p = document.createElement("div");
          p.innerHTML = labnolThumb(v[n].dataset.id);
          p.onclick = labnolIframe;
          v[n].appendChild(p);
      }


  function labnolThumb(id) {
      return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
  }

  function labnolIframe() {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("id", "youtube-iframe");
      this.parentNode.replaceChild(iframe, this);
  }
})(jQuery);
