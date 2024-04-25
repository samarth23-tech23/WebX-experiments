function calculator(operator: string, num1: number, num2: number): number {
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
  const result1 = calculator('+', 10, 5); // 10 + 5 = 15
  console.log(result1);
  
  const result2 = calculator('-', 10, 5); // 10 - 5 = 5
  console.log(result2);
  
  const result3 = calculator('*', 10, 5); // 10 * 5 = 50
  console.log(result3);
  
  const result4 = calculator('/', 10, 5); // 10 / 5 = 2
  console.log(result4);
  