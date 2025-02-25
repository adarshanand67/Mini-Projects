btn = document.getElementById("toggle");
// console.log(btn);

// local storage - apply the cached theme on reload
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  btn.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btn.classList.remove("active");
}

btn.addEventListener("click", function () {
  console.log(document.body.classList);
  if (document.body.classList[0] === "dark") {
    document.body.classList.replace("dark", "light");
    btn.classList.replace("active", "inactive");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.replace("light", "dark");
    btn.classList.replace("inactive", "active");
    localStorage.setItem("theme", "dark");
  }
});
