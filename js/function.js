var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 60,
  centeredSlides : true,
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  autoplay: {
    delay: 0,
  },
  speed: 3000,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    990: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
})

$('.collapse').on('show.bs.collapse', function () {
  $('.collapse.in').collapse('hide');
});

AOS.init({
  offset: 120,
  delay: 0,
  duration: 1500,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

AOS.init();

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position - 50}, speed, "swing");
    return false;
  });
});

$(function(){
  $('a[href^="#features"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position - 50}, speed, "swing");
    return false;
  });
});

$(function(){
  $('a[href^="#price"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position - 50}, speed, "swing");
    return false;
  });
});

$(function(){
  $('a[href^="#contact"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position - 50}, speed, "swing");
    return false;
  });
});


var position_contact = $('.contact').offset().top;

$('.btn__contact').click(function(){
  $("html,body").animate({
      scrollTop : position_contact - 50
  }, {
      queue : false
  });
});

$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 767;
  if (winW <= devW) {
    //767px以下の時の処理
    var position_contact = $('.contact').offset().top;

    $('.btn__contact-2').click(function(){
      $("html,body").animate({
          scrollTop : position_contact
      }, {
          queue : false
      });
    });

  } else {
    //768pxより大きい時の処理
    var position_contact = $('.contact').offset().top;

    $('.btn__contact-2').click(function(){
      $("html,body").animate({
          scrollTop : position_contact - 50
      }, {
          queue : false
      });
    });

  }
});


