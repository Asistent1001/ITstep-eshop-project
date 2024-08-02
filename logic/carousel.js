document.addEventListener('DOMContentLoaded', function () {
  // Находим все карусели на странице
  const carousels = document.querySelectorAll('.our-projects, .our-events, .butchery-our-projects, .butchery-our-events');

  carousels.forEach(carousel => {
    const carouselBox = carousel.querySelector('.main-carousel-box');
    const items = carouselBox.querySelectorAll('.main-carousel-item');
    const prevButton = carousel.querySelector('.arrow-left');
    const nextButton = carousel.querySelector('.arrow-right');

    let index = 0;

    function updateCarousel() {
      const itemWidth = items[0].offsetWidth;
      carouselBox.style.transform = `translateX(-${itemWidth * index}px)`;
    }

    prevButton.addEventListener('click', function () {
      if (index > 0) {
        index--;
      } else {
        index = items.length - 1;
      }
      updateCarousel();
    });

    nextButton.addEventListener('click', function () {
      if (index < items.length - 1) {
        index++;
      } else {
        index = 0;
      }
      updateCarousel();
    });

    window.addEventListener('resize', function () {
      updateCarousel();
    });

    updateCarousel(); // Initial call
  });
});
