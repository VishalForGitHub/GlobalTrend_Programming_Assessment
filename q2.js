function evaluateExpression(expression) {
    // Remove all whitespace from the expression
    expression = expression.replace(/\s+/g, '');

    // Split the expression into numbers and operators
    const numbers = expression.split(/[-+]/).map(Number);
    const operators = expression.split(/[0-9]+/).filter(op => op);

    // Initialize result with the first number
    let result = numbers[0];

    // Iterate over the operators and numbers to compute the result
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else if (operators[i] === '-') {
            result -= numbers[i + 1];
        }
    }

    return result;
}

// Test cases
console.log(evaluateExpression("3 + 5 - 2")); // Output: 6
console.log(evaluateExpression("10 + 20 - 5 + 3")); // Output: 28
console.log(evaluateExpression("100 - 50 + 25")); // Output: 75
