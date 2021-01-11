const container = document.querySelector(`#container`);

let pixelsX = 4;
let pixelsY = 4;

let dimensions = String(100 / pixels) + "px";

for (i = 1; i <= pixelsX; i++) {
  for (j = 1; j <= pixelsY; j++) {
    const div1 = document.createElement('div');

    div1.classList.add(`grid-item`);

    div1.style.width = "10px";
    div1.style.height = "10px";

    div1.style.gridArea = `${i} / ${j}`;

    div1.addEventListener("mouseover", function(){
        div1.classList.add(`hovered`);
    });

    container.appendChild(div1);
  };
};

let button = document.querySelector(`#resetGrid`);

let divs = document.querySelectorAll(`div`);

button.addEventListener(`click`, function(){
  for (let k = 0; k < divs.length; k++) {
    divs[k].classList.remove(`hovered`);
  }
});
