# Precise Timer Test Task

Тестовое задание 1 на позицию Frontend-разработчика в компанию amoCRM

Напишите реализацию наиболее точного таймера. Шаг анимации таймера 1 секунда. Aорматирование таймера “hh:mm:ss”. Например 01:12:59 - один час, 12 минут, 59 секунд.

---

## Stack

- HTML
- CSS
- JavaScript

Link to [GitHub Pages](https://xonika9.github.io/precise-timer-test-task/)

## Реализация

В этом коде реализован таймер, который позволяет пользователю вводить количество секунд и начинает обратный отсчет. Вот краткое описание каждого шага в коде:

1. Выбираем элементы DOM с помощью querySelector:

- inputEl - поле ввода, где пользователь вводит количество секунд
- buttonEl - кнопка "Start" для начала обратного отсчета
- timerEl - элемент, отображающий обратный отсчет времени в формате "hh:mm:ss"
- enteredValueEl - элемент, отображающий введенное пользователем количество секунд

2. Функция formatTime принимает количество секунд и преобразует его в формат "hh:mm:ss", используя padStart для добавления нулей перед однозначными числами.

3. Функция createTimerAnimator создает новый таймер-аниматор, который начинает обратный отсчет на основе введенных секунд. Он также предотвращает наложение нескольких таймеров путем очистки предыдущего таймера с помощью clearInterval.

4. Функция animateTimer инициализируется с помощью createTimerAnimator().

5. Обработчик события input фильтрует ввод пользователя, оставляя только числа с помощью регулярного выражения.

6. Функция startTimer начинает обратный отсчет и обновляет текст enteredValueEl на основе введенного количества секунд.

7. Обработчик события keydown отслеживает нажатие клавиши "Enter" в поле ввода и вызывает функцию startTimer, если пользователь нажал "Enter".

8. Обработчик события click отслеживает нажатие кнопки "Start" и вызывает функцию startTimer.

Когда пользователь вводит число секунд и нажимает "Enter" или кнопку "Start", таймер начинает обратный отсчет и обновляет элемент timerEl каждую секунду. Введенное количество секунд отображается в элементе enteredValueEl.