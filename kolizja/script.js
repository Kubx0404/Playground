const createEntity = (name, src, speed = 5, width = 100, height = 100) => {
  let element_ = document.createElement("img");
  element_.src = src;
  document.querySelector("body").appendChild(element_);
  element_.className = "entity";
  element_.className += " " + name;
  element_.style.width = width + "px";
  element_.style.height = height + "px";

  let entity = {
    element: element_,
    x: 0,
    y: 0,
    width: width,
    height: height,
    speed: speed,
  };

  //   entity.element.height = `${pyszard.height}px`;
  //   entity.element.width = `${pyszard.width}px`;

  return entity;
};
const updateMouseCords = (e) => {
  cursor.x = e.pageX;
  cursor.y = e.pageY;
};

let cursor = {
  x: 0,
  y: 0,
};
let pyszard = createEntity("ryszard", "rysiu.png", 5, 135, 200);
let train = createEntity("train", "train.png", 5, 158, 120);
// console.log(pyszard.x);
const body = document.querySelector("body");
body.onmousemove = (e) => {
  // console.log(window.innerWidth);
  updateMouseCords(e);
  // pyszard.x++;
  // pyszard.y++;
  pyszard.element.style.left = `${pyszard.x}px`;
  pyszard.element.style.top = `${pyszard.y}px`;
  if (pyszard.x + 0.5 * pyszard.width > cursor.x) {
    pyszard.x -= pyszard.speed;
    pyszard.element.style.transform = "scaleX(1)";
  } else if (pyszard.x + 0.5 * pyszard.width < cursor.x) {
    pyszard.x += pyszard.speed;
    pyszard.element.style.transform = "scaleX(-1)";
  }
  if (pyszard.y + 0.5 * pyszard.height > cursor.y) {
    pyszard.y -= pyszard.speed;
  } else if (pyszard.y + 0.5 * pyszard.height < cursor.y) {
    pyszard.y += pyszard.speed;
  }
};
setInterval(moveTrain(), 10);
let moveTrain = () => {
  if (train.x >= window.innerWidth) {
    while (train.x > 0 && train.y > 0 && train.y < window.innerHeight) {
      moveRandomLeft();
    }
  }
  if (train.x <= 0) {
    while (
      train.x < window.innerWidth &&
      train.y > 0 &&
      train.y < window.innerHeight
    ) {
      moveRandomRight();
    }
  }

  if (train.y >= window.innerHeight) {
    while (train.x > 0 && train.y > 0 && train.y < window.innerHeight) {
      moveRandomLeft();
    }
  }
  if (train.y <= 0) {
    while (
      train.x < window.innerWidth &&
      train.y > 0 &&
      train.y < window.innerHeight
    ) {
      moveRandomRight();
    }
  }
};
