class Pipe {
  constructor() {
    let spacing = random(50, height / 4);
    let centery = random(spacing, height - spacing);

    this.top = centery - spacing / 2;
    this.bottom = height - (centery + spacing / 2);
    this.x = width;
    this.w = 20;
    this.speed = 2;
    this.passed = false;
  }

  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true;
      }
    }

    return false;
  }

  pass(bird) {
    if (bird.x > this.x && !this.passed) {
      this.passed = true;
      return true;
    }
    return false;
  }

  show() {
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offScreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}