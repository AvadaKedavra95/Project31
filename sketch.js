const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;


var engine,world;
var ball = [];






function preload(){
    bg=loadImage("bg.jpg")
}

function setup() {
  createCanvas(1000,500);







  engine=Engine.create();
  world=engine.world;

  ground = new Boundary(500,480,1000,20);
  boundary1 = new Boundary(0,420,20,100);
  boundary2 = new Boundary(200,420,20,100);
  boundary3 = new Boundary(400,420,20,100);
  boundary4 = new Boundary(600,420,20,100);
  boundary5 = new Boundary(800,420,20,100);
  boundary10 = new Boundary(100,420,20,100);
  boundary20 = new Boundary(300,420,20,100);
  boundary30 = new Boundary(500,420,20,100);
  boundary40 = new Boundary(700,420,20,100);
  boundary50 = new Boundary(900,420,20,100);
  boundary6 = new Boundary(1000,420,20,100);



 

  plinko1 = new Plinko(50,50);
  plinko2 = new Plinko(100,50);
  plinko3 = new Plinko(150,50);
  plinko4 = new Plinko(200,50);
  plinko5 = new Plinko(250,50);
  plinko6 = new Plinko(300,50);
  plinko7 = new Plinko(350,50);
  plinko8 = new Plinko(400,50);
  plinko9 = new Plinko(450,50);
  plinko10 = new Plinko(500,50);
  plinko11 = new Plinko(550,50);
  plinko12 = new Plinko(600,50);
  plinko13 = new Plinko(650,50);
  plinko14 = new Plinko(700,50);
  plinko15 = new Plinko(750,50);
  plinko16 = new Plinko(800,50);
  plinko17 = new Plinko(850,50);
  plinko18 = new Plinko(900,50);
  plinko19 = new Plinko(950,50);

  l2plinko0 = new Plinko(25,100);
  l2plinko1 = new Plinko(75,100);
  l2plinko2 = new Plinko(125,100);
  l2plinko3 = new Plinko(175,100);
  l2plinko4 = new Plinko(225,100);
  l2plinko5 = new Plinko(275,100);
  l2plinko6 = new Plinko(325,100);
  l2plinko7 = new Plinko(375,100);
  l2plinko8 = new Plinko(425,100);
  l2plinko9 = new Plinko(475,100);
  l2plinko10 = new Plinko(525,100);
  l2plinko11 = new Plinko(575,100);
  l2plinko12 = new Plinko(625,100);
  l2plinko13 = new Plinko(675,100);
  l2plinko14 = new Plinko(725,100);
  l2plinko15 = new Plinko(775,100);
  l2plinko16 = new Plinko(825,100);
  l2plinko17 = new Plinko(875,100);
  l2plinko18 = new Plinko(925,100);
  l2plinko19 = new Plinko(975,100);

  l3plinko1 = new Plinko(50,150);
  l3plinko2 = new Plinko(100,150);
  l3plinko3 = new Plinko(150,150);
  l3plinko4 = new Plinko(200,150);
  l3plinko5 = new Plinko(250,150);
  l3plinko6 = new Plinko(300,150);
  l3plinko7 = new Plinko(350,150);
  l3plinko8 = new Plinko(400,150);
  l3plinko9 = new Plinko(450,150);
  l3plinko10 = new Plinko(500,150);
  l3plinko11 = new Plinko(550,150);
  l3plinko12 = new Plinko(600,150);
  l3plinko13 = new Plinko(650,150);
  l3plinko14 = new Plinko(700,150);
  l3plinko15 = new Plinko(750,150);
  l3plinko16 = new Plinko(800,150);
  l3plinko17 = new Plinko(850,150);
  l3plinko18 = new Plinko(900,150);
  l3plinko19 = new Plinko(950,150);

l4plinko0 = new Plinko(25,200);
l4plinko1 = new Plinko(75,200);
l4plinko2 = new Plinko(125,200);
l4plinko3 = new Plinko(175,200);
l4plinko4 = new Plinko(225,200);
l4plinko5 = new Plinko(275,200);
l4plinko6 = new Plinko(325,200);
l4plinko7 = new Plinko(375,200);
l4plinko8 = new Plinko(425,200);
l4plinko9 = new Plinko(475,200);
l4plinko10 = new Plinko(525,200);
l4plinko11 = new Plinko(575,200);
l4plinko12 = new Plinko(625,200);
l4plinko13 = new Plinko(675,200);
l4plinko14 = new Plinko(725,200);
l4plinko15 = new Plinko(775,200);
l4plinko16 = new Plinko(825,200);
l4plinko17 = new Plinko(875,200);
l4plinko18 = new Plinko(925,200);
l4plinko19 = new Plinko(975,200);

l5plinko1 = new Plinko(50,250);
l5plinko2 = new Plinko(100,250);
l5plinko3 = new Plinko(150,250);
l5plinko4 = new Plinko(200,250);
l5plinko5 = new Plinko(250,250);
l5plinko6 = new Plinko(300,250);
l5plinko7 = new Plinko(350,250);
l5plinko8 = new Plinko(400,250);
l5plinko9 = new Plinko(450,250);
l5plinko10 = new Plinko(500,250);
l5plinko11 = new Plinko(550,250);
l5plinko12 = new Plinko(600,250);
l5plinko13 = new Plinko(650,250);
l5plinko14 = new Plinko(700,250);
l5plinko15 = new Plinko(750,250);
l5plinko16 = new Plinko(800,250);
l5plinko17 = new Plinko(850,250);
l5plinko18 = new Plinko(900,250);
l5plinko19 = new Plinko(950,250);

l6plinko0 = new Plinko(25,300);
l6plinko1 = new Plinko(75,300);
l6plinko2 = new Plinko(125,300);
l6plinko3 = new Plinko(175,300);
l6plinko4 = new Plinko(225,300);
l6plinko5 = new Plinko(275,300);
l6plinko6 = new Plinko(325,300);
l6plinko7 = new Plinko(375,300);
l6plinko8 = new Plinko(425,300);
l6plinko9 = new Plinko(475,300);
l6plinko10 = new Plinko(525,300);
l6plinko11 = new Plinko(575,300);
l6plinko12 = new Plinko(625,300);
l6plinko13 = new Plinko(675,300);
l6plinko14 = new Plinko(725,300);
l6plinko15 = new Plinko(775,300);
l6plinko16 = new Plinko(825,300);
l6plinko17 = new Plinko(875,300);
l6plinko18 = new Plinko(925,300);
l6plinko19 = new Plinko(975,300);

}

function draw() {
  background(bg);  
  Engine.update(engine);


 
  


  ground.display();
  boundary1.display();
  boundary2.display();
  boundary3.display();
  boundary4.display();
  boundary5.display();
  boundary10.display();
  boundary20.display();
  boundary30.display();
  boundary40.display();
  boundary50.display();
  boundary6.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display(); 
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  l2plinko0.display();
  l2plinko1.display();
  l2plinko2.display();
  l2plinko3.display();
  l2plinko4.display();
  l2plinko5.display();
  l2plinko6.display();
  l2plinko7.display();
  l2plinko8.display();
  l2plinko9.display();
  l2plinko10.display();
  l2plinko11.display();
  l2plinko12.display();
  l2plinko13.display();
  l2plinko14.display();
  l2plinko15.display();
  l2plinko16.display();
  l2plinko17.display();
  l2plinko18.display();
  l2plinko19.display();
  l3plinko1.display();
  l3plinko2.display();
  l3plinko3.display();
  l3plinko4.display();
  l3plinko5.display();
  l3plinko6.display();
  l3plinko7.display();
  l3plinko8.display();
  l3plinko9.display();
  l3plinko10.display();
  l3plinko11.display();
  l3plinko12.display();
  l3plinko13.display();
  l3plinko14.display();
  l3plinko15.display();
  l3plinko16.display();
  l3plinko17.display();
  l3plinko18.display();
  l3plinko19.display();
  l4plinko0.display();
  l4plinko1.display();
  l4plinko2.display();
  l4plinko3.display();
  l4plinko4.display();
  l4plinko5.display();
  l4plinko6.display();
  l4plinko7.display();
  l4plinko8.display();
  l4plinko9.display();
  l4plinko10.display();
  l4plinko11.display();
  l4plinko12.display();
  l4plinko13.display();
  l4plinko14.display();
  l4plinko15.display();
  l4plinko16.display();
  l4plinko17.display();
  l4plinko18.display();
  l4plinko19.display();
  l5plinko1.display();
  l5plinko2.display();
  l5plinko3.display();
  l5plinko4.display();
  l5plinko5.display();
  l5plinko6.display();
  l5plinko7.display();
  l5plinko8.display();
  l5plinko9.display();
  l5plinko10.display();
  l5plinko11.display();
  l5plinko12.display();
  l5plinko13.display();
  l5plinko14.display();
  l5plinko15.display();
  l5plinko16.display();
  l5plinko17.display();
  l5plinko18.display();
  l5plinko19.display();
  l6plinko0.display();
  l6plinko1.display();
  l6plinko2.display();
  l6plinko3.display();
  l6plinko4.display();
  l6plinko5.display();
  l6plinko6.display();
  l6plinko7.display();
  l6plinko8.display();
  l6plinko9.display();
  l6plinko10.display();
  l6plinko11.display();
  l6plinko12.display();
  l6plinko13.display();
  l6plinko14.display();
  l6plinko15.display();
  l6plinko16.display();
  l6plinko17.display();
  l6plinko18.display();
  l6plinko19.display();

  if(frameCount%50===0){
    ball.push(new Ball(random(400,600),0));
}

for (var j = 0; j < ball.length; j++) {
  ball[j].display();
  }

}

