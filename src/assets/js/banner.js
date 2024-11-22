const buttons = document.querySelectorAll("[data-carousel-button]");
let autoPlayInterval;

function clickNext() {
  const nextButton = Array.from(buttons).find(
    (button) => button.dataset.carouselButton === "next",
  );
  if (nextButton) {
    nextButton.click();
  }
}

function startAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }

  autoPlayInterval = setInterval(clickNext, 4000);
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    stopAutoPlay();
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    delete activeSlide.dataset.active;
    slides.children[newIndex].dataset.active = true;

    startAutoPlay();
  });
});

startAutoPlay();
