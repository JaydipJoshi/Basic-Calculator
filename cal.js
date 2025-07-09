let digitBox = document.getElementById("digit-box");
let button = document.querySelectorAll("button");

// Button Handler
window.onload = function () {
  digitBox.focus();
};

button.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let value = btn.innerText;

    if (value === "=") {
      calculate();
      digitBox.focus();
    } else if (value === "AC") {
      digitBox.value = "";
      digitBox.focus();
    } else if (value === "C") {
      digitBox.value = "";
      digitBox.focus();
    } else if (value === "⌫") {
      digitBox.value = digitBox.value.slice(0, -1);
    } else {
      digitBox.value += value;
    }
  });
});

// Keyboard handler
document.addEventListener("keypress", function (e) {
  let allowKey = "1234567890*%/.";

  if (allowKey.includes(e.key)) {
    e.preventDefault();
    digitBox.value += e.key;
  } else if (e.key === "Enter") {
    e.preventDefault();
    calculate();
    digitBox.focus();
  } else if (e.key === "Backspace") {
    e.preventDefault();
    digitBox.value = digitBox.value.slice(0, -1);
    digitBox.focus();
  } else if (e.key === "Escape") {
    e.preventDefault();
    digitBox.value = "";
    digitBox.focus();
  } else if(e.key === "c"){
    e.preventDefault();
    digitBox.value = "";
    digitBox.focus();
  }
  else {
    e.preventDefault();
  }
});

function calculate() {
  if (digitBox.value.trim() === "") {
    return;
  }
  try {
    digitBox.value = eval(digitBox.value);
  } catch (error) {
    digitBox.value = "Error";
  }
}
