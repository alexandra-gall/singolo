// Header navigation
const MENU = document.getElementById("nav");

MENU.addEventListener("click", event => {
  MENU.querySelectorAll("li").forEach(el =>
    el.querySelector("a").classList.remove("active")
  );
  event.target.classList.add("active");
});

// Turn off and turn on iphone
const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");

vertical.addEventListener("click", event => {
  vertical.querySelectorAll("figure").forEach(el => {
    el.classList.contains("display-none")
      ? el.classList.remove("display-none")
      : el.classList.add("display-none");
  });
});

horizontal.addEventListener("click", event => {
  horizontal.querySelectorAll("figure").forEach(el => {
    el.classList.contains("display-none")
      ? el.classList.remove("display-none")
      : el.classList.add("display-none");
  });
});

// Slider
const SLIDER = document.querySelector(".slider");
const CONTROLS = document.querySelectorAll(".slider-obj");

CONTROLS.forEach(item => {
  item.addEventListener("click", event => {
    SLIDER.querySelectorAll("div").forEach(el => {
      el.classList.contains("display-none")
        ? el.classList.remove("display-none")
        : el.classList.add("display-none");
    });
  });
});
