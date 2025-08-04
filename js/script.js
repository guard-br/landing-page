$(document).ready(function() {
  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    const target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });
});
