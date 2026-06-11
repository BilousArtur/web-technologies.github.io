// Lab 14: DOM and Element Selection
window.addEventListener("DOMContentLoaded", () => {
    let pageHeading = document.querySelector("h1");
    if (pageHeading) {
        console.log("Знайдено заголовок на сторінці:", pageHeading.textContent);
        pageHeading.textContent = "Консоль успішно перевірена. Скрипти працюють!";
    }

    // Змінюємо текст у демонстраційному елементі
    let demoElement = document.getElementById("demoElement");
    if (demoElement) {
        demoElement.textContent = "Цей текст було змінено за допомогою JavaScript! 🎉";
        demoElement.style.background = "#d4edda";
        demoElement.style.borderLeftColor = "#28a745";
    }

    document.getElementById('output').innerHTML = `
        <p>✅ DOM завантажено та оброблено!</p>
        <p>📌 Заголовок змінено на: "${pageHeading.textContent}"</p>
    `;
});