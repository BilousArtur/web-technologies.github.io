// Lab 2: Variables and Data Types
let message;
message = "Hello World";
console.log(message);

let a = 10, b = 20;
const temp = "Охріменко";

console.log(a);
console.log(b);
console.log(temp);

document.getElementById('output').innerHTML = `
    <p>Message: ${message}</p>
    <p>a = ${a}, b = ${b}</p>
    <p>const: ${temp}</p>
`;