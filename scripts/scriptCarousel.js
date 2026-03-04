// Получаем элементы
const slidesContainer = document.querySelector('.slides');  // Находит DOM-элемент с классом .slides, в котором находятся
                                                            // все слайды. Этот контейнер будет перемещаться по горизонтали
                                                            // для отображения нужного слайда.
const slides = document.querySelectorAll('.slide');   // Выбирает все элементы с классом .slide внутри документа.
                                                      // Это массив всех слайдов.
const totalSlides = slides.length;  // Подсчитывает число всех элементов .slide. Это важно для определения границ и
                                    // зацикливания.

const prevBtn = document.querySelector('.prev'); // Находит кнопку для перехода к предыдущему слайду по классу .prev
const nextBtn = document.querySelector('.next'); // Находит кнопку для перехода к следующему слайду по классу .next

let currentIndex = 1; // Устанавливает текущий индекс на 1, предполагая, что первый элемент (индекс 0) — это дубликат
                     // последнего слайда, а реальный первый — это индекс 1. Это нужно для бесшовной прокрутки.

// Функция для перемещения
function moveToSlide(index) {                                     // Функция для перемещения к определенному слайду по индексу
  slidesContainer.style.transition='transform 0.5s ease-in-out';  // Устанавливаем плавный переход
  slidesContainer.style.transform=`translateX(-${index *100}%)`;  // Смещение влево на index * 100% ширины контейнера.
}

// Обработка кнопок
prevBtn.addEventListener('click', () => {    // При клике вызывается функция moveToSlide,
   moveToSlide(currentIndex -1);             // которая перемещает на предыдущий слайд (на один индекс меньше).
});
nextBtn.addEventListener('click', () => {    // При клике вызывается функция moveToSlide,
   moveToSlide(currentIndex +1);             // которая перемещает на следующий слайд (на один индекс больше).
});

// Автоматическая прокрутка
setInterval(() => {                          // Запускает таймер, который каждые 7000 миллисекунд (7 секунд)
   moveToSlide(currentIndex +1);             // вызывает функцию перемещения к следующему слайду.
}, 7000);

// Обработка окончания перехода для зацикливания
slidesContainer.addEventListener('transitionend', () => {      // Проверяет текущий индекс.
   if (currentIndex >= totalSlides -1) {                       // Если достигли дублированного первого элемента в конце
                                                               // (currentIndex >= totalSlides -1), то мгновенно переносим
                                                               // на реальный первый (currentIndex=1)
       slidesContainer.style.transition='none';                // Отключаем плавность для мгновенного перемещения без анимации.
       currentIndex = 1;                                       // Возвращаемся к реальному первому элементу.
       slidesContainer.style.transform=`translateX(-${currentIndex *100}%)`;
   }                                                           // Перемещаем без анимации в позицию первого реального слайда.
   if (currentIndex <=0) {                                     // Если достигли дублированного последнего элемента в начале
                                                               // (currentIndex <=0), то мгновенно переносим на последний
                                                               // реальный (totalSlides -2).
       slidesContainer.style.transition='none';                // Отключаем плавность для мгновенного перемещения без анимации.
       currentIndex=totalSlides -2;                            // Возвращаемся к реальному последнему элементу.
       slidesContainer.style.transform=`translateX(-${currentIndex *100}%)`;
   }                                                           // Перемещаем без анимации в позицию последнего реального слайда.
});

// Обновляем текущий индекс после анимации
function updateCurrentIndex() {                                // функция для обновления переменной currentIndex
                                                               // в соответствии с текущим положением контейнера слайдов.
   // Получаем текущий трансформ
   const style = window.getComputedStyle(slidesContainer);     // Для получения всех вычисленных CSS-стилей элемента slidesContainer.
   const matrix = new WebKitCSSMatrix(style.transform);        // Создает новый объект WebKitCSSMatrix, передавая ему строку
                                                               // трансформации из стилей.
   currentIndex = Math.round(matrix.m41 / -100);               // matrix.m41 — это значение смещения по оси X (translateX).
}                                                              // Оно показывает, насколько контейнер смещен влево или вправо.
                                                               // Делит это значение на -100, потому что каждый слайд смещается
                                                               // на 100% ширины контейнера.

// Обновляем индекс при каждом движении
function moveToSlide(index) {
   currentIndex = index;                                          // Устанавливает глобальную или внешнюю переменную currentIndex
                                                                  // равной переданному значению index.
   slidesContainer.style.transition='transform 0.5s ease-in-out'; // Устанавливает плавное анимированное изменение свойства transform
                                                                  // с продолжительностью 0.5 секунд и функцией сглаживания ease-in-out.
   slidesContainer.style.transform=`translateX(-${index *100}%)`; // Смещает контейнер по оси X так, чтобы выбранный слайд оказался 
}                                                                 // в области просмотра.

// Обновление индекса после каждого перехода
slidesContainer.addEventListener('transitionend', () => {                     // обработчик срабатывает, когда завершится CSS-переход
                                                                              // (анимация) свойства transform.
   if (currentIndex >= totalSlides -1) {                                      // Если текущий индекс достиг последнего дублированого слайда
       slidesContainer.style.transition='none';                               // Отключаем плавность для мгновенного перемещения без анимации.
       currentIndex=1;                                                        // Возвращаемся к реальному первому элементу.
       slidesContainer.style.transform=`translateX(-${currentIndex *100}%)`;  // Смещает элемент по горизонтали на определенное количество процентов.
     }
   if (currentIndex <=0) {                                                    // Если текущий индекс достиг первого дублированого слайда:
       slidesContainer.style.transition='none';
       currentIndex=totalSlides -2; 
       slidesContainer.style.transform=`translateX(-${currentIndex *100}%)`; // Смещает элемент по горизонтали на определенное количество процентов.
     }
});