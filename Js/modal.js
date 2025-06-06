// modal.js
document.addEventListener("DOMContentLoaded", function () {
  //
  // === 1. Первая форма (звонок) ===
  //
  const callModal = document.getElementById("callModal");
  const callOverlay = callModal.querySelector(".modal-overlay");
  const callClose = callModal.querySelector(".modal-close");
  const callOpenButton = document.querySelector(".button-2 .custom-btn");

  if (callOpenButton && callModal) {
    callOpenButton.addEventListener("click", function () {
      callModal.classList.add("active");
    });
  }

  callClose.addEventListener("click", function () {
    callModal.classList.remove("active");
  });

  callOverlay.addEventListener("click", function () {
    callModal.classList.remove("active");
  });


  //
  // === 2. Вторая форма (калькулятор) ===
  //
  const calcModal = document.getElementById("calcModal");
  const calcOverlay = calcModal.querySelector(".modal-overlay");
  const calcClose = calcModal.querySelector(".modal-close");
  const calcOpenButton = document.querySelector(".button-1 .calculator-btn");

  if (calcOpenButton && calcModal) {
    calcOpenButton.addEventListener("click", function () {
      calcModal.classList.add("active");
    });
  }

  calcClose.addEventListener("click", function () {
    calcModal.classList.remove("active");
  });

  calcOverlay.addEventListener("click", function () {
    calcModal.classList.remove("active");
  });
});
