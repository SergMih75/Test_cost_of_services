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

const serviceMenu = document.querySelectorAll(".service-page-btn-item");
const categoryMenu = document.querySelectorAll(".menu-item");
const contentTitle = document.querySelectorAll(".product-block-title");
const contentTitleStart = document.querySelector(".product-block-title__start");
const productMenu = document.querySelector(".product-block-nav");
const menuSell = document.querySelector(".product-block-menu-sell");
const menuBuy = document.querySelector(".product-block-menu-buy");
const productMenuStart = document.querySelector(".product-block-nav__start");
const offersBlock = document.querySelectorAll(".offers-small-item-block");
const offersSection = document.querySelector(".offers-block");
const offersItem = document.querySelectorAll(".offers-item");
const itemStart = document.querySelectorAll(".offers-item__start");
const blockThree = document.querySelector(".offers-block__three");
const blockFour = document.querySelector(".offers-block__four");
const feedbackQuestion = document.querySelector(".feedback-questions");
const feeddbackBlosk = document.querySelector(".feedback-block");
let screenWidth = window.screen.width;

serviceMenu.forEach(function (elem) {
  elem.addEventListener("click", serviceBtn);
});

categoryMenu.forEach(function (elem) {
  elem.addEventListener("click", categoryBtn);
});

function serviceBtn() {
  serviceMenu.forEach(function (elem) {
    elem.classList.remove("service-page-btn-item__active");
  });
  this.classList.add("service-page-btn-item__active");
  let serviceAtrib = this.getAttribute("data-tab");
  activeContent(serviceAtrib);
}

function categoryBtn() {
  categoryMenu.forEach(function (elem) {
    elem.classList.remove("menu-item__active");
  });
  this.classList.add("menu-item__active");
  let categoryAtrib = this.getAttribute("data-tab");
  buy_sellContent(categoryAtrib);
}

function activeContent(serviceAtrib) {
  contentTitle.forEach(function (item) {
    if (item.classList.contains(serviceAtrib)) {
      item.classList.add("product-block-title__active");
      if (item.classList.contains("sell")) {
        productMenuStart.style.display = "none";
        productMenu.style.display = "flex";
        menuSell.style.display = "flex";
        menuBuy.style.display = "none";
        offersSection.style.justifyContent = "center";
        offersSection.style.marginLeft = -10 + "px";
        offersItem.forEach((offersItem) => {
          offersItem.style.marginLeft = 10 + "px";
        });

        offersItem.forEach((offersItem) => {
          if (offersItem.classList.contains("sell-zero")) {
            offersItem.style.display = "block";
          } else {
            offersItem.style.display = "none";
          }
        });
        return;
      } else {
        productMenu.style.display = "none";
      }
      if (item.classList.contains("buy")) {
        productMenuStart.style.display = "none";
        productMenu.style.display = "flex";
        menuBuy.style.display = "flex";
        menuSell.style.display = "none";
        offersSection.style.justifyContent = "center";
        offersSection.style.marginLeft = -10 + "px";
        offersItem.forEach((offersItem) => {
          offersItem.style.marginLeft = 10 + "px";
        });

        offersItem.forEach((offersItem) => {
          if (offersItem.classList.contains("buy-zero")) {
            offersItem.style.display = "block";
          } else {
            offersItem.style.display = "none";
          }
        });
        return;
      } else {
        productMenu.style.display = "none";
      }
      if (item.classList.contains("rental")) {
        offersBlock.forEach((offersBlock) => {
          offersBlock.style.display = "none";

          if (screenWidth < 395) {
            blockThree.style.display = "none";
            blockFour.style.display = "flex";
          }

          feedbackQuestion.style.display = "none";

          feeddbackBlosk.style.justifyContent = "center";
        });
        offersItem.forEach((offersItem) => {
          offersItem.style.display = "none";
        });
        offersItem.forEach((offersItem) => {
          if (offersItem.classList.contains("rental")) {
            offersItem.style.display = "block";
          }
        });
        offersSection.style.justifyContent = "center";
      }
      if (item.classList.contains("rent")) {
        offersBlock.forEach((offersBlock) => {
          offersBlock.style.display = "none";

          if (screenWidth < 395) {
            blockThree.style.display = "none";
            blockFour.style.display = "flex";
          }

          feedbackQuestion.style.display = "none";

          feeddbackBlosk.style.justifyContent = "center";
        });
        offersItem.forEach((offersItem) => {
          offersItem.style.display = "none";
        });
        offersItem.forEach((offersItem) => {
          if (offersItem.classList.contains("rent")) {
            offersItem.style.display = "block";
          }
        });
        offersSection.style.justifyContent = "center";
      }
      if (item.classList.contains("mortgage")) {
        offersBlock.forEach((offersBlock) => {
          offersBlock.style.display = "none";

          if (screenWidth < 395) {
            blockThree.style.display = "none";
            blockFour.style.display = "flex";
          }

          feedbackQuestion.style.display = "none";

          feeddbackBlosk.style.justifyContent = "center";
        });
        offersItem.forEach((offersItem) => {
          offersItem.style.display = "none";
        });
        offersItem.forEach((offersItem) => {
          if (offersItem.classList.contains("mortgage")) {
            offersItem.style.display = "block";
          }
        });
        offersSection.style.justifyContent = "center";
      }
    } else {
      item.classList.remove("product-block-title__active");
      contentTitleStart.style.display = "none";
    }
  });
}

function buy_sellContent(categoryAtrib) {
  offersItem.forEach((offersItem) => {
    offersItem.style.display = "none";
    offersBlock.forEach((offersBlock) => {
      offersBlock.style.display = "none";

      if (screenWidth < 395) {
        blockThree.style.display = "none";
        blockFour.style.display = "flex";
      }

      feedbackQuestion.style.display = "none";

      feeddbackBlosk.style.justifyContent = "center";
    });

    if (offersItem.classList.contains(categoryAtrib)) {
      offersItem.style.display = "block";
    }
    if (categoryAtrib == "sell-commercial") {
      offersSection.style.justifyContent = "center";
    }
    if (categoryAtrib == "buy-commercial") {
      offersSection.style.justifyContent = "center";
    }
  });
}
