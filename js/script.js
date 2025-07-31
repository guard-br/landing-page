document.addEventListener("DOMContentLoaded", () => {
  const scrollyContainer = document.querySelector(".scrolly-container");
  const walletActor = document.getElementById("wallet-actor");
  const golpixActor = document.getElementById("golpix-actor");
  const triggerSteps = document.querySelectorAll(".trigger-step");

  let lastScrollY = window.scrollY;
  let animationTimeout;
  let currentStep = "";

  function handleStepEnter(step, direction) {
    if (step === currentStep) return;

    if (currentStep) {
      scrollyContainer.classList.remove(`step-${currentStep}`);
    }
    scrollyContainer.classList.add(`step-${step}`);
    currentStep = step;

    clearTimeout(animationTimeout);
    golpixActor.classList.remove("shake");

    walletActor.src = "images/front.png";
    golpixActor.src = "images/golpix-evil.png";

    if (step === "1") {
      walletActor.src = "images/wallet-fear-1.png";
      if (direction === "down") {
        animationTimeout = setTimeout(() => {
          golpixActor.classList.add("shake");
          setTimeout(() => {
            golpixActor.src = "images/golpix-rich.png";
            golpixActor.classList.remove("shake");
          }, 820);
        }, 1300);
      } else {
        golpixActor.src = "images/golpix-rich.png";
      }
    } else if (step === "2") {
      walletActor.src = "images/front.png";
      if (direction === "down") {
        animationTimeout = setTimeout(() => {
          golpixActor.src = "images/golpix-sad.png";
          golpixActor.classList.add("shake");
          setTimeout(() => {
            golpixActor.src = "images/golpix-defeated.png";
          }, 820);
        }, 1300);
      } else {
        golpixActor.src = "images/golpix-defeated.png";
      }
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const step = entry.target.dataset.step;
        if (entry.isIntersecting) {
          const direction = window.scrollY > lastScrollY ? "down" : "up";
          entry.target.classList.add("is-active");
          handleStepEnter(step, direction);
        } else {
          entry.target.classList.remove("is-active");
        }
      });
      lastScrollY = window.scrollY <= 0 ? 0 : window.scrollY;
    },
    {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    }
  );

  triggerSteps.forEach((step) => {
    observer.observe(step);
  });
});
