class WalkingMan {
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic': true,
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y - 50, 55, options);
        this.imageIndex = 0;
        this.images = [];
        this.images.push(loadImage("WalkingFrame/walking_1.png"));
        this.images.push(loadImage("WalkingFrame/walking_2.png"));
        this.images.push(loadImage("WalkingFrame/walking_3.png"));
        this.images.push(loadImage("WalkingFrame/walking_4.png"));
        this.images.push(loadImage("WalkingFrame/walking_5.png"));
        this.images.push(loadImage("WalkingFrame/walking_6.png"));
        this.images.push(loadImage("WalkingFrame/walking_7.png"));
        this.images.push(loadImage("WalkingFrame/walking_8.png"));


        World.add(world, this.body);
    }
    display() {
        if (frameCount % 10 === 0) {
            this.imageIndex++
        }
        if (this.imageIndex > 7) {
            this.imageIndex = 0;
        }
        var angle = this.body.angle;

        imageMode(CENTER);
        image(this.images[this.imageIndex], this.x, this.y, this.width, this.height);


    }
}