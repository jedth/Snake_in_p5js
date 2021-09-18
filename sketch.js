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
  backgroundGraphics = createGraphics(canvasSize, canvasSize);
  background(220);
  frameRate(12);
  backgroundGraphics = grid(30);
}

function draw() {
  player.playerRect(gridSize);
  fruit();
}

function grid(numberOfFields) {
  // draw a rectangle numberOfFields^2 times
  for (let index = 0; index < numberOfFields; index++) {
    for (let i = 0; i < numberOfFields; i++) {
      if (index == player.positionY && i == player.positionX) {
        fill(150);
        rect(0 + i * gridSize, index * gridSize, gridSize, gridSize);
      } else {
        fill(255);
        rect(0 + i * gridSize, index * gridSize, gridSize, gridSize);
      }
      // rect(0 + i * gridSize, index * gridSize, gridSize, gridSize);

      //debugging
      fill(1);
      text(i, 0 + i * gridSize, index * gridSize);
      fill(255);
    }
  }
}

function fruit() {
  let x = random(0, canvasSize);
  let y = random(0, canvasSize);
  rect(x, y, gridSize);
}
