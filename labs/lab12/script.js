// Lab 12: Array Iteration and Methods
let numbersList = [10, 20, 30, 40];

console.log("Перебір через цикл for...of:");
for (let num of numbersList) {
    console.log("Число:", num);
}

console.log("Перебір через метод forEach:");
numbersList.forEach((element, index) => {
    console.log("Елемент під індексом " + index + " дорівнює " + element);
});

let outputHTML = "<h3>Перебір масиву:</h3>";
numbersList.forEach((element, index) => {
    outputHTML += `<p>Елемент [${index}] = ${element}</p>`;
});

document.getElementById('output').innerHTML = outputHTML;