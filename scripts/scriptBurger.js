// Получаем элементы
const menuToggle = document.querySelector('.menu-toggle');  // Находим в документе первый элемент с классом menu-toggle
const navbarMenu = document.getElementById('navbarMenu');   // Находим элемент с идентификатором navbarMenu

menuToggle.addEventListener('click', () => {                // Добавляет обработчик события click к элементу menuToggle.
  // Переключаем класс show для отображения меню
  navbarMenu.classList.toggle('show');                      // Если у элемента есть класс show, он будет удалён; если его нет — добавлен.

  // Обновляем aria-expanded для доступности
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;  // Получает текущий атрибут aria-expanded у элемента
                                                                                  // menuToggle.
                                                                                  // Сравнивает его значение со строкой 'true'.
                                                                                  // Если равно 'true', переменная expanded станет true;
                                                                                  // иначе — false.
                                                                                  // В случае, если атрибут отсутствует, выражение вернёт
                                                                                  // false благодаря оператору || false.
  
  menuToggle.setAttribute('aria-expanded', String(!expanded));  // Инвертирует логическое значение expanded с помощью оператора !.
                                                                // Преобразует результат обратно в строку с помощью String().
                                                                // Устанавливает этот новый статус в атрибут aria-expanded у элемента menuToggle.
                                                                // Если было 'true', станет 'false', и наоборот.
});