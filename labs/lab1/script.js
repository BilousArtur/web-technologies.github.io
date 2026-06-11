// ========================================
// Лабораторна робота №1
// Знайомство з JavaScript
// ========================================

// 1. Виведення "Hello world!" за допомогою різних методів

// Метод 1: Виведення в HTML-елемент за id
function showHelloWorld() {
    // Отримуємо доступ до DOM-елемента за id
    const outputElement = document.getElementById('output');
    
    // Виводимо повідомлення в елемент
    outputElement.innerHTML = 'Hello world! 🌍';
    
    // Додаткові методи, які можна використовувати:
    // document.querySelector('#output').textContent = 'Hello world!';
    // document.querySelector('.output-area').innerHTML = 'Hello world!';
}

// Метод 2: Виведення через console.log (для перевірки)
console.log('Hello world! (з script.js)');

// Метод 3: Виведення через alert (закоментовано, щоб не заважало)
// alert('Hello world!');

// ========================================
// Додаткові функції для демонстрації
// ========================================

// Функція для очищення виводу
function clearOutput() {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = '';
}

// Функція, яка викликається при завантаженні сторінки
window.onload = function() {
    console.log('Сторінка завантажена!');
    
    // Можна вивести початкове повідомлення
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = 'Натисніть кнопку, щоб побачити повідомлення';
};

// ========================================
// Приклад роботи з подіями через addEventListener
// ========================================

// Альтернативний спосіб додавання подій (більш сучасний)
document.addEventListener('DOMContentLoaded', function() {
    // Знаходимо всі кнопки
    const buttons = document.querySelectorAll('button');
    console.log('Кількість кнопок на сторінці:', buttons.length);
    
    // Можна додати додаткову обробку подій
    const firstButton = document.querySelector('button');
    if (firstButton) {
        firstButton.addEventListener('mouseenter', function() {
            console.log('Курсор на кнопці "Показати"');
        });
    }
});

// ========================================
// Приклад роботи з формами (якщо потрібно)
// ========================================

// Функція для обробки введення тексту
function handleInputChange() {
    // Ця функція може бути викликана з HTML
    const inputElement = document.querySelector('input');
    if (inputElement) {
        console.log('Введено текст:', inputElement.value);
    }
}