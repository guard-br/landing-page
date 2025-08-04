if (window.location.protocol === "http:") {
  window.location.href = "https:" + window.location.href.substring(5);
}

$(document).ready(function() {
  const flipper = $('.card-flipper');
  let isFlipping = false;
  let isFront = true;

  // Click to flip the card
  flipper.on('click', function() {
    if (isFlipping) {
      return;
    }
    isFlipping = true;

    if (isFront) {
      flipper.css('transform', 'rotateY(180deg)');
    } else {
      flipper.css('transform', 'rotateY(0deg)');
    }
    
    isFront = !isFront;

    setTimeout(() => {
      isFlipping = false;
    }, 800); // Match CSS transition duration
  });

  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    const target = this.hash;
    const navbarHeight = $('.navbar').outerHeight();
    const margin = 20; // Extra margin from the top

    // Reset card on anchor click
    if (!isFront) {
        flipper.css('transform', 'rotateY(0deg)');
        isFront = true;
    }

    $('html, body').animate({
      scrollTop: $(target).offset().top - navbarHeight - margin
    }, 800);
  });
});