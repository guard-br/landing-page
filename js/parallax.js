document.addEventListener("scroll", function () {
  const heroContent = document.querySelector(".hero-content");
  const scrollPosition = window.pageYOffset;

  heroContent.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});
