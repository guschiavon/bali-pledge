
$(document).ready(function(){
 console.log('jQuery loaded')

  $('.burger').click(function(){
    $(this).toggleClass('open');

    $('#mobile-menu').toggleClass('hide');

  console.log('Burger clicked')
  });

  $('.mobile-menu a').click(function(){
    $('#mobile-menu').toggleClass('hide');

    $('.burger').toggleClass('open');

  });


});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplaySpeed: 800,
    autoplayTimeout: 7000,
    animateOut: 'fadeOut',
    autoplay: true,
    margin: 10,
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
});
