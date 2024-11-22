const burgerBtn = document.getElementsByClassName("burger-btn")[0];
const burgerMenu = document.getElementsByClassName("burger-menu")[0];

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");

  if (burgerMenu.classList.contains("active")) {
    document.body.classList.add("noscroll");
  } else {
    document.body.classList.remove("noscroll");
  }
});

burgerMenu.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");

  if (burgerMenu.classList.contains("active")) {
    document.body.classList.add("noscroll");
  } else {
    document.body.classList.remove("noscroll");
  }

  handleHashChange();
});

window.addEventListener("hashchange", handleHashChange);

document.addEventListener("DOMContentLoaded", () => {
  handleHashChange();
});

function handleHashChange() {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition - 80,
        behavior: "smooth",
      });
    }
  }
}
