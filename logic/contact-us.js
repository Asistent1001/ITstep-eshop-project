function updateButtonText() {
  const buttons = document.querySelectorAll('.modal-button');
  const screenWidth = window.innerWidth;

  buttons.forEach(button => {
    if (screenWidth < 480) {
      button.innerHTML = '<i class="fa-solid fa-phone-volume" style="color: #ffffff;"></i>';
    } else {
      button.textContent = 'Свяжитесь с нами';
    }
  });
}

window.addEventListener('load', updateButtonText);

window.addEventListener('resize', updateButtonText);
