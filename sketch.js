// static game properties
const canWidth = 800
const canHeight = 800

const playerWidth = 20
const playerHeight = 20

// dynamic game properties
let playerX, playerY
playerX = canWidth / 2
playerY = canHeight / 2

let snakeLength = 8

function setup() {
  createCanvas(canWidth, canHeight)
  frameRate(5)
  fill(0)
}

function draw() {
  background(200)
  for (let i = 0; i < snakeLength; i++) {
    text(playerInput(key), 33, 65)
    // player input
    if (playerInput(key) === "up" || playerInput(key) === "down")
      playerY = position(playerY, playerInput(key))
    else playerX = position(playerX, playerInput(key))
    // TODO: find way to diferentiate between where the player is out of ranger to
    // add the right amount to player position
    if (inRange(playerX, playerY)) playerX
    // player render
    rect(playerX, playerY, playerWidth, playerHeight)
  }
}

function inRange(playerX, playerY) {
  switch (playerX) {
    case playerX < 0 || playerX + playerWidth > canWidth:
      return false
    case playerY < 0 || playerY + playerHeight > canHeight:
      return false
    default:
      return true
  }
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
      return pos - playerHeight
    case "left":
      return pos - playerWidth
    case "down":
      return pos + playerHeight
    case "right":
      return pos + playerWidth
    case "stop":
      return pos
  }
}

function render() {}
