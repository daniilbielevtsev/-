const firstFilt = document.querySelector("#firstNumber");
const secondFilt = document.querySelector("#secondNumber");
const actionSelect = document.querySelector("#action");
const equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", () => {
  const firstNumber = parseFloat(firstFilt.value);
  const secoundNumber = parseFloat(secondFilt.value);
  const action = actionSelect.value;
  let result;

  switch (action) {
    case "+":
      result = firstNumber + secoundNumber;
      break;
    case "-":
      result = firstNumber - secoundNumber;
      break;
    case "*":
      result = firstNumber * secoundNumber;
      break;
    case "/":
      if (secoundNumber === 0) {
        alert("На нуль ділити на можна!!!");
        return;
      }
      result = firstNumber / secoundNumber;
      break;
    default:
      alert("Операція не вірна!!!");
  }
  alert("serult: " + result);
});
