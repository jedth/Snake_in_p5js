function setup() {
  createCanvas(800, 800);
  background(220);
}

function draw() {
  grid(10);
}

function grid(numberOfFields) {
  let grid = [];
  const gridSize = 800 / numberOfFields;


  // draw a rectangle numberOfFields^2 times
  for (let index = 0; index < numberOfFields; index++) {
    for (let i = 0; i < numberOfFields; i++) {
      grid[i] = rect(0 + i * gridSize, index * gridSize, gridSize, gridSize);
    }
  }
}
