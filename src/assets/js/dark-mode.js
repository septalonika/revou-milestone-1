const toggleDark = document.querySelector("#toggleDark");
const html = document.querySelector("html");
const isDarkMode = html.classList.contains("dark");

if (localStorage.getItem("isDarkMode") === "dark") {
  toggleDark.click();
  html.classList.add("dark");
}

toggleDark.addEventListener("click", () => {
  if (toggleDark.checked) {
    localStorage.setItem("isDarkMode", "dark");
    html.classList.add("dark");
  } else {
    localStorage.setItem("isDarkMode", "");
    html.classList.remove("dark");
  }
});
