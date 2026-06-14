const accordion = document.querySelector('.accordion');

const initAccordion = () => {
  if (!accordion) {
    return;
  }

  accordion.addEventListener('click', (evt) => {
    const summary = evt.target.closest('.accordion-header');
    if (!summary) {
      return;
    }

    evt.preventDefault(); /*  отменяю поведение details по умолчанию
                          т.е. теперь по клику на summary окно не открывается или закрывается */

    const currentItem = summary.closest('.accordion-item');
    const allItems = accordion.querySelectorAll('.accordion-item');

    // запоминаю текущую прокрутку и положение кликнутого элемента на экране
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // сохраняю положение (координату Y) текущего (кликнутого) элемента относительно верхнего края экрана
    const oldItemTop = currentItem.getBoundingClientRect().top;

    // фиксирую текущую высоту body, чтобы страница физически не могла прыгнуть вверх
    const savedBodyHeight = document.body.style.height;
    // для этого принудительно сохраняю текущую высоту в стилях body
    document.body.style.height = `${document.documentElement.scrollHeight}px`;

    // закрываю другие элементы и открываю/закрываю текущий
    allItems.forEach((otherItem) => {
      if (otherItem !== currentItem && otherItem.open) {
        otherItem.open = false;
        otherItem.classList.remove('active');
      }
    });

    // запоминаю открываю карточку или нет - т.е. это флаг
    const isOpening = !currentItem.open;

    // меняю состояние карточки руками
    currentItem.open = isOpening;

    // и исходя из значения isOpening добавляю или удаляю класс active
    currentItem.classList.toggle('active', isOpening);

    // 2. Программно меняем состояние open (true или false)
    currentItem.open = isOpening;

    // 3. Умный toggle: если isOpening равен true — класс ДОБАВИТСЯ, если false — УДАЛИТСЯ
    currentItem.classList.toggle('active', isOpening);

    // корректируем прокрутку, удерживая элемент на месте
    // получаю новую координату элемента (координата Y) относительно верхнего края экрана
    const newItemTop = currentItem.getBoundingClientRect().top;
    // новая точку скролла с учетом разницы положений карточки «до» и «после»
    let targetScroll = currentScrollTop + newItemTop - oldItemTop;

    // максимально возможная величина скролла всей страницы
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    // ограничиваю значение новой точки скролла, чтобы скролл не улетал выше крыши (меньше 0) и ниже дна (больше maxScroll)
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

    window.scrollTo({
      top: targetScroll,
      behavior: 'auto' // Мгновенно удерживаем позицию без анимации
    });

    // 5. Возвращаем исходную высоту body назад
    document.body.style.height = savedBodyHeight;
  });
};


export { initAccordion };
