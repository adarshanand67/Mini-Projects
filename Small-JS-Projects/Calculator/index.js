const input = document.querySelector("#input");

function addNumber(number) {
  input.value += number;
}

function addOperator(operator) {
  input.value += operator;
}
function calculate() {
  input.value = eval(input.value);
}

function clearInput() {
  input.value = "";
}


//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    input.value += "0";
  } else if (e.key === "1") {
    input.value += "1";
  } else if (e.key === "2") {
    input.value += "2";
  } else if (e.key === "3") {
    input.value += "3";
  } else if (e.key === "4") {
    input.value += "4";
  } else if (e.key === "5") {
    input.value += "5";
  } else if (e.key === "6") {
    input.value += "6";
  } else if (e.key === "7") {
    input.value += "7";
  } else if (e.key === "7") {
    input.value += "7";
  } else if (e.key === "8") {
    input.value += "8";
  } else if (e.key === "9") {
    input.value += "9";
  }

  //operators
  if (e.key === "+") {
    input.value += "+";
  } else if (e.key === "-") {
    input.value += "-";
  } else if (e.key === "*") {
    input.value += "*";
  } else if (e.key === "/") {
    input.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    input.value += ".";
  }

  //pinputs enter to see inputult
  if (e.key === "Enter") {
    calculate(input.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const inputultInput = input.value;
    //remove the last element in the string
    input.value = inputultInput.substring(0, input.value.length - 1);
  }
}
