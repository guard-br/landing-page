document.addEventListener("scroll", function () {
  const heroContent = document.querySelector(".hero-content");
  const scrollPosition = window.pageYOffset;

  heroContent.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";

  const parallaxElements = document.querySelectorAll(".parallax");

  for (const element of parallaxElements) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
      const elementOffsetTop = element.offsetTop;
      const yPos = (scrollPosition - elementOffsetTop) * 0.1;
      element.style.transform = "translateY(" + yPos + "px)";
    }
  }
});