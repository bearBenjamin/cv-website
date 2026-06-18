
const additionalProjects = [
  {
    name: 'Интернет магазин - Cat Energy',
    tags: 'HTML / SASS(SCSS) / БЭМ / JavaScript',
    description: 'Интернет-магазин функционального питания котов. Выполнен в рамках обучения на курсе “HTML и CSS адаптивная верстка сайтов и оптимизация” HTML-Academy.',
    content: `<h3 class="project-description-title" data-i18n="project__description-title__06">Описание проекта: Cat Energy</h3>
  <p class="project-description" data-i18n="project__description-text__06">Адаптивный интернет-магазин функционального питания для кошек, состоящий из главной страницы и каталога товаров. Проект выполнен в рамках обучения на курсе “HTML и CSS адаптивная верстка сайтов и оптимизация” HTML-Academy.' с использованием современной методологии вёрстки, оптимизирован для быстрой загрузки на любых устройствах.</p>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-1__06">Архитектура и автоматизация:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-1__06"><strong>Инструменты:</strong> сборка и автоматизация рутинных задач реализованы с помощью <strong>Gulp</strong>.</li>
    <li class="project-description" data-i18n="project__description-item-2__06"><strong>Препроцессор:</strong> стили написаны на <strong>Sass</strong> с разделением на независимые файлы и последующей компиляцией.</li>
    <li class="project-description" data-i18n="project__description-item-3__06"><strong>Методология:</strong> разметка и стили структурированы по методологии <strong>БЭМ (Блок-Элемент-Модификатор)</strong>.</li>
    <li class="project-description" data-i18n="project__description-item-4__06"><strong>Типографика:</strong> настроено корректное подключение и отображение шрифтов <strong>Oswald</strong> и <strong>Lato</strong>.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-2__06">Адаптивность и графика (Mobile-First):</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-5__06"><strong>Стратегия:</strong> вёрстка выполнена по принципу <strong>Mobile-First</strong> с плавным переходом к планшетной и десктопной версиям.</li>
    <li class="project-description" data-i18n="project__description-item-6__06"><strong>Поведение сетки:</strong> реализована адаптивная сетка, где контентная область центруется, а декоративные фоны растягиваются на всю ширину экрана.</li>
    <li class="project-description" data-i18n="project__description-item-7__06"><strong>Оптимизация графики:</strong> проведена ретинизация растровых изображений и внедрена отзывчивая векторная графика (SVG-спрайт).</li>
    <li class="project-description" data-i18n="project__description-item-8__06"><strong>Кроссбраузерность:</strong> обеспечено идентичное отображение интерфейса в актуальных версиях браузеров Chrome и Firefox.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-3__06">Интерактивные элементы и логика:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-9__06"><strong>Мобильная навигация:</strong> реализовано адаптивное бургер-меню, переключающееся между состояниями «гамбургер» и «крестик».</li>
    <li class="project-description" data-i18n="project__description-item-10__06"><strong>Отказоустойчивость:</strong> предусмотрены специальные стили для работы меню в открытом состоянии, если у пользователя отключен JavaScript.</li>
    <li class="project-description" data-i18n="project__description-item-11__06"><strong>Интерфейс:</strong> для всех ссылок, кнопок и полей ввода стилизованы интерактивные состояния (hover, focus, active) согласно стайлгайду.</li>
    <li class="project-description" data-i18n="project__description-item-12__06"><strong>Интерактивная карта:</strong> встроен блок карты (Google) с кастомным маркером, который автоматически подстраивается под ширину вьюпорта.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-4__06">Особенности адаптации главной страницы:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-13__06"><strong>Мобильное состояние:</strong> отображается упрощенная иконка логотипа, ссылки категорий ведут на целевые разделы, свёрстан статический блок «Живой пример».</li>
    <li class="project-description" data-i18n="project__description-item-14__06"><strong>Планшетное состояние:</strong> блоки меняют размеры и расположение, в логотип добавляются новые элементы, а главное меню всегда остается открытым.</li>
    <li class="project-description" data-i18n="project__description-item-15__06"><strong>Десктопное состояние:</strong> реализован сложный разделенный фон первого экрана (левая половина белая, правая — зеленая с изображением кота, уходящим в край экрана).</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-5__06">Адаптация страницы каталога товаров:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-16__06"><strong>Карточки товаров:</strong> названия и фотографии обёрнуты в ссылки; интерактивные кнопки «Заказать» ведут на форму оформления заказа (форма не реализовывалась).</li>
    <li class="project-description" data-i18n="project__description-item-18__06"><strong>Адаптивная сетка:</strong> структура расположения карточек товаров и их размеры гибко перестраиваются под планшетные и десктопные дисплеи согласно макетам.</li>
  </ul>`,
    github: 'https://github.com/bearBenjamin/2274609-cat-energy-2',
    live: 'https://bearbenjamin.github.io/2274609-cat-energy-2/',
    figma: 'https://www.figma.com/design/kwmtyIigKr8bhkgfoAdHGU/HTML-2---%D0%9A%D1%8D%D1%82-%D1%8D%D0%BD%D0%B5%D1%80%D0%B4%D0%B6%D0%B8--31---Copy-?node-id=0-1&p=f&t=Vxm7nDpJKsswQUmh-0'
  },

  {
    name: 'Одностраничный лендинг фотографа фрилансера - Portfolio',
    tags: 'HTML / CSS / JavaScript',
    content: `<h3 class="project-description-title" data-i18n="project__description-title__07">Описание проекта: Портфолио фриланс-фотографа</h3>
  <p class="project-description" data-i18n="project__description-text__07">Одностраничный адаптивный лендинг для демонстрации фоторабот, ознакомления клиентов с ценами, ответами на FAQ и бронирования услуг. Вёрстка семантическая, включает интерактивные модули на чистом JavaScript, плавные микроанимации. Выполнен в рамках самостоятельного обучения на Stage 1 RS-school в закрытом репозитории школы.</p>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-1__07">Адаптивность и сетка:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-1__07">Макет адаптирован под фиксированные брейкпоинты: <strong>десктоп (1440px+)</strong>, <strong>планшет (768px)</strong> и <strong>мобильный (380px)</strong>.</li>
    <li class="project-description" data-i18n="project__description-item-4__07">В основе макета лежит флюидная (резиновая) сетка, поэтому при изменении размеров окна интерфейс подстраивается плавно, элементы не перекрываются, а изображения сохраняют правильные пропорции</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-2__07">Интерактивность и JavaScript-логика:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-5__07"><strong>Адаптивное бургер-меню</strong>: создано без картинок/SVG, плавно превращается в крестик, блокирует прокрутку страницы при открытии и закрывается по клику на ссылки.</li>
    <li class="project-description" data-i18n="project__description-item-6__07"><strong>Бесконтактный слайдер</strong>: на ПК управляется наведением курсора на активные зоны (по 30% с краев экрана), а на мобильных устройствах переключается свайпами.</li>
    <li class="project-description" data-i18n="project__description-item-7__07"><strong>Динамические аккордеоны FAQ</strong>: работают по принципу Single Open (открыт только один пункт), а текущее состояние сохраняется после перезагрузки страницы.</li>
    <li class="project-description" data-i18n="project__description-item-8__07"><strong>Модальное окно бронирования</strong>: активируется из карточек цен, центрировано по обеим осям, блокирует вертикальный скролл сайта и закрывается по клику на оверлей или крестик.</li>
    <li class="project-description" data-i18n="project__description-item-9__07">Реализована кнопка прокрутки вниз в Hero-разделе для плавного перехода к блоку About, а все hover-эффекты аппаратно отключены на мобильных устройствах.</li>
  </ul>`,
    live: 'https://rolling-scopes-school.github.io/bearbenjamin-JSFE2025Q3/portfolio/',
    figma: 'https://www.figma.com/design/MKwZw6cPoWdpOCXOkrSsum/Portfolio--Copy-?t=Vxm7nDpJKsswQUmh-0'
  },
  {
    name: 'Браузерная игра - Pair-em-Up',
    tags: 'HTML / CSS / JavaScript',
    content: `<h3 class="project-description-title" data-i18n="project__description-title__08">Описание проекта: Стратегическая головоломка «Pair 'em Up»</h3>
  <p class="project-description" data-i18n="project__description-text__08">Логическая игра на сопоставление чисел, в которой игроку необходимо полностью очистить игровое поле, находя и удаляя допустимые пары. Проект сочетает в себе увлекательный геймплей с необходимостью стратегического мышления, управления ограниченными ресурсами и использования вспомогательных инструментов для достижения целевого показателя в 100 очков. Выполнен в рамках самостоятельного обучения на Stage 1 RS-school, реализовано на чистом JavaScript с динамическим манипулированием DOM (SPA на “ванили”).</p>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-1__08">Режимы игры и генерация чисел:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-1__08"><strong>Классический режим</strong>: последовательное заполнение игрового поля числами от 1 до 19 (исключая 0) в строгом порядке возрастания.</li>
    <li class="project-description" data-i18n="project__description-item-2__08"><strong>Режим случайного выбора</strong>: генерация чисел от 1 до 19 (исключая 0) с их хаотичным распределением по ячейкам сетки.</li>
    <li class="project-description" data-i18n="project__description-item-3__08"><strong>Хаотичный режим</strong>: усложненная механика, создающая ровно 27 случайных чисел, состоящих исключительно из цифр от 1 до 9.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-2__08">Логика игры и управление состоянием:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-4__08">Реализовано сопоставление пар по двум правилам: <strong>одинаковые числа</strong> (начисляется 1 балл) и <strong>сумма чисел равна 10</strong> (начисляется 2 очка), а также предусмотрены бонусные пары, когда числа равны 5 (3 очка).</li>
    <li class="project-description" data-i18n="project__description-item-5__08">Алгоритм учитывает <strong>границы сетки</strong>, позволяя сопоставлять последнее число текущей строки с первым числом следующей строки.</li>
    <li class="project-description" data-i18n="project__description-item-6__08">Игра корректно завершается победой при достижении <strong>100+ очков</strong> или поражением при достижении жесткого лимита <strong>строк</strong>, а также при полном отсутствии доступных ходов и подсказок.</li>
    <li class="project-description" data-i18n="project__description-item-7__08">Разработан четкий механизм взаимодействия с сеткой: выбор и отмена выбора ячеек кликом, мгновенная проверка хода на успех/неудачу и таймер времени в формате <strong>MM:SS</strong>.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-3__08">Интерфейс, кастомизация и сохранение данных:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-8__08"><strong>Экраны и навигация</strong>: реализованы плавные переходы между начальным экраном (с выбором режима и ссылкой на GitHub автора), игровым полем и окном результатов.</li>
    <li class="project-description" data-i18n="project__description-item-9__08"><strong>Игровой HUD</strong>: отображает адаптивную сетку чисел, динамический счет (текущий/целевой), игровой таймер и счетчики для 5 вспомогательных инструментов.</li>
    <li class="project-description" data-i18n="project__description-item-10__08"><strong>Полное сохранение (Persistence)</strong>: состояние игры (сетка, счет, таймер, режим, история отмен, лимиты инструментов), а также настройки звука и выбранной темы автоматически записываются в <strong>LocalStorage</strong> и восстанавливаются при перезагрузке страницы.</li>
    <li class="project-description" data-i18n="project__description-item-11__08"><strong>Экран результатов</strong>: выводит лучший результат в выбрано режиме игры.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-4__08">Аудиовизуальный UX и адаптивность:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-12__08"><strong>Звуковое сопровождение</strong>: интегрирована аудиообратная связь для выбора ячеек, подтверждения правильных/неправильных пар, а также для победы и поражения с возможностью отключения звука.</li>
    <li class="project-description" data-i18n="project__description-item-13__08"><strong>Визуальные эффекты</strong>: реализовано контрастное выделение выбранных ячеек, плавные анимации переходов и полноценное переключение между <strong>светлым и темным режимами</strong> оформления.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-5__08">Вспомогательные инструменты:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-15__08"><strong>Подсказка</strong>: рассчитывает текущее количество ходов (с максимальным значением "5+").</li>
    <li class="project-description" data-i18n="project__description-item-16__08"><strong>Отмена</strong>: пошаговый откат последнего действия (не более одного раза за ход).</li>
    <li class="project-description" data-i18n="project__description-item-17__08"><strong>Добавление чисел</strong>: генерирует новые строки на основе существующих.</li>
    <li class="project-description" data-i18n="project__description-item-18__08"><strong>Перетасовка и Ластик</strong>: случайное перемешивание чисел и точечное удаление любого числа (каждый инструмент ограничен 5 использованиями за матч).</li>
  </ul>`,
    github: 'https://github.com/bearBenjamin/pair-em-up',
    live: 'https://bearbenjamin.github.io/pair-em-up/'
  },

  {
    name: 'Туристический портал - Sedona',
    tags: 'HTML / CSS ',
    description: 'Информационный портал г.Седона для туристов. Выполнен в рамках обучения на курсе “HTML и CSS профессиональная верстка сайтов” HTML-Academy.',
    content: `<h3 class="project-description-title" data-i18n="project__description-title__09">Описание проекта: Информационный сайт туристического городка Седона</h3>
  <p class="project-description" data-i18n="project__description-text__09">Многостраничный презентационный сайт с каталогом отелей и интерактивной формой поиска. Проект выполнен на чистом HTML и CSS в строгом соответствии со стандартами современной семантической вёрстки. Вся интерактивная логика интерфейса реализована стандартными средствами CSS без JavaScript.</p>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-1__09">Интерактивные элементы главной страницы:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-1__09"><strong>Многофункциональная шапка:</strong> Спроектирован счетчик избранного с поддержкой двузначных чисел, а также настроены сквозные ссылки для поиска и раздела «Хочу сюда!».</li>
    <li class="project-description" data-i18n="project__description-item-2__09"><strong>Сложная графика Hero-блока:</strong> Реализована полноширинная фоновая фотография со сложной декоративной белой маской в нижней части и семантичным контентным изображением слогана.</li>
    <li class="project-description" data-i18n="project__description-item-3__09"><strong>Модальное окно поиска:</strong> Кнопка вызова подборщика гостиниц связана с механикой открытия всплывающего модального окна.</li>
    <li class="project-description" data-i18n="project__description-item-4__09"><strong>Форма подписки на рассылку:</strong> Интегрирована валидация обязательного текстового поля на уровне HTML5, препятствующая отправке пустой формы на сервер.</li>
    <li class="project-description" data-i18n="project__description-item-5__09"><strong>Телефонная связь:</strong> Номер телефона в подвале размечен через протокол tel: для совершения прямых звонков с мобильных устройств.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-2__09">Каталог и фильтрация жилья:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-6__09"><strong>Контекстная навигация:</strong> Реализованы хлебные крошки и активное состояние текущей страницы в меню.</li>
    <li class="project-description" data-i18n="project__description-item-7__09"><strong>Сложная форма фильтра:</strong> Сверстана интерактивная панель параметров с Range-слайдером («от» и «до») для гибкого выбора ценового диапазона, а также механикой полного сброса полей в исходное состояние.</li>
    <li class="project-description" data-i18n="project__description-item-8__09"><strong>Панель сортировки:</strong> Переключатели видов отображения (плитка, карточки, список) реализованы в виде ссылок.</li>
    <li class="project-description" data-i18n="project__description-item-9__09"><strong>Сетка карточек отелей:</strong> Подготовлены шаблоны карточек товаров с прорисовкой кнопок добавления в избранное, детального просмотра и декоративной инфографикой преимуществ.</li>
    <li class="project-description" data-i18n="project__description-item-10__09"><strong>Доступная пагинация:</strong> Текущая страница в блоке постраничной навигации заблокирована от кликов, у неё полностью отключены все интерактивные псевдоклассы (:hover, :focus, :active).</li>
  </ul>`,
    github: 'https://github.com/bearBenjamin/2274609-sedona-2',
    live: 'https://bearbenjamin.github.io/2274609-sedona-2/',
    figma: 'https://www.figma.com/design/ojPEH63emdZbVk85VmMw8t/HTML-1---%D0%A1%D0%B5%D0%B4%D0%BE%D0%BD%D0%B0--39---Copy-?t=Vxm7nDpJKsswQUmh-0'
  },

  {
    name: 'Сайт-визитка - CV',
    tags: 'HTML / CSS ',
    content: `<h3 class="project-description-title" data-i18n="project__description-title__10">Описание проекта: Персональная CV-страница (Онлайн-резюме)</h3>
  <p class="project-description" data-i18n="project__description-text__10">Интерактивная англоязычная страница-портфолио, спроектированная в рамках обучения на Stage 0 RS-school. Проект выполнен на чистом HTML и CSS без использования готовых CSS-фреймворков и шаблонов, что позволило продемонстрировать индивидуальный подход к дизайну интерфейса.</p>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-1__10">Структура и содержание:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-1__10"><strong>Профессиональное позиционирование:</strong> Сформирован текстовый блок «О себе» на английском языке.</li>
    <li class="project-description" data-i18n="project__description-item-2__10"><strong>Связь и интеграция:</strong> Размещен блок актуальных контактов, включая интеграцию ссылки на Discord-сервер сообщества RS School, электронную почту и профиль на GitHub.</li>
    <li class="project-description" data-i18n="project__description-item-3__10"><strong>Портфолио проектов:</strong> Реализован интерактивный перечень выполненных учебных работ с кратким описанием стека технологий и сквозными ссылками на исходный код репозиториев.</li>
    <li class="project-description" data-i18n="project__description-item-4__10"><strong>Образование и навыки:</strong> Оформлены структурированные секции со списком ключевых Hard & Soft навыков, а также академического бэкграунда.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-2__10">Технические особенности и оптимизация:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-5__10"><strong>Демонстрация алгоритмических навыков:</strong> В разметку интегрирован живой пример программного кода (решение задачи с платформы Codewars), оформленный семантическими тегами &lt;code&gt; и &lt;pre&gt; вместо статических скриншотов.</li>
    <li class="project-description" data-i18n="project__description-item-7__10"><strong>Доступность (Accessibility):</strong> Текст резюме изначально составлен на английском языке с соблюдением требований к семантической иерархии заголовков.</li>
  </ul>`,
    github: 'https://github.com/bearBenjamin/rsschool-cv',
    live: 'https://bearbenjamin.github.io/rsschool-cv/'
  },

  {
    name: 'Интерактивный таск-менеджер - Kanban',
    tags: 'JavaScritp / Drag-and-Drop',
    decritpion: 'Приложение для управления задачами с возможностью динамического перетаскивания карточек между колонками (Drag-and-Drop).',
    content: `<h3 class="project-description-title" data-i18n="project__description-title__11">Описание проекта: Одностраничное приложение «Канбан-доска»</h3>
  <p class="project-description" data-i18n="project__description-text__11">Приложение для управления задачами с возможностью динамического перетаскивания карточек между колонками (Drag-and-Drop). Проект полностью реализован на чистом JavaScript без привлечения сторонних библиотек и фреймворков.</p>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-1__11">Функциональные возможности и логика:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-1__11"><strong>Динамическое добавление задач:</strong> Реализована форма создания карточек с обязательной валидацией текстового поля, автоматическим добавлением новой задачи в конец колонки «Бэклог» и последующей мгновенной очисткой инпута.</li>
    <li class="project-description" data-i18n="project__description-item-2__11"><strong>Инлайн-редактирование контента:</strong> Интегрирована механика изменения названий задач по клику на скрытую иконку-карандаш с автоматическим переводом фокуса, отслеживанием нажатия клавиши Enter для сохранения данных и корректным выходом из режима редактирования.</li>
    <li class="project-description" data-i18n="project__description-item-3__11"><strong>Очистка и блокировка «Корзины»:</strong> Написан обработчик полной безвозвратной очистки выполненных задач по клику на кнопку, которая автоматически блокируется при пустом состоянии колонки.</li>
    <li class="project-description" data-i18n="project__description-item-4__11"><strong>Умные интерфейсные заглушки:</strong> Реализована система динамических текстовых блоков («Перетащите карточку» / «Корзина пуста»), которые автоматически рендерятся на странице, как только любая из колонок полностью пустеет.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-2__11">Продвинутый Drag-and-Drop интерфейс:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-5__11"><strong>Свободное перемещение:</strong> На базе HTML5 Drag and Drop API разработана сложная логика свободного перетаскивания карточек как внутри одной колонки для изменения приоритета, так и между всеми четырьмя статусными колонками.</li>
    <li class="project-description" data-i18n="project__description-item-6__11"><strong>Живой интерактивный отклик (UX):</strong> Реализовано плавное смещение соседних элементов при подъёме карточки и динамическая генерация серого контурного блока-плейсхолдера, наглядно демонстрирующего пользователю будущее место сброса (дропа).</li>
    <li class="project-description" data-i18n="project__description-item-7__11"><strong>Динамическая стилизация:</strong> Интегрирована автоматическая смена цветовых индикаторов на левой грани карточки в зависимости от текущей колонки, в которую она была перемещена.</li>
  </ul>`,
    github: 'https://github.com/bearBenjamin/Kanban-board',
    live: 'https://bearbenjamin.github.io/Kanban-board/'
  },

  {
    name: 'Сервис бронирования жилья - Keksobooking',
    tags: 'JavaScript / API Maps / Pristine.js / noUiSlider / Fetch API',
    content: `<h3 class="project-description-title" data-i18n="project__description-title__12">Описание проекта: Сервис аренды недвижимости «Кексобукинг»</h3>
  <p class="project-description" data-i18n="project__description-text__12">Интерактивный сервис объявлений по аренде жилья в Токио. Проект демонстрирует навыки интеграции сторонних картографических библиотек, управления сложными асинхронными состояниями интерфейса (активный/неактивный режим).</p>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-1__12">Управление состояниями страницы и картой:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-1__12"><strong>Защита от преждевременного ввода (Неактивный режим):</strong> Реализована строгая блокировка интерфейса при старте приложения до полной готовности карты. Автоматически активируются CSS-классы отключения форм, а на все интерактивные элементы (инпуты, селекты, группы fieldset и кастомный слайдер) навешивается атрибут disabled.</li>
    <li class="project-description" data-i18n="project__description-item-2__12"><strong>Динамическая активация (Активный режим):</strong> Запрограммирован плавный перевод интерфейса в рабочее состояние строго в момент успешной инициализации картографического движка на базе сторонней JS-библиотеки <strong>Leaflet</strong>.</li>
    <li class="project-description" data-i18n="project__description-item-3__12"><strong>Серверная синхронизация и картография:</strong> Настроена асинхронная загрузка базы данных объявлений с удаленного сервера с рендерингом кастомных маркеров и детальных информационных балунов (popup) при клике на них.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-2__12">Работа с гео-локацией и API карт:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-4__12"><strong>Управление главной меткой адреса:</strong> Интегрирована специальная интерактивная метка, перемещением которой по карте Токио пользователь указывает точное расположение недвижимости.</li>
    <li class="project-description" data-i18n="project__description-item-5__12"><strong>Защита гео-координат от ручного ввода:</strong> Наложено строгое ограничение на ручное редактирование инпута адреса. Данные автоматически выставляются в поле в строго заданном формате (широта, долгота) исключительно на основе данных от API карт при перемещении маркера.</li>
    <li class="project-description" data-i18n="project__description-item-6__12"><strong>Математическая точность данных:</strong> Реализовано автоматическое заполнение поля адреса дефолтными координатами центра Токио сразу после активации страницы. Написан алгоритм округления дробных координат от картографического движка строго до пяти знаков после запятой для корректного парсинга сервером.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-3__12">Сложная валидация, UX и кастомные элементы (Pristine, noUiSlider):</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-7__12"><strong>Интеграция слайдера цены:</strong> Поле стоимости за ночь связано со сторонним плагином <strong>noUiSlider</strong>. Пользователь может вводить цену вручную или перемещать ползунок слайдера, при этом оба элемента синхронизированы в режиме реального времени.</li>
    <li class="project-description" data-i18n="project__description-item-8__12"><strong>Динамические зависимости полей (Тип жилья и Цена):</strong> Выбор типа недвижимости («Бунгало», «Квартира», «Отель», «Дом», «Дворец») на лету пересчитывает минимальный порог валидации цены и динамически обновляет текст плейсхолдера инпута.</li>
    <li class="project-description" data-i18n="project__description-item-9__12"><strong>Синхронизация времени и комнат:</strong> Запрограммирована двусторонняя связь полей заезда/выезда. Спроектирована сложная матрица соответствия количества комнат и вместимости гостей (включая сценарий «100 комнат — не для гостей») на базе валидации <strong>Pristine</strong> без принудительного отключения опций, что гарантирует эталонный UX.</li>
    <li class="project-description" data-i18n="project__description-item-10__12"><strong>Интерактивное превью файлов:</strong> Для полей загрузки аватара и фотографий жилья написан обработчик файлов, который проверяет тип данных (строго изображения) и мгновенно генерирует превью-миниатюры для пользователя на странице.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-4__12">Сетевое взаимодействие и AJAX:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-11__12"><strong>Асинхронная отправка бинарных данных:</strong> Написан AJAX-обработчик публикации объявления методом POST с типом <strong>multipart/form-data</strong> для корректной передачи загруженных файлов на сервер с автоматической блокировкой кнопки отправки на время запроса.</li>
    <li class="project-description" data-i18n="project__description-item-12__12"><strong>Экранные сообщения обратной связи:</strong> Разработана динамическая отрисовка модальных окон успешной отправки (#success) и сетевой ошибки (#error) с продвинутым управлением событиями закрытия по клавише Esc и клику в оверлей без перезагрузки всей страницы.</li>
  </ul>`,
    github: 'https://github.com/bearBenjamin/keksobooking-lite',
    live: 'https://bearbenjamin.github.io/keksobooking-lite/'
  },

  {
    name: 'Одностраничный лендинг яхт-клуба - Sail-club',
    tags: 'HTML / CSS / JavaScript',
    description: 'Одностраничный лендинг яхт-клуба.',
    github: 'https://github.com/bearBenjamin/sail-club',
    live: 'https://bearbenjamin.github.io/sail-club/',
    figma: 'https://www.figma.com/design/GBS44s156Exbc49wKOMPDf/fe-start-03--Copy-?node-id=0-1&p=f&t=dnumPfYwpKyXpCEY-0'
  },
  {
    name: 'Консольная программа сравнения двух конфигурационных файлов - Difference Calculator',
    tags: 'JavaScript / Jest',
    description: 'Программа «Калькулятор различий» сравнивает два конфигурационных файла. Результат сравнения отображается в различных форматах. В пакете реализованы следующие форматы: stylish, plain, json. Примеры работы программы приведены ниже.',
    github: 'https://github.com/bearBenjamin/frontend-project-46'
  },
  {
    name: 'Консольные игры - Mind games',
    tags: 'JavaScript',
    description: 'В проекте на "ванильном" JavaScrip реализовано пять математических игр - Проверка честности, Калькулятор, Наибольший общий делитель, Арифметическая прогрессия.',
    github: 'https://github.com/bearBenjamin/frontend-project-44'
  }
];

export { additionalProjects };


/*
для big-trip рыба описания:
<div class="accordion-content">
  <h3 class="project-description-title" data-i18n="project__description-title__04">Описание проекта: Сервис планирования путешествий «Big Trip»</h3>
  <p class="project-description" data-i18n="project__description-text__04">Современное одностраничное приложение (SPA) для управления маршрутами и расходами в путешествиях. Проект представляет собой сложную систему с динамическим интерфейсом, которая синхронизирует состояние клиента с удаленным сервером в режиме реального времени посредством REST API. Разработка велась на чистом JavaScript без использования готовых фреймворков.</p>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-1__04">Архитектура и управление состоянием:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-1__04">Приложение спроектировано по строгому паттерну <strong>MVP (Model-View-Presenter)</strong>, что разделяет бизнес-логику и интерфейс.</li>
    <li class="project-description" data-i18n="project__description-item-2__04">Реализован кастомный реактивный фреймворк на классах ООП с поддержкой наследования и абстрактных вью.</li>
    <li class="project-description" data-i18n="project__description-item-3__04">Связь моделей данных и презентеров построена на паттерне <strong>Observer (Наблюдатель)</strong> для автоматического обновления интерфейса при изменении данных.</li>
    <li class="project-description" data-i18n="project__description-item-4__04">Реализована независимая система фильтрации и многоуровневой хронологической сортировки точек маршрута.</li>
  </ul>

  <h4 class="project-description-subtitle" data-i18n="project__description-subtitle-2__04">Сетевое взаимодействие и UX:</h4>
  <ul>
    <li class="project-description" data-i18n="project__description-item-5__04">Реализован полный <strong>CRUD-цикл</strong> (создание, чтение, обновление, удаление) для работы с внешним сервером.</li>
    <li class="project-description" data-i18n="project__description-item-6__04">Написаны асинхронные адаптеры данных (маппинг API) для безопасной конвертации данных между сервером и клиентом.</li>
    <li class="project-description" data-i18n="project__description-item-7__04">Интегрирована надежная валидация форм с фильтрацией ввода на базе регулярных выражений и сторонних библиотек (flatpickr, dayjs).</li>
    <li class="project-description" data-i18n="project__description-item-8__04">Реализована продвинутая система <strong>User Feedback</strong>: блокировка интерфейса при запросах, индикация статусов (Saving/Deleting) и интерактивный Shake-эффект при сетевых ошибках.</li>
  </ul>
</div>
*/
