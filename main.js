function a (a, b) {
    console.log(Math.min(a, b));
}

a(10, 5);

function getStringLength() {
    let userInput = prompt("Введите строку:");
    console.log(userInput.length);
}

getStringLength();

function calculator() {
    let a = parseFloat(prompt("Введите первое число:"));
    let operator = prompt("Введите оператор (+, -, *, /, ^, sqrt, mod):");
    let b;

    if (operator !== "sqrt" && operator !== "mod") {
        b = parseFloat(prompt("Введите второе число:"));
    }

    let result;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                result = "Ошибка: деление на ноль!";
            } else {
                result = a / b;
            }
            break;
        case "^":
            result = Math.pow(a, b);
            break;
        case "sqrt":
            result = Math.sqrt(a);
            break;
        case "mod":
            result = Math.abs(a);
            break;
        default:
            result = "Неизвестная операция!";
    }

    console.log("Результат:" + result);
}
calculator();
