document.addEventListener("scroll", function () {
  const heroContent = document.querySelector(".hero-content");
  const ctaContent = document.querySelector(".cta-content");
  const ctaSection = document.querySelector(".cta-section");
  const scrollPosition = window.pageYOffset;
  const isMobile = window.innerWidth <= 768;

  // Parallax for hero content
  heroContent.style.transform = "translateY(" + scrollPosition * 0.3 + "px)";

  if (ctaSection) {
    const elementTop = ctaSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight && elementTop > -ctaSection.offsetHeight) {
      // Parallax for cta content
      if (ctaContent) {
        const yPos = (scrollPosition - ctaSection.offsetTop) * 0.3;
        ctaContent.style.transform = "translateY(" + yPos + "px)";
      }

      // Parallax for CTA on mobile
      if (isMobile) {
        const yPos = -((scrollPosition - ctaSection.offsetTop) * 0.1);
        ctaSection.style.backgroundPositionY = yPos + "px";
      }
    }
  }
});
