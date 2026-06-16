// Lab 9: Functions (function declaration)
function sayGreeting(name) {
    return "Привіт, " + name + "!";
}

let greetingText = sayGreeting("Артур");
console.log(greetingText);

function calculateArea(width, height) {
    return width * height;
}
console.log("Площа прямокутника:", calculateArea(5, 10));

document.getElementById('output').innerHTML = `
    <p>${greetingText}</p>
    <p>Площа прямокутника (5 x 10): ${calculateArea(5, 10)}</p>
`;