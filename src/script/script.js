$('#menu').addClass('animated fadeIn delay-3s');
$('#title-sub').addClass('animated fadeIn delay-1s');
$('#title-name').addClass('animated fadeIn delay-2s');
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  autoplayTimeout: 8000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
    let a = [2, 1, 3, 5, 3, 2];




$('.project-button').click(function() {
  $('#menu').removeClass('fadeIn delay-3s').addClass('animated fadeOut');
  $('.projects').fadeIn(1000);
  $('.owl-carousel').addClass('animated fadeIn delay-1s');
  
  //$('.menu').fadeOut("fast");
  
});

$('.contact-button').click(function() {
    $('#menu').removeClass('fadeIn delay-3s').addClass('animated fadeOut');
    $('.contact').fadeIn(1000);
});



$('.trigger-contact').click(function() {
  $('.contact').toggleClass('close');
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var scene2 = document.getElementById('medfnu');
var parallaxInstance = new Parallax(scene2);
});