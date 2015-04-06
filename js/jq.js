$(document).ready(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $('.navbar').css('background', '#fff');
      $('.navbar-default .navbar-nav>li>a').css('color', '#222');
      $('.navbar').css('border-bottom', '1px solid #ddd');
    } else {
      $('.navbar').css('background', 'transparent');
      $('.navbar').css('border', 'none');
      $('.navbar-default .navbar-nav>li>a').css('color', '#fff');
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

  $(".dismiss").on('click', function(e) {
    $('.alert').addClass('hidden');
  })

  $(".form").on('click', function(e) {
    e.preventDefault()
    $('#myModal').modal();
  });

  $(".sendForm").on('click', function() {
    var email = {key: "DV6iDBf0ZF_bcscqfJalXw",
                 message: {from_email: "jose@josezamudio.me",
                           to: [{email: $('#inputEmail').val(),
                                 type: "to" }],
                           autotext: "true",
                           html: '<div>Name: ' + $('#inputName').val() + '</div><div>Website: ' + $('#inputWebsite').val() + '</div><div>Message: ' + $('#inputMessage').val() + '</div>'}
                };
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: email,
      success: function(msg){
        $('#inputName').val('');
        $('#inputEmail').val('');
        $('#inputWebsite').val('');
        $('#inputMessage').val('');
        $('.alert').removeClass('hidden');
        $('.alert').addClass('alert-success');
        $('.alert').html('<strong>Success</strong> Email sent!');
      }, error: function(XMLHttpRequest, textStatus, errorThrown) {
        $('.alert').removeClass('hidden');
        $('.alert').addClass('alert-danger');
        $('.alert').html('<strong>Success</strong> Email sent!');
      }
    });
  });

  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 8) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
    document.body.appendChild(css);
  };
});
