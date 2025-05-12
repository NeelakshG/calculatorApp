const buttonEl = document.querySelectorAll("button"); //returns all <button> elements in the document
const inputField = document.getElementById("result");

for (let i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener("click", () => {
    const buttonValue = buttonEl[i].textContent;

    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputField.value = "";
}

function calculateResult() {
  inputField.value = eval(inputField.value);
}

function appendValue(buttonValue) {
  inputField.value += buttonValue;
}
