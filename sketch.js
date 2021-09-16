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

  for (let i = 0; i < numberOfFields; i++) {
    // const element = grid[i];
    grid[i] = rect(0 + i * gridSize, 0, gridSize, gridSize);
  }



}
