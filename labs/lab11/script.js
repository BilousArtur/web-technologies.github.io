// Lab 11: Arrays
let programmingLanguages = ["JavaScript", "Python", "C#", "Java"];

console.log("Перший елемент масиву:", programmingLanguages[0]);
console.log("Довжина масиву:", programmingLanguages.length);

programmingLanguages.push("C++");
console.log("Оновлений масив:", programmingLanguages);

document.getElementById('output').innerHTML = `
    <p>Мови програмування:</p>
    <ul>
        ${programmingLanguages.map(lang => `<li>${lang}</li>`).join('')}
    </ul>
    <p>Довжина масиву: ${programmingLanguages.length}</p>
`;