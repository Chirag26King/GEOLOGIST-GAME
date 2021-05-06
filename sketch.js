const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1,rubber2;
var stone1;
var iron1;


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height-20,1200,40);
    hammer = new Hammer(10,100);

   // rubber1=new Rubber(600,200,20);
    rubber2=new Rubber(900,300,30);
    
    stone1=new Stone(400,300);

    iron1=new Iron(600,400);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    //rubber1.display();
    rubber2.display();
    stone1.display();
    iron1.display();
 
}