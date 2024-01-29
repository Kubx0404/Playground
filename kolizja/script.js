const createEntity = (height = 100, width = 100) => {
  let element_ = document.createElement("div");
  document.querySelector("body").appendChild(element_);
  element_.className = "entity";
  let entity = {
    element: element_,
    x: 0,
    y: 0,
    height: height,
    width: width,
  };

  //   entity.element.height = `${pyszard.height}px`;
  //   entity.element.width = `${pyszard.width}px`;

  return entity;
};

let pyszard = createEntity();
console.log(pyszard.x);

window.onmousemove = () => {
  pyszard.x++;
  pyszard.element.style.left = `${pyszard.x}px`;
  console.log(pyszard.x);
};
