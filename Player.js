class Player {
  positionX = canvasSize / 2;
  positionY = canvasSize / 2;

  constructor() {
    // if (this.positionX < 0 || this.positionY > 10) {
    //   this.positionX = 0;
    //   this.positionY = 0;
    // }
  }

  movement() {
    switch (key) {
      case value:
        break;

      default:
        break;
    }
  }

  playerRect(gridSize) {
    let stepSize = gridSize;
    switch (key) {
      case "w":
        this.positionY -= stepSize;
        break;
      case "a":
        this.positionX -= stepSize;
        break;
      case "s":
        this.positionY += stepSize;
        break;
      case "d":
        this.positionX += stepSize;
        break;
    }
    clear();
    fill(0);
    rect(this.positionX, this.positionY, gridSize, gridSize);
    if (key == "w" || key == "s") {
      return this.positionY;
    } else {
      return this.positionX;
    }
  }
}
