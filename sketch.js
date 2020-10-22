const myEngine = Matter.Engine;
const myWorld = Matter.World;
const myBodies = Matter.Bodies;

var engine, bodies, world;
var box1, box2, box3, box4, floor;
var pig1, pig2;
var log1, log2, log3, log4;
var brid1;

function setup() {
  var canvas = createCanvas(1200, 400);

  engine = myEngine.create();
  world = engine.world;

  box1 = new box(700,320,70,70);
  box2 = new box(920,320,70,70);
  box3 = new box(700,240,70,70);
  box4 = new box(920,240,70,70);

  floor = new ground(600,390,1200,20);

  pig1 = new pig(810,350);
  pig2 = new pig(810,220);

  log1 = new log(810,260,300,PI/2);
  log2 = new log(810,180,300,PI/2);
  log3 = new log(760,120,150,PI/7);
  log4 = new log(870,120,150,-PI/7);

  bird1 = new bird(100,100);
}

function draw() {
  background(0);
  myEngine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  floor.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird1.display();
  
}