// Prevent Default Link Behavior
$('a').on('click', function(e) {
  return false;
})

$('.menu-side-btn').on('mouseover', () => {
  if (window.innerWidth <= '950') {
    $('.side-menu').css('transform', 'translateX(0px)')
  }
})

$('.side-menu').on('mouseleave', () => {
  if (window.innerWidth <= '950') {
    $('.side-menu').css('transform', 'translateX(-200px)')
  }
})

$(window).on('resize', () => {
  if (window.innerWidth >= '950') {
    $('.side-menu').css('transform', 'translateX(0px)')
  } else {
    $('.side-menu').css('transform', 'translateX(-200px)')
  }
})
