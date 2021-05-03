class Drops {
  constructor(x, y, radius, height) {
    var options = {
      isStatic: false,
      'restitution': 0.1,
      'friction': 0.001
    }
    this.rain = Bodies.circle(x, y, 5, options);
    this.x = x;
    this.y = y;
    this.height = height;
    this.radius = radius;

    World.add(world, this.rain);
  }

  display() {
    fill("blue");
    ellipseMode(CENTER);
    if (this.rain.position.y > this.height) {
      Matter.Body.setPosition(this.rain, { x: this.x, y: this.y });
    }
    ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.body);

  }

}
