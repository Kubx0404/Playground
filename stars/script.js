const colors = ["rgb(0, 187, 249)", "rgb(0, 245, 212)", "rgb(252, 254, 255)"];
const selectRandom = (colors) => {
  const index = Math.ceil(Math.random() * 3) - 1;
  return colors[index];
};
const calcDistance = (last, current) => {
  return Math.sqrt(
    Math.pow(last.x - current.x, 2) + Math.pow(last.y - current.y, 2)
  );
};
const last = {
  x: 0,
  y: 0,
};
const current = {
  x: 0,
  y: 0,
};
window.onmousemove = (ev) => {
  current.x = ev.pageX;
  current.y = ev.pageY;
  if (calcDistance(last, current) >= 100) {
    let star = document.createElement("span");
    star.className = "star";
    star.innerHTML = `✦`;
    star.style.left = `${current.x}px`;
    star.style.top = `${current.y}px`;
    star.style.color = selectRandom(colors);
    star.style.animationName = selectRandom(["fall-1", "fall-2", "fall-3"]);
    document.body.appendChild(star);
    setTimeout(() => document.body.removeChild(star), 1500);
    last.x = current.x;
    last.y = current.y;
  }
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${current.x}px`;
  dot.style.top = `${current.y}px`;
  document.body.appendChild(dot);
  setTimeout(() => document.body.removeChild(dot), 100);
};
