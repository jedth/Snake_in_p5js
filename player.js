class Player {
  // length array (with previous positions)
  size
  pos

  constructor() {
    this.size = createVector(20, 20)
    this.pos = createVector(canvas.x / 2, canvas.y / 2)
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

  /**
   * checks if player is still in range
   */
  outOfBounds = () => {
    switch (this.pos.x) {
      case this.pos.x < 0 || this.pos.x + this.size.x > canvas.x:
        return false
      case this.pos.y < 0 || this.pos.y + this.size.y > canvas.y:
        return false
      default:
        return true
    }
  }

  outOfBoundsSetPosition = () => {
    console.log(this.pos.x)
    switch (this.pos) {
      // x is to small
      case this.pos.x < 0:
        this.pos.x = canvas.x - this.size.x
        console.log("setting x")
        break
      // x is to big
      case this.pos.x > canvas.x - this.size.x:
        console.log("setting x")
        this.pos.x = 0
        break
      case this.pos.y < 0:
        console.log("setting y")
        this.pos.y = canvas.y - this.size.y
        break
      // x is to big
      case this.pos.y > canvas.y - this.size.y:
        console.log("setting y")
        this.pos.y = 0
        break

      default:
        break
    }
  }

  render = () => {
    rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
  }
}
