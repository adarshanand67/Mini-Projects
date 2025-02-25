const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
// some text

const counter = document.getElementById('counter');
let value = 0;
counter.innerHTML = value;
increment.onclick = function() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

decrement.onclick = function() {
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

reset.onclick = function() {
  counter.innerHTML = 0;
}
