function responsiveNav(x) {
    var n = document.getElementById("nav");
    x.classList.toggle("change");
    if (n.className === "top-nav") {
      n.className += " responsive";
    } else {
      n.className = "top-nav";
    }
  }
  
  $('a[href^="#"]').on('click', function(event) {
    let target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: (target.offset().top) - ($('nav').height() + 37)
      }, 1000);
    }
  });
  
  $('.info').on('click', function(e) {
    $(this).addClass('info-expand');
    $(this).children('.fa-times-circle').show();
    $(this).children('.fa-info-circle').hide();
    $(this).children('.info-text').delay(1200).fadeIn(600);
  });
  
  $('.fa-times-circle').on('click', function(e) {
    e.stopPropagation();
    $(this).parent('.info').removeClass('info-expand');
    $(this).next('.info-text').hide();
    $(this).hide();
    $(this).prev('.fa-info-circle').show();
  });
  
  $(document).ready(function() {
    document.body.style.visibility = 'visible';
    if ($(document).scrollTop() > 280) {
      $('nav').addClass('change-color')
    }
    $(document).scroll(function() {
      if ($(document).scrollTop() > 280) {
        $('nav').addClass('change-color')
      }
      if ($(document).scrollTop() < 280) {
        $('nav').removeClass('change-color')
      }
    });
  });
  