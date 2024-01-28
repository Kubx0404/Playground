const container = document.querySelector(".container");
const box = document.querySelector(".box");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let pageX = 0;
let pageY = 0;
let is_in = false;
function update_mouse_cords(ev) {
  pageX = ev.pageX;
  pageY = ev.pageY;
}
function print_cursor_cords() {
  if (is_in) {
    console.log(pageX, pageY);
    timer = setTimeout(print_cursor_cords, 5);
    let star = document.createElement("span");
    // let star = document.createElement("img");
    // star.setAttribute("src", "dzioba.png");

    star.innerHTML = "&starf;";
    // star.innerHTML = "star";

    star.className = "star";
    star.className += " star_animation_" + (getRandomInt(3) + 1);
    // star.className += " star_animation_1";
    let cords_multiplier = 1 + 0.015 * (Math.random() * 2 - 1);
    // let translateX_rand = (Math.random() * 2 - 1) * 100;
    // document.documentElement.style.setProperty(
    //   "--translate-x-2",
    //   translateX_rand / 2 + "px"
    // );
    // document.documentElement.style.setProperty(
    //   "--translate-x-3",
    //   translateX_rand + "px"
    // );

    // console.log(cords_multiplier);
    star.style.left = (pageX - 24) * cords_multiplier + "px";
    star.style.top = (pageY - 33.75) * cords_multiplier + "px";

    // star.style.top = `${Math.random() * (pageY - 33.75)}px`;
    // star.style.left = `${Math.random() * (pageX - 24)}px`;

    container.appendChild(star);
    setTimeout(() => {
      container.removeChild(star);
    }, Math.random() * 3000);
  } else {
    console.log("przerwano");
  }
}

function enter_container() {
  console.log("enter");
  is_in = true;
  print_cursor_cords();
}

function exit_container() {
  console.log("exit");
  is_in = false;
}

box.addEventListener("mousemove", update_mouse_cords);
box.addEventListener("mouseenter", enter_container);
box.addEventListener("mouseout", exit_container);
