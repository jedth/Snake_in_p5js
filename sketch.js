// settings
const canvasSize = 800;
const numberOfFields = 30;
const gridSize = canvasSize / numberOfFields;

let gridArray = [];
let player = new Player();

// Variable to hold Background Stuff that shouldn't be cleared.
let backgroundGraphics;

function setup() {
  createCanvas(canvasSize, canvasSize);
  // backgroundGraphics = createGraphics(canvasSize, canvasSize);
  background(220);
  frameRate(12);
  // grid(30);
}

function draw() {
  player.playerRect(gridSize);
  fruit();
}

// draw grid
function grid(numberOfFields) {
  // draw a rectangle numberOfFields^2 times
  for (let index = 0; index < numberOfFields; index++) {
    for (let i = 0; i < numberOfFields; i++) {
      rect(0 + i * gridSize, index * gridSize, gridSize, gridSize);

      //debugging
      fill(1);
      text(i, 0 + i * gridSize, index * gridSize);
      fill(255);
    }
  }
}

// draw fruit 
function fruit() {
  let exists = true;
  let x = random(0, canvasSize);
  let y = random(0, canvasSize);
  if ((x == player.positionX) && (y == player.positionY) || (exists == false)) {
    rect(x, y, gridSize);
  }
}
