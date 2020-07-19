  
  // add and remove the class from the navbar in order to make it more legible during scrolling
  $(function () {
    $(document).scroll(function () {
        let $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

  // scroll down to a specific ID
  $("#about-me-link").click(function(e) {
    e.preventDefault();	
    let position = $($(this).attr("href")).offset().top;
    $("body, html").animate({
      scrollTop: position
    }, 500 );
  });

  $("#portfolio-link").click(function(e) {
    e.preventDefault();	
    let position = $($(this).attr("href")).offset().top;
    $("body, html").animate({
      scrollTop: position
    }, 500 );
  });

  $("#contact-link").click(function(e) {
    e.preventDefault();	
    let position = $($(this).attr("href")).offset().top;
    $("body, html").animate({
      scrollTop: position 
    }, 500);
  });
