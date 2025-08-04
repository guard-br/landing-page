if (window.location.protocol === "http:") {
  window.location.href = "https:" + window.location.href.substring(5);
}

$(document).ready(function() {
  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    const target = this.hash;
    const navbarHeight = $('.navbar').outerHeight();
    const margin = 20; // Extra margin from the top

    $('html, body').animate({
      scrollTop: $(target).offset().top - navbarHeight - margin
    }, 800);
  });
});