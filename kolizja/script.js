const createEntity = (name, width = 100, height = 100) => {
  let element_ = document.createElement("img");
  element_.src = "rysiu.png";
  document.querySelector("body").appendChild(element_);
  element_.className = "entity";
  element_.className += " " + name;
  let entity = {
    element: element_,
    x: 0,
    y: 0,
    width: width,
    height: height,
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
let pyszard = createEntity("ryszard", 135, 200);
// let train = createEntity();
// console.log(pyszard.x);
const body = document.querySelector("body");
body.onmousemove = (e) => {
  updateMouseCords(e);
  // pyszard.x++;
  // pyszard.y++;
  pyszard.element.style.left = `${pyszard.x}px`;
  pyszard.element.style.top = `${pyszard.y}px`;
  if (pyszard.x + 0.5 * pyszard.width > cursor.x) {
    pyszard.x -= 5;
    pyszard.element.style.transform = "scaleX(1)";
  } else if (pyszard.x + 0.5 * pyszard.width < cursor.x) {
    pyszard.x += 5;
    pyszard.element.style.transform = "scaleX(-1)";
  }
  if (pyszard.y + 0.5 * pyszard.height > cursor.y) {
    pyszard.y -= 5;
  } else if (pyszard.y + 0.5 * pyszard.height < cursor.y) {
    pyszard.y += 5;
  }
};
