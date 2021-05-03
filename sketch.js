const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops = 200;
var drops = [];
var engine,world;
var walkingManObj;

function setup(){
    engine = Engine.create();
    world = engine.world;
    
    createCanvas(400,600);

    walkingManObj = new WalkingMan(200,495,300,250);
    thunder = new Thunder();
    for(var i = 0; i < maxDrops; i++){
        drops.push(new Drops(random(0,390), random(0,300), 5, 600));
    }
}

function draw(){
    Engine.update(engine);
    background(0);
    walkingManObj.display();

    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
    }
    thunder.display();
    drawSprites();
}   

 