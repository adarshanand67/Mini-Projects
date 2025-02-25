var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

// typedjs
var typed = new Typed(typedjs, {
  strings: [
    "Web Developer",
    "Web Designer",
    "Cloud Engineer",
    "Data Scientist",
    "Data Engineer",
    "Full Stack Developer",
    "Full Stack Designer",
    "Backend Developer",
    "Frontend Designer",
  ],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true,
  showCursor: false,
  startDelay: 1000,
  backDelay: 1000,
  loopCount: Infinity,
});

// Mouse tracking
window.addEventListener("mousemove", (e) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  // 2 decimal places
  x = x.toFixed(2);
  y = y.toFixed(2);
  console.log(x, y);

  const cursor = document.getElementById("cursor");
  let something = document.createElement("h1");
  something.innerHTML = `Mouse position:  ->(${x},${y})`;
  // RGB value
  cursor.removeChild(cursor.firstChild); // remove the first child
  cursor.appendChild(something); // append the new child
});

// AOS
AOS.init();
