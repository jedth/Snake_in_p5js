let player = new Player();

function setup() {
  createCanvas(800, 800);
  background(220);
  // frameRate(10);
}

function draw() {
  grid(2);
  // player.playerRect();
}

function grid(numberOfFields) {
  const gridSize = 800 / numberOfFields;
  let isPlayer = [];
  // draw a rectangle numberOfFields^2 times
  for (let index = 0; index < numberOfFields; index++) {
    for (let i = 0; i < numberOfFields; i++) {
      isPlayer[i] = rect(
        0 + i * gridSize,
        index * gridSize,
        gridSize,
        gridSize
      );
      // console.log(isPlayer);
    }
  }
}
