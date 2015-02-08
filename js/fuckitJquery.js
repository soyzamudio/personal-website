$(document).ready(function() {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('.navbar').fadeIn({duration: 800});
    } else {
      $('.navbar').fadeOut({duration: 800});
    }
  });
  $('#intro').parallax({imageSrc: './img/bg.jpg', speed: 0.4, position: '-50', bleed: 30});
  $('.intro-items').addClass('animated fadeIn');
  $(".navbar").hide();

});
