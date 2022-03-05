class Player {
  // length array (with previous positions)

  constructor(canvasX, canvasY) {
    this.size = createVector(20, 20)
    this.pos = createVector(canvasX / 2, canvasY / 2)
  }

  update = (key) => {
    switch (key) {
      case "ArrowUp":
      case "w":
        this.pos.y -= this.size.y
        break
      case "ArrowLeft":
      case "a":
        this.pos.x -= this.size.x
        break
      case "ArrowDown":
      case "s":
        this.pos.y += this.size.y
        break
      case "ArrowRight":
      case "d":
        this.pos.x += this.size.x
        break
    }
  }

  render = () => {
    rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
  }
}
