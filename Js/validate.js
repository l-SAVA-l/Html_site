document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;

      const inputs = form.querySelectorAll("input[required]");

      inputs.forEach((input) => {
        const value = input.value.trim();
        const type = input.type;

        // Удаляем прошлые ошибки
        input.classList.remove("is-invalid");
        const errorMsg = input.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains("input-error")) {
          errorMsg.remove();
        }

        // Проверка на пустоту
        if (!value) {
          showError(input, "Это поле обязательно");
          isValid = false;
          return;
        }

        // Проверка телефона
        if (type === "tel") {
          const phonePattern = /^\+?\d{10,15}$/;
          if (!phonePattern.test(value)) {
            showError(input, "В поле телефона должны быть только цифры (10–15 знаков)");
            isValid = false;
          }
        }
      });

      if (isValid) {
        form.submit();
      }
    });

    // Валидация во время ввода
    const telInput = form.querySelector('input[type="tel"]');
    if (telInput) {
      telInput.addEventListener("input", function () {
        const value = telInput.value;
        const onlyDigits = /^[\d+]*$/;

        removeError(telInput);

        if (!onlyDigits.test(value)) {
          showError(telInput, "Допустимы только цифры и символ '+'");
          telInput.classList.add("is-invalid");
        } else {
          telInput.classList.remove("is-invalid");
        }
      });
    }
  });

  function showError(input, message) {
    input.classList.add("is-invalid");
    const error = document.createElement("div");
    error.className = "input-error";
    error.textContent = message;
    input.insertAdjacentElement("afterend", error);
  }

  function removeError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains("input-error")) {
      error.remove();
    }
  }
});