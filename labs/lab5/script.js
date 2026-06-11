// Lab 5: Logical Operators and Comparisons
let age = 19;
let hasDriverLicense = true;

let canDrive = age >= 18 && hasDriverLicense;
console.log("Чи може керувати авто:", canDrive);

let isWeekend = true;
let isHoliday = false;
let canRest = isWeekend || isHoliday;
console.log("Чи можна відпочивати:", canRest);

document.getElementById('output').innerHTML = `
    <p>Вік: ${age}, права: ${hasDriverLicense}</p>
    <p>Чи може керувати: ${canDrive}</p>
    <p>Чи можна відпочивати: ${canRest}</p>
`;