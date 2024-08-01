const extraCarousels = [
    {
      ul: document.querySelector('.extra-carousel ul'),
      prevButton: document.querySelector('.extra-carousel .extra-prev'),
      nextButton: document.querySelector('.extra-carousel .extra-next'),
      index: 0,
      itemsToShow: 3,
      itemWidth: 100 / 3
    }
  ];
  
  function showExtraSlide(carousel, newIndex) {
    const { ul, itemsToShow, itemWidth } = carousel;
    const slides = ul.querySelectorAll('li');
    if (newIndex < 0) {
      carousel.index = slides.length - itemsToShow;
    } else if (newIndex > slides.length - itemsToShow) {
      carousel.index = 0;
    } else {
      carousel.index = newIndex;
    }
    ul.style.transform = `translateX(${-carousel.index * itemWidth}%)`;
  }
  
  extraCarousels.forEach(carousel => {
    carousel.prevButton.addEventListener('click', () => {
      showExtraSlide(carousel, carousel.index - 1);
    });
  
    carousel.nextButton.addEventListener('click', () => {
      showExtraSlide(carousel, carousel.index + 1);
    });
  });
  