// Lab 4: Concatenation and Number Type
let remainder = 10 % 3;
console.log("Залишок від ділення 10 на 3 = " + remainder);
console.log(typeof remainder);

console.log("Hello World");

let result = "10" + 20;
console.log(result);

document.getElementById('output').innerHTML = `
    <p>Залишок: ${remainder} (тип: ${typeof remainder})</p>
    <p>Конкатенація "10" + 20 = ${result}</p>
`;