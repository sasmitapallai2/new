function calculate(n1, n2, operation) {
    switch (operation) {
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1 * n2;
        case 'divide':
            if (n2 !== 0) {
                return n1 / n2;
            } else {
                return 'Error: Division by zero';
            }
        default:
            return 'Error: Invalid operation';
    }
  }
  
  function performCalculation() {
    const n1 = parseFloat(document.getElementById('calc-n1').value);
    const n2 = parseFloat(document.getElementById('calc-n2').value);
    const operation = document.getElementById('calc-operation').value;
    const result = calculate(n1, n2, operation);
    document.getElementById('calc-output').innerText = 'Result: ' + result;
  }
  

