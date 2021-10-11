const World= Matter.World
const Engine= Matter.Engine
const Body= Matter.Body
const Bodies = Matter.Bodies

var engine,world

function preload(){
  
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
 engine=Engine.create()
 world = engine.world
 ball1 =new Ball(400,200,40,40)
 blower1= new Blower(300,200,100,30)
 blowerMouth1= new Blowermouth(400,220,100,90)
 button=createButton("click to blow")
 button.position(400,300)
 button.mousePressed(blow)
}

function draw() {
  background(255,255,255);  
 ball1.display()
 blower1.display()
 Engine.update(engine)

}
 function blow(){
   Matter.Body.applyForce(ball1.body,{x:0,y:0},{x:0,y:0.05})
 }