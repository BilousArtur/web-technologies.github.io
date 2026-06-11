// Lab 8: Loops (while, do-while, for)
let outputHTML = "<h3>Цикл for:</h3>";
for (let i = 1; i <= 5; i++) {
    outputHTML += `<p>Крок: ${i}</p>`;
    console.log("Крок:", i);
}

outputHTML += "<h3>Цикл while:</h3>";
let count = 3;
while (count > 0) {
    outputHTML += `<p>Зворотний відлік: ${count}</p>`;
    console.log("Зворотний відлік:", count);
    count--;
}

document.getElementById('output').innerHTML = outputHTML;