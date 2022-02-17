function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return (num1 / num2).toFixed(0);
  }
}

document.addEventListener('DOMContentLoaded', event => {
  let [firstNum, secondNum, submitBtn] = document.querySelectorAll('form input');
  console.log(firstNum.value);
  console.log(secondNum.value);
  let operator = "+";
  document.querySelector('#operator').addEventListener('change', event => {
    operator = event.target.value;
    console.log(event.target.value);
  })

  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    
    let result = calculate(parseInt(firstNum.value, 10), parseInt(secondNum.value, 10), operator);
    document.querySelector('#result').textContent = String(result);
  })
})