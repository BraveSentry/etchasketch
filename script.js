const container = document.querySelector(`#container`);

let pixelsY = 4;
let pixelsX = 4;

gridMaker(pixelsY, pixelsX);

function gridMaker(pixelsY, pixelsX) {

  let dimensions = String(100 / pixelsY) + "px";

  for (let i = 1; i <= pixelsY; i++) {
    for (let j = 1; j <= pixelsX; j++) {
      const div1 = document.createElement('div');

      div1.classList.add(`grid-item`);

      div1.style.width = "10px";
      div1.style.height = "10px";

      div1.style.gridArea = `${i} / ${j}`;

      div1.addEventListener("mouseover", function(){
          div1.classList.add(`hovered`);
      });
      console.log("happns")

      container.appendChild(div1);
    };
  };
};

let resetButton = document.querySelector(`#resetGrid`);
let newGridButton = document.querySelector(`#newGrid`);


newGridButton.addEventListener(`click`, function(){
  while (container.hasChildNodes()) {
    container.removeChild(container.childNodes[0]);
  };
  let numX = prompt("Please enter the width of your grid:", 4);
  while (numChecker(numX) === false) {
    numX = prompt("Please enter a number between 2 and 99.");
  }
  let numY = prompt("Please enter the width of your grid:", 4);
  while (numChecker(numY) === false) {
    numY = prompt("Please enter a number between 2 and 99.");
  }
  pixelsX = numX;
  pixelsY = numY;
  gridMaker(pixelsX, pixelsY);
});

function numChecker(num) {
  if (num > 99 || (num < 2) || isNaN(num)) {
    return false;
  }
  else {
    return true;
  };
};

function resetGrid() {
  let divs = document.querySelectorAll(`.grid-item`);
  for (let k = 0; k < divs.length; k++) {
    divs[k].classList.remove(`hovered`);
  }
};

resetButton.addEventListener(`click`, function(){
  resetGrid();
});
