if (window.location.protocol === "http:") {
  window.location.href = "https" + window.location.href.substring(5);
}

$(document).ready(function() {
  const flipper = $('.card-flipper');
  let isFlipping = false;
  let isFront = true;
  let autoFlipInterval;
  let autoFlipCount = 0;
  const maxAutoFlips = Infinity; // Number of automatic flips

  // Function to flip the card
  function flipCard() {
    if (isFlipping) return;
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
  }

  // Click to flip the card
  flipper.on('click', function() {
    flipCard();
    // Optionally stop auto flipping after user interacts
    clearInterval(autoFlipInterval);
  });

  // Automatic flipping
  function startAutoFlip() {
    autoFlipInterval = setInterval(() => {
      flipCard();
      autoFlipCount++;
      if (autoFlipCount >= maxAutoFlips * 2) { // 2 flips = 1 full cycle
        clearInterval(autoFlipInterval);
      }
    }, 1800); // Wait for flip animation + pause
  }

  startAutoFlip();

  // Smooth scrolling for anchor links
  $('a[href^="#"]').on('click', function(event) {
    const target = this.hash;

    if (target === '#') {
      return;
    }

    event.preventDefault();
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

  const hamburgerMenu = $('.hamburger-menu');
  const navLinks = $('.nav-links');

  hamburgerMenu.on('click', function() {
    hamburgerMenu.toggleClass('active');
    navLinks.toggleClass('active');
  });

  $(window).on('scroll', function() {
    const scrollIndicator = $('.scroll-indicator');
    if (!scrollIndicator.length) return;

    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const docHeight = $(document).height();

    if (scrollTop + windowHeight >= docHeight - 5) {
      scrollIndicator.fadeOut();
    } else {
      scrollIndicator.fadeIn();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (!scrollIndicator) return;

  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      scrollIndicator.style.display = 'none';
    } else {
      scrollIndicator.style.display = 'flex';
    }
  });
});
