// "use strict";

const btns = document.querySelectorAll(".btns");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const overly = document.querySelector(".overlay");

// function modalShow() {
//   modal.style.opacity = "1";
//   modal.style.visibility = "visible";
// }

// function modalHidden() {
//   modal.style.opacity = "01";
//   modal.style.visibility = "hidden";
//   modal.style.transition = "all 0.4s";
// }

// function overlyShow() {
//   overly.style.opacity = "1";
//   overly.style.visibility = "visible";
// }

// function overHidden() {
//   overly.style.opacity = "0";
//   overly.style.visibility = "hidden";
// }

function modals(m, a, b, c) {
  m.style.opacity = a;
  m.style.visibility = b;
  m.style.transition = c;
}

// function overls(a, b, c) {
//   overly.style.opacity = a;
//   overly.style.visibility = b;
// }

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    modals(modal, "1", "visible", "all 0.4s");
    // overlay
    modals(overly, "1", "visible");
  });
}

close.addEventListener("click", function () {
  modals(modal, "0", "hidden", "all 0.4s");
  // overlay
  modals(overly, "0", "hidden");
});

overly.addEventListener("click", function () {
  modals(modal, "0", "hidden", "all 0.4s");
  //overly
  modals(overly, "0", "hidden");
});
