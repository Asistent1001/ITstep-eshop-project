const ul = document.querySelector('.carousel-2 ul');
    const prevButton = document.querySelector('.carousel-2 .prev');
    const nextButton = document.querySelector('.carousel-2 .next');
    
    let index = 0;
    const itemsToShow = 3; // Количество видимых элементов
    const itemWidth = 100 / itemsToShow;

    function showSlide(newIndex) {
        const slides = document.querySelectorAll('.carousel-2 li');
        if (newIndex < 0) {
            index = slides.length - itemsToShow;
        } else if (newIndex > slides.length - itemsToShow) {
            index = 0;
        } else {
            index = newIndex;
        }
        ul.style.transform = `translateX(${-index * itemWidth}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });