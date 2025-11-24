document.addEventListener("scroll", function () {
  const heroContent = document.querySelector(".hero-content");
  const scrollPosition = window.pageYOffset;
  const isMobile = window.innerWidth <= 768;

  // Parallax for hero content
  heroContent.style.transform = "translateY(" + scrollPosition * 0.3 + "px)";

  // Parallax for CTA on mobile
  if (isMobile) {
    const ctaSection = document.querySelector(".cta-section");
    if (ctaSection) {
        const elementTop = ctaSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight && elementTop > -ctaSection.offsetHeight) {
            const yPos = -((scrollPosition - ctaSection.offsetTop) * 0.1);
            ctaSection.style.backgroundPositionY = yPos + "px";
        }
    }
  }
});
