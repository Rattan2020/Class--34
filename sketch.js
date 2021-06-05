
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;


var engine,world;
var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11;
var block12,block13,block14,block15,block16,block17,block18,block19,block20;
var ball;
var rope;

function setup(){

createCanvas(1500,800);

engine=Engine.create()
world=engine.world;

ground=new Ground(750,790,1500,20);


block1=new Block(900,100,80,80);
block2=new Block(900,100,80,80);
block3=new Block(900,100,80,80);
block4=new Block(900,100,80,80);
block5=new Block(900,100,80,80);
block6=new Block(900,100,80,80);

block7=new Block(800,100,80,80);
block8=new Block(800,100,80,80);
block9=new Block(800,100,80,80);
block10=new Block(800,100,80,80);
block11=new Block(800,100,80,80);
block12=new Block(800,100,80,80);

block13=new Block(700,100,80,80);
block14=new Block(700,100,80,80);
block15=new Block(700,100,80,80);
block16=new Block(700,100,80,80);
block17=new Block(700,100,80,80);
block18=new Block(700,100,80,80);

block19=new Block(800,100,80,80);
block20=new Block(800,100,80,80);

ball=new Ball(400,200,20);

rope=new Rope(ball.body,{x:400,y:50})
}


function draw(){

  background("skyBlue");

Engine.update(engine);



ground.display();
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
ball.display();
rope.display();
}


function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  
}

