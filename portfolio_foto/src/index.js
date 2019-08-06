require('./index.scss');

$(document).ready(function($) {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 110) {
      $('#menu').addClass('nav-white');
      $('a').css('color', '#262525');
    } else {
      $('#menu').removeClass('nav-white');
      $('a').css('color', '#ffffff');
    }
  });


});
