$(document).ready(function() {

  $(".navbar").hide();
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

  $(".dismiss").on('click', function(e) {
    $('.alert').addClass('hidden');
  })

  $(".form").on('click', function(e) {
    e.preventDefault()
    $('#myModal').modal();
  });

  $(".sendForm").on('click', function() {
    var email = {key: "DV6iDBf0ZF_bcscqfJalXw",
                 message: {from_email: $('#inputEmail').val(),
                           to: [{email: "jose@josezamudio.me",
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

//  $(".sendForm").on('click', function(e) {
//    $('#inputEmail').val,
////    $.ajax({
////      type: “POST”,
////      url: ,
////      data:  })
////    .done(function(response) {
////      console.log(response); // if you're into that sorta thing
////    });
////
////    $.post("https://mandrillapp.com/api/1.0/messages/send.json'", function(data, status){
////      alert("Data: " + data + "\nStatus: " + status);
////    });
//  })

});


