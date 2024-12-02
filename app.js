function addValue(val) {
  const display = document.getElementById("calcDisplay");
  display.value += val;
}

function clearDisplay() {
  const display = document.getElementById("calcDisplay");
  display.value = "";
}

function computeResult() {
  const display = document.getElementById("calcDisplay");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function disableCalculator() {
  const display = document.getElementById("calcDisplay");
  const buttons = document.querySelectorAll(".calc-btn");
  display.value = "";
  buttons.forEach((btn) => btn.setAttribute("disabled", true));
  document
    .querySelector("button[onclick='enableCalculator()']")
    .removeAttribute("disabled");
}

function enableCalculator() {
  const display = document.getElementById("calcDisplay");
  const buttons = document.querySelectorAll(".calc-btn");
  display.value = "0";
  buttons.forEach((btn) => btn.removeAttribute("disabled"));
}
