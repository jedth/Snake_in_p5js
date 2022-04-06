let player
let canvas

function setup() {
  canvas = createVector(800, 800)
  player = new Player()
  createCanvas(canvas.x, canvas.y)
  frameRate(10)
  fill(0)
  noStroke()
}

function draw() {
  background(200)

  player.update(key)
  player.outOfBoundsSetPosition()
  player.render()
}
