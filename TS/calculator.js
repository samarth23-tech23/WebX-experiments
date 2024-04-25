function calculator(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
}
// Example usage
var result1 = calculator('+', 10, 5); // 10 + 5 = 15
console.log(result1);
var result2 = calculator('-', 10, 5); // 10 - 5 = 5
console.log(result2);
var result3 = calculator('*', 10, 5); // 10 * 5 = 50
console.log(result3);
var result4 = calculator('/', 10, 5); // 10 / 5 = 2
console.log(result4);
