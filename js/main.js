"use strict";

let faqItem = document.querySelectorAll(".faq-item");
faqItem.forEach((faqItem) => {
  faqItem.addEventListener("click", () => {
    if (faqItem.classList.contains("faq-item")) {
      faqItem.classList.toggle("faq-item__active");
    }
  });
});
