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
      scrollTop: (target.offset().top) - ($('nav').height() + 43)
    }, 1000);
  }
});

$(document).ready(function() {
  if ($(document).scrollTop() > 280) {
    $('nav').addClass('changeColor')
  }
  $(document).scroll(function() {
    if ($(document).scrollTop() > 280) {
      $('nav').addClass('changeColor')
    }
    if ($(document).scrollTop() < 280) {
      $('nav').removeClass('changeColor')
    }
  });
});
