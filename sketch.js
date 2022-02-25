let snakeLength = 0

const Direction = {
  Default: "default",
  Up: "up",
  Left: "left",
  Down: "down",
  Right: "right",
}

Direction.freeze()

function setup() {
  createCanvas(windowWidth, windowHeight)
  rect(200, 200, 200)
}

function draw() {
  background(230)
  text(key, 33, 65)
}

function playerInput(key) {
  switch (key) {
    case "w":
      return "up"
    case "a":
      return "left"
    case "s":
      return "down"
    case "d":
      return "right"
    case "ArrowUp":
      return "up"
    case "ArrowLeft":
      return "left"
  }
}
