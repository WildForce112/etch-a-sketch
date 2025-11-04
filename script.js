const div = document.createElement('div');
div.className = "gridContainer";
div.style = "width: 80vh; aspect-ratio: 1 / 1; display: flex; flex-direction: column; border-style: solid; border-width: 2px"
function createGrid(gridSize){
  for (let i = 0; i < gridSize; i++){
    const divContainer = document.createElement('div');
    divContainer.setAttribute("style", "display: flex; flex: 1");
    for (let j = 0; j < gridSize; j++) {
      const divElement = document.createElement('div');
      divElement.className = "cell";
      divElement.setAttribute("style", 
        "flex: 1; aspect-ratio: 1 / 1; display: flex; justify-content: center; align-items: center; border-style: solid; border-width: 1px");
      divElement.style.opacity = 0;
      divContainer.appendChild(divElement);
    }
    div.appendChild(divContainer);
  }
}
function getRandomRgbColor(opacity) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

createGrid(16);

div.addEventListener('mouseover', (e) => {
  const target = e.target;

  if(target.classList.contains('cell')) {
    target.style.backgroundColor = getRandomRgbColor(target.style.opacity);
    target.style.opacity = parseFloat(target.style.opacity) + 0.1;
  }
})

document.body.appendChild(div);

const sizeBtn = document.body.querySelector('.quare-size-button');
sizeBtn.addEventListener('click', (e) => {
  const sizeInput = prompt("Please input square size:");
  const size = parseInt(sizeInput);
  if (isNaN(size)) alert("This is not a number");
  else if (size <= 0 || size > 100) alert("Number is either too large or negative");
  else {
    div.textContent = null;
    createGrid(size);
  }
})