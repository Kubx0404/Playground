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
    y: 1,
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
let pyszard = createEntity("ryszard", "rysiu.png", 1, 135, 200);
let train = createEntity("train", "epet.png", 5, 158, 120);
// console.log(pyszard.x);
const body = document.querySelector("body");
// body.onmousemove = (e) => {
//   // console.log(window.innerWidth);
//   updateMouseCords(e);
//   // pyszard.x++;
//   // pyszard.y++;
//   pyszard.element.style.left = `${pyszard.x}px`;
//   pyszard.element.style.top = `${pyszard.y}px`;
//   if (pyszard.x + 0.5 * pyszard.width > cursor.x) {
//     pyszard.x -= pyszard.speed;
//     pyszard.element.style.transform = "scaleX(1)";
//   } else if (pyszard.x + 0.5 * pyszard.width < cursor.x) {
//     pyszard.x += pyszard.speed;
//     pyszard.element.style.transform = "scaleX(-1)";
//   }
//   if (pyszard.y + 0.5 * pyszard.height > cursor.y) {
//     pyszard.y -= pyszard.speed;
//   } else if (pyszard.y + 0.5 * pyszard.height < cursor.y) {
//     pyszard.y += pyszard.speed;
//   }
// };
let calcRandomBottom = () => {
  console.log("calcB");
  let x_move = Math.random() * 2 - 1;
  let y_move = Math.random();
  return [x_move, y_move];
};
let calcRandomTop = () => {
  console.log("calcT");

  let x_move = Math.random() * 2 - 1;
  let y_move = Math.random() - 1;
  return [x_move, y_move];
};
let calcRandomLeft = () => {
  console.log("calcL");

  let x_move = Math.random() - 1;
  let y_move = Math.random() * 2 - 1;
  return [x_move, y_move];
};
let calcRandomRight = () => {
  console.log("calcR");

  let x_move = Math.random();
  let y_move = Math.random() * 2 - 1;
  return [x_move, y_move];
};

// let firstMove = () => {
//   [x_move, y_move] = calcRandomLeft();
//   while (
//     train.x >= 0 &&
//     train.x <= window.innerWidth &&
//     train.y >= 0 &&
//     train.y <= window.innerHeight
//   ) {
//     console.log("move right");
//     train.x += x_move;
//     train.y += y_move;
//     train.element.style.left = `${train.x}px`;
//     train.element.style.top = `${train.y}px`;
//   }
// };

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const move_pyszard = () => {
  pyszard.element.style.left = `${pyszard.x}px`;
  pyszard.element.style.top = `${pyszard.y}px`;
  if (pyszard.x + 0.5 * pyszard.width > train.x) {
    pyszard.x -= pyszard.speed;
    pyszard.element.style.transform = "scaleX(1)";
  } else if (pyszard.x + 0.5 * pyszard.width < train.x) {
    pyszard.x += pyszard.speed;
    pyszard.element.style.transform = "scaleX(-1)";
  }
  if (pyszard.y + 0.5 * pyszard.height > train.y) {
    pyszard.y -= pyszard.speed;
  } else if (pyszard.y + 0.5 * pyszard.height < train.y) {
    pyszard.y += pyszard.speed;
  }
};
let stop = 0;
let moveTrain = async () => {
  while (true) {
    if (train.x < 0 && train.y < 0) {
      train.y = 10;
    } else if (train.x < 0 && train.y > window.innerHeight) {
      train.y = window.innerHeight - 10;
    } else if (train.x > window.innerWidth && train.y > window.innerHeight) {
      train.y = window.innerHeight - 10;
    } else if (train.x > window.innerWidth && train.y < 0) {
      train.y = 10;
    }
    if (train.x >= window.innerWidth) {
      [x_move, y_move] = calcRandomLeft();
      x_move = x_move * 5;
      y_move = y_move * 5;
      while (
        train.x >= 0 &&
        // train.x <= window.innerWidth &&
        train.y >= 0 &&
        train.y <= window.innerHeight
      ) {
        console.log("move left");
        train.x += x_move;
        train.y += y_move;
        train.element.style.left = `${train.x}px`;
        train.element.style.top = `${train.y}px`;
        move_pyszard();
        await sleep(1);
      }
    } else if (train.x <= 0) {
      [x_move, y_move] = calcRandomRight();
      x_move = x_move * 5;
      y_move = y_move * 5;
      while (
        // train.x >= 0 &&
        train.x <= window.innerWidth &&
        train.y >= 0 &&
        train.y <= window.innerHeight
      ) {
        console.log("move right");
        // console.log(x_move, y_move);
        train.x += x_move;
        train.y += y_move;
        train.element.style.left = `${train.x}px`;
        train.element.style.top = `${train.y}px`;
        move_pyszard();
        await sleep(1);
      }
    } else if (train.y >= window.innerHeight) {
      [x_move, y_move] = calcRandomTop();
      x_move = x_move * 5;
      y_move = y_move * 5;
      while (
        train.x >= 0 &&
        train.x <= window.innerWidth &&
        train.y >= 0
        // &&
        // train.y <= window.innerHeight
      ) {
        console.log("move top");
        // console.log(x_move, y_move);
        train.x += x_move;
        train.y += y_move;
        train.element.style.left = `${train.x}px`;
        train.element.style.top = `${train.y}px`;
        move_pyszard();
        await sleep(1);
      }
    } else if (train.y <= 0) {
      [x_move, y_move] = calcRandomBottom();
      x_move = x_move * 5;
      y_move = y_move * 5;
      while (
        train.x >= 0 &&
        train.x <= window.innerWidth &&
        // train.y >= 0 &&
        train.y <= window.innerHeight
      ) {
        console.log("move bottom");
        // console.log(x_move, y_move);
        train.x += x_move;
        train.y += y_move;
        train.element.style.left = `${train.x}px`;
        train.element.style.top = `${train.y}px`;
        move_pyszard();
        await sleep(1);
      }
    }
    console.log(train.x, window.innerWidth, train.y, window.innerHeight);
    stop++;
  }
};
// setInterval(moveTrain(), 1000);
moveTrain();
// firstMove();
// moveTrain();

// while (true) {
//   moveTrain();
// }
