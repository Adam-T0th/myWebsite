$(document).ready(function() {
  $("#nav-about-me").click(function() {
    $('html, body').animate({
        scrollTop: $("#profile-picture").offset().top
    }, 2000);
  });

  $("#nav-portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
  });

  $("#nav-footer").click(function() {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 2000);
  });

  // alternative ... not working
  // $('#nav-about-me').click = function (){
  //   $(document).scrollTo('#top');
  // }
  // $('#nav-portfolio').click = function (){
  //   $(document).scrollTo('#portfolio');
  // }
  //
  // $('#nav-footer').click = function (){
  //   $(document).scrollTo('#footer');
  // }
});
