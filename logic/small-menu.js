document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.left-side-navigation-open-button');
  const menu = document.querySelector('.left-side-navigation-items');

  // Функция для обновления стиля элемента
  function updateMenuDisplay() {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024) {
          // На больших экранах показываем меню
          menu.style.display = 'flex';
      } else if (menu.style.display === 'flex') {
          // Если ширина экрана меньше 1024 пикселей и меню отображается, скрываем его
          menu.style.display = 'none';
      }
  }

  // Обработчик клика для кнопки
  button.addEventListener('click', function() {
      if (window.innerWidth < 1024) {
          menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
      }
  });

  // Слушатель изменения размера экрана
  window.addEventListener('resize', updateMenuDisplay);

  // Инициализация состояния меню при загрузке страницы
  updateMenuDisplay();
});