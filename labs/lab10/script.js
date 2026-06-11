// Lab 10: Arrow Functions
const square = (num) => num * num;
console.log("Квадрат числа 6:", square(6));

const multiply = (num1, num2) => {
    let res = num1 * num2;
    return res;
};
console.log("Результат множення:", multiply(4, 5));

document.getElementById('output').innerHTML = `
    <p>Квадрат числа 6: ${square(6)}</p>
    <p>Множення 4 x 5: ${multiply(4, 5)}</p>
`;