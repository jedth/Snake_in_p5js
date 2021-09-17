class Player {
  rectX = 400;
  rectY = 400;

  constructor() {
    let test = "test";
    console.log(test);
  }

  playerRect() {
    let speed = 3;
    switch (key) {
      case "w":
        this.rectY = this.rectY - speed;
        break;
      case "a":
        this.rectX = this.rectX - speed;
        break;
      case "s":
        this.rectY = this.rectY + speed;
        break;
      case "d":
        this.rectX = this.rectX + speed;
        break;
    }
    clear();
    rect(this.rectX, this.rectY, 40, 40);
    if (key == "w" || key == "s") {
      return this.rectY;
    } else {
      return this.rectX;
    }
  }
}
