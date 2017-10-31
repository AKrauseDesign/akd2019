$(document).ready(function() {
  $('.menu').click(function() {
    $(this).toggleClass('menu-open');
    $('.logo').toggleClass('logo-2');
    $('.main-nav-menu').toggleClass('main-nav-menu-open');
  });
});
