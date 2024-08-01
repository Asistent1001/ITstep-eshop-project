const uniqueCarousels = [
    {
      ul: document.querySelector('.unique-carousel ul'),
      prevButton: document.querySelector('.unique-carousel .unique-prev'),
      nextButton: document.querySelector('.unique-carousel .unique-next'),
      index: 0,
      itemsToShow: 3,
      itemWidth: 100 / 3
    }
  ];
  
  function showSlide(carousel, newIndex) {
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
  
  uniqueCarousels.forEach(carousel => {
    carousel.prevButton.addEventListener('click', () => {
      showSlide(carousel, carousel.index - 1);
    });
  
    carousel.nextButton.addEventListener('click', () => {
      showSlide(carousel, carousel.index + 1);
    });
  });
  