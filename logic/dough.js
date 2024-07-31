document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.our-equipment-navigation-item');
    
    // Устанавливаем суффиксы для кнопок 1 и 2
    const suffixes = {
        '1': '-1',
        '2': '-2'
    };

    items.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Обновляем активность для всех кнопок
            items.forEach(el => {
                el.classList.remove('active');
                const img = el.querySelector('img');
                // Добавляем суффикс -dark к изображениям, если его нет
                if (img.src.indexOf('-dark') === -1) {
                    img.src = img.src.replace('.png', '-dark.png');
                }
            });

            // Добавляем класс active к текущему элементу и обновляем изображение
            this.classList.add('active');
            const img = this.querySelector('img');
            // Убираем суффикс -dark у активного элемента
            img.src = img.src.replace('-dark.png', '.png');

            // Если кнопка 1 или 2, обновляем изображения и alt атрибуты
            if (index === 0 || index === 1) {
                const suffix = suffixes[index + 1] || '';

                document.querySelectorAll('.our-equipment-machine-list-item').forEach(machineItem => {
                    const machineImg = machineItem.querySelector('img');
                    const imgSrc = machineImg.src;

                    // Находим базовое имя файла и заменяем существующий суффикс
                    const baseName = imgSrc.replace(/-\d+\.png$/, '');
                    const newSrc = baseName + suffix + '.png';

                    // Находим текущее число в атрибуте alt и заменяем его
                    const currentAlt = machineImg.alt.match(/-\d+/);
                    const newAlt = currentAlt ? machineImg.alt.replace(currentAlt[0], suffix) : machineImg.alt;

                    machineImg.src = newSrc;
                    machineImg.alt = newAlt;
                });
            }
        });
    });
});
