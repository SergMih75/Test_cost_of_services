"use strict";

let faqItem = document.querySelectorAll(".faq-item");
faqItem.forEach((faqItem) => {
  faqItem.addEventListener("click", () => {
    if (faqItem.classList.contains("faq-item")) {
      faqItem.classList.toggle("faq-item__active");
    }
  });
});

const sliderBtn = document.querySelectorAll(".slider-btn");
let sliderLine = document.querySelector(".inform-block-line");
let move = 0;

sliderBtn.forEach((sliderBtn) => {
  sliderBtn.addEventListener("click", () => {
    if (sliderBtn.classList.contains("slider-btn__left")) {
      move = move + 332;
      if (move > 996) {
        move = 0;
      }
      sliderLine.style.left = -move + "px";
    } else {
      if (move == 0) {
        move = 996;
        sliderLine.style.left = -move + "px";
      } else {
        move = move - 332;
        sliderLine.style.left = -move + "px";
      }
    }
  });
});
