// static game properties
// const canvas = createVector(800, 800)

let playerSize

// dynamic game properties
let playerPos

let snakeLength = 1 // use an array instead and then just use len attribute

function setup() {
  createCanvas(canvas.x, canvas.y)
  frameRate(5)
  fill(0)
  playerSize = createVector(20, 20)
  playerPos = createVector(canvas.x / 2, canvas.y / 2)
}

function draw() {
  background(200)
  text(playerInput(key), 33, 65) // for debugging

  // player input
  if (playerInput(key) === "up" || playerInput(key) === "down")
    playerY = position(playerY, playerInput(key))
  else playerX = position(playerX, playerInput(key))
  // TODO: find way to diferentiate between where the player is out of ranger to
  // add the right amount to player position
  if (!inRange(playerX, playerY)) {
    if (playerX < 0) {
      playerX += canvas.x
    }
  }
  // player render
  rect(playerX, playerY, playerSize.x, playerSize.y)
}

/// check if the player ist still on the field
function inRange(x, y) {
  switch (x) {
    case x < 0 || x + playerSize.x > canvas.x:
      return false
    case y < 0 || y + playerSize.y > canvas.y:
      return false
    default:
      return true
  }
}

/// reads player input and returns direction
function playerInput(key) {
  // TODO: change strings to p5js constants
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
    case "ArrowDown":
      return "down"
    case "ArrowRight":
      return "right"
    default:
      return "stop"
  }
}

function position(pos, inp) {
  // pos = playerXY // inp = up | left | down | right
  switch (inp) {
    case "up":
      return pos - playerSize.y
    case "left":
      return pos - playerSize.x
    case "down":
      return pos + playerSize.y
    case "right":
      return pos + playerSize.x
    case "stop":
      return pos
  }
}
