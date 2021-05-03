class Thunder{
    constructor() {

        this.image1 = loadImage("thunderBolt/1.png");
        this.image2 = loadImage("thunderBolt/2.png");
        this.image3 = loadImage("thunderBolt/3.png");
        this.image4 = loadImage("thunderBolt/4.png");
      }
      display(){
          if(frameCount % 80 === 0){
            var rand = random([1,2,3,4]);
            this.thunderCreatedFrame = frameCount;
            this.thunder = createSprite(random(10,370), random(10,30),10,10);
            switch(rand){
                case 1: this.thunder.addImage(this.image1);
                break;
                case 2: this.thunder.addImage(this.image2);
                break;
                case 3: this.thunder.addImage(this.image3);
                break;
                case 4: this.thunder.addImage(this.image4);
                break;
                default: break;
            }
            this.thunder.scale = random(0.3,0.6)
        }

        if(this.thunderCreatedFrame + 10 === frameCount && this.thunder){
            this.thunder.destroy();
        }
      }
}