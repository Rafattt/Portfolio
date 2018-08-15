$('.menu').addClass('animated fadeIn');
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
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
$('.project-button').click(function() {
  $('.menu').addClass('animated fadeOut');
  //$('.menu').fadeOut("fast");
  $('.projects').fadeIn(1000);
});

$('.project-button').click(function() {
  $('.menu').addClass('animated fadeOut');
  //$('.menu').fadeOut("fast");
  $('.projects').fadeIn(1000);
});

$('.trigger-contact').click(function() {
  $('.contact').toggleClass('close');
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var scene2 = document.getElementById('medfnu');
var parallaxInstance = new Parallax(scene2);







