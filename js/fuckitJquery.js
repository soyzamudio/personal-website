$(document).ready(function() {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('.navbar').fadeIn({duration: 800});
    } else {
      $('.navbar').fadeOut({duration: 800});
    }
  });

  $(".intro-scroll").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#intro").offset().top}, 'slow');
  });

  $(".portfolio-scroll").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#portfolio").offset().top}, 'slow');
  });

  $(".experience-scroll").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#experience").offset().top}, 'slow');
  });

  $(".blog-scroll").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $("#blog").offset().top}, 'slow');
  });

  $('#intro').parallax({imageSrc: './img/bg.jpg', speed: 0.4, position: '-50', bleed: 30});
  $('.intro-items').addClass('animated fadeIn');
  $(".navbar").hide();

});
