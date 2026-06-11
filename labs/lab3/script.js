// Lab 3: Mathematical Operations
let x = 5;
let y = 2;

let sum = x + y;
let diff = x - y;
let prod = x * y;
let quot = x / y;
let rem = x % y;

console.log("Сума:", sum);
console.log("Різниця:", diff);
console.log("Добуток:", prod);
console.log("Частка:", quot);
console.log("Залишок від ділення:", rem);

document.getElementById('output').innerHTML = `
    <p>Сума: ${sum}</p>
    <p>Різниця: ${diff}</p>
    <p>Добуток: ${prod}</p>
    <p>Частка: ${quot}</p>
    <p>Залишок: ${rem}</p>
`;