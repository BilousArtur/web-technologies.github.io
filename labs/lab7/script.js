// Lab 7: Ternary Operator and Switch
let isAuthorized = true;
let accessStatus = isAuthorized ? "Доступ дозволено" : "Доступ заборонено";
console.log(accessStatus);

let browser = "Chrome";
let browserStatus;

switch (browser) {
    case "Chrome":
    case "Firefox":
        browserStatus = "Цей браузер підтримується";
        break;
    case "Safari":
        browserStatus = "Підтримка обмежена";
        break;
    default:
        browserStatus = "Невідомий браузер";
}

console.log(browserStatus);

document.getElementById('output').innerHTML = `
    <p>Статус доступу: ${accessStatus}</p>
    <p>Браузер: ${browser} - ${browserStatus}</p>
`;