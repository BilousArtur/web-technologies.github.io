// Lab 6: Conditional Statements (if/else)
let score = 75;
let grade;

if (score >= 90) {
    grade = "Відмінно";
} else if (score >= 74) {
    grade = "Добре";
} else if (score >= 60) {
    grade = "Задовільно";
} else {
    grade = "Незадовільно";
}

console.log("Оцінка:", grade);

document.getElementById('output').innerHTML = `
    <p>Бали: ${score}</p>
    <p>Оцінка: ${grade}</p>
`;