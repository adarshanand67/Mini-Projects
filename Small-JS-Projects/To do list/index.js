const add_item = document.getElementById("add-item");
const values = document.getElementById("values");
var cnt = 0;
add_item.addEventListener("click", addItem);
function addItem() {
  let item = document.getElementById("task").value;
  let li = document.createElement("div");
  cnt++;
  li.innerHTML = `
  <div class="text-left">
  <span>${cnt}-${item}</span>
  <button class="delete btn btn-danger mx-5" id ="delete">X</button>
  </div>`;

  // style li element
  li.style.listStyleType = "none";
  li.style.padding = "10px";
  li.style.margin = "10px";
  li.style.borderRadius = "10px";
  // li.style.fontSize = "20px";
  values.appendChild(li);
}

values.addEventListener("click", deleteItem);

function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    // if the target is the delete button
    e.target.parentElement.remove(); // remove the parent element
    // delete div
    e.target.parentElement.remove();
    cnt--;
  }
}
