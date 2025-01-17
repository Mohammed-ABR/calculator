const resultInput = document.getElementById("result");

function appendValue(value) {
  if (resultInput.value === "0" || resultInput.value === "Error") {
    resultInput.value = value;
  } else {
    resultInput.value += value;
  }
}

function clearResult() {
  resultInput.value = "0";
}

function calculate() {
  try {
    resultInput.value = eval(resultInput.value.replace("÷", "/").replace("×", "*"));
    animateResult();
  } catch (error) {
    resultInput.value = "Error";
    setTimeout(() => {
      resultInput.value = "0";
    }, 1500);
  }
}

function animateResult() {
  resultInput.style.transform = "scale(1.1)";
  setTimeout(() => {
    resultInput.style.transform = "scale(1)";
  }, 150);
}