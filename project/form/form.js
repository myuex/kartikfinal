const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      validateInput(nameInput, nameInput.value.length >= 3, "Name must be at least 3 characters.");
      validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value), "Email is not valid.");
      validateInput(passwordInput, passwordInput.value.length >= 6, "Password must be at least 6 characters.");
      validateInput(confirmInput, confirmInput.value === passwordInput.value, "Passwords do not match.");

      if (document.querySelectorAll('.form-group.error').length === 0) {
        alert("Form submitted successfully!");
      }
    });

    function validateInput(input, condition, message) {
      const formGroup = input.parentElement;
      const span = formGroup.querySelector('span');

      if (condition) {
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
        span.textContent = "Looks good!";
      } else {
        formGroup.classList.remove('success');
        formGroup.classList.add('error');
        span.textContent = message;
      }
    }