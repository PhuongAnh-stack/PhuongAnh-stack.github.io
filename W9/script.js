function calculate(operator) {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const resultDiv = document.getElementById('result');

    // Validation
    if (isNaN(a) || isNaN(b)) {
      resultDiv.textContent = 'Both inputs are required!';
      return;
    }

    if (operator === '/' && b === 0) {
      resultDiv.textContent = 'Cannot divide by zero!';
      return;
    }

    let result;
    switch (operator) {
      case '+': result = a + b+ c; 
       break;
      case '-': result = a - b- c;
       break;
      case '*': result = a * b * c; 
       break;
      case '/': result = a / b;
       break;
    }

    resultDiv.textContent = `Result: ${result}`;
  }