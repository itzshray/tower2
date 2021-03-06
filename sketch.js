const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world
var ground
var polygon, polyygonIMG
var sling

function preload(){
    polygonIMG=loadImage("polygon.png")
}

function setup(){
createCanvas(1200,600)

engine= Engine.create();
world= engine.world;
polygon=Bodies.circle(200,200,40)
World.add(world,polygon)
sling=new Slingshot(this.polygon,{x:200,y:180})
ground= new Ground(600,580,1200,20)
ground1= new Ground(600,400,200,10)
ground2= new Ground(900,200,200,10)
block1= new Box(520,380,30,40)
block2= new Box(550,380,30,40)
block3= new Box(580,380,30,40)
block4= new Box(610,380,30,40)
block5= new Box(640,380,30,40)
block6= new Box(670,380,30,40)

block7= new Box(535,340,30,40)
block8= new Box(565,340,30,40)
block9= new Box(595,340,30,40)
block10= new Box(625,340,30,40)
block11= new Box(655,340,30,40)

block12= new Box(550,300,30,40)
block13= new Box(580,300,30,40)
block14= new Box(610,300,30,40)
block15= new Box(640,300,30,40)

block16=new Box(840,180,40,50)
block17=new Box(880,180,40,50)
block18=new Box(920,180,40,50)
block19=new Box(960,180,40,50)

block20=new Box(860,130,40,50)
block21=new Box(900,130,40,50)
block22=new Box(940,130,40,50)

block23=new Box(880,80,40,50)
block24=new Box(920,80,40,50)

block25=new Box(570,260,30,40)
block26=new Box(600,260,30,40)
block27=new Box(630,260,30,40)

}

function draw(){
    background(0)
    Engine.update(engine)
    ground.display();
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    sling.display();
    imageMode(CENTER)
    image(polygonIMG,polygon.position.x,polygon.position.y,40,40)



}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
 sling.fly();
}

function keyPressed(){
    if (keyCode===32){
    sling.attach(this.polygon)
    }
}