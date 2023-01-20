$(document).ready(function () {
  // --< BEGIN || Spacing From Header >-- //
  function headerheight() {
    var head_height = $("header").outerHeight(true);
    $(".header-expansion").css("margin-top", head_height + "px");
  }
  headerheight();
  $(window).resize(headerheight);
  // --< ENDS || Spacing From Header >-- //

  // --< BEGIN || Active Link in Header >-- //
  $(".navbar-nav li a").each(function () {
    var pathname1 = window.location.href.substr(
      window.location.href.lastIndexOf("/") + 1
    );
    var pathname = pathname1.replace("#/", "");
    if ($(this).attr("href") == pathname) {
      $(this).addClass("active");
    }
  });
  // --< ENDS || Active Link in Header >-- //

  // --< BEGIN || For Clean Base URL >-- //
  history.replaceState(null, null, " ");

  $(window).on("hashchange", function (e) {
    history.replaceState("", document.title, e.originalEvent.oldURL);
  });
  // --< ENDS || For Clean Base URL >-- //


  // --< BEGIN || Hide/Show Navigation Menu >-- //
  $(".navbar-toggler").click(function () {
    $("html").toggleClass("show-menu");
  });
  // --< ENDS || Hide/Show Navigation Menu >-- //

});


// --< BEGIN || Owl Carousel For Advantages >-- //
$(document).ready(function () {
  $(".advantage-carousel").owlCarousel({
    loop: true,
    margin: 40,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    navContainer: '#advantageNav',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.25,
        margin: 10,
      },
      575: {
        items: 1.5,
        margin: 14,
      },
      768: {
        items: 2.5,
        margin: 20,
      },
      992: {
        items: 3.20,
        margin: 20,
      },
      1200: {
        items: 3.35,
        margin: 30,
      },
      1365: {
        items: 3.5,
      },
      1440: {
        items: 3.75,
      },
      1600: {
        items: 4.15,
      },
      1920: {
        items: 4.5
      },
      2560: {
        items: 5.5,
      }
    }
  });
});
// --< ENDS || Owl Carousel For Advantages >-- //

// --< BEGIN || Owl Carousel For Feedbacks >-- //
$(document).ready(function () {
  $(".feedback-carousel").owlCarousel({
    loop: true,
    margin: 40,
    center: true,
    dots: false,
    nav: true,
    autoplay: true,
    navContainer: '#feedbackNav',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1.15,
        margin: 10,
      },
      575: {
        items: 1.5,
        margin: 14,
      },
      768: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 2.5,
        margin: 30,
      },
      1200: {
        items: 3.25,
      },
      1600: {
        items: 3.5,
      },
      2560: {
        items: 4.5,
      }
    }
  });
});
// --< ENDS || Owl Carousel For Feedbacks >-- //