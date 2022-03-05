let canvas
let player

function setup() {
  canvas = createVector(800, 800)
  player = new Player(canvas.x, canvas.y)
  createCanvas(canvas.x, canvas.y)
  frameRate(10)
  fill(0)
  noStroke()
}

function draw() {
  background(200)

  player.update(key)
  player.render()
}

/**
 *
 * @param {x of canvas} x
 * @param {y of canvas} y
 * @returns
 */
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
