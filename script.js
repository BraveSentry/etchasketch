const container = document.querySelector(`#container`);

let pixels = 16;

let dimensions = String(100 / pixels) + "px";

for (i = 1; i <= pixels; i++) {
  for (j = 1; j <= pixels; j++) {
    const div1 = document.createElement('div');

    div1.classList.add(`grid-item`);

    div1.style.width = "10px";
    div1.style.height = "10px";

    div1.style.gridArea = `${i} / ${j}`;

    let diver = document.querySelector('.grid-item')

    div1.addEventListener("mouseover", function(){
        div1.classList.add(`hovered`);
    });

    container.appendChild(div1);
  };
};
