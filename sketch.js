var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisions= [];
var plinko =[];
var particle ;

var divisionHeight=300;
var score =0;
var turn = 0;
var gameState;
var image;
function preload(){
  image = loadImage("images/ss.jpg");
}
function setup() {
  createCanvas(1000, 1000);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  gameState = "play";

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,150));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,250));
    }

     for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,350));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,450));
    }

}
 


function draw() {
  background(image);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }


 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
   }

  if(particle!=null && turn<=5){
    particle.display();

    if(particle.body.position.y>760){
      
       if(particle.body.position.x<300){
         score = score+500;
         particle = null;
       }
    }
  }

  if(particle!=null && turn<=5){
    particle.display();

    if(particle.body.position.y>760){
      
       if(particle.body.position.x>301 && particle.body.position.x<650){
         score = score+100;
         particle = null;
       }
    }
  }

  if(particle!=null && turn<=5){
    particle.display();

    if(particle.body.position.y>760){
      
       if(particle.body.position.x>651 && particle.body.position.x<900){
         score = score+200;
         particle = null;;
       }
    }
  }

  if (turn == 5){
    gameState ="end";
    noStroke();
    textSize(100);
    fill("lightgreen");
    text("GAME OVER", 200, 600);
  }
  // display score
  noStroke();
  textSize(35);
  fill("yellow");
  text("Score : " + score, 50, 70);

  textSize(30);
  fill("brown");
  text("500",15,800);
  text("500",95,800);
  text("500",175,800);
  text("500",255,800);
  fill("yellow");
  text("100",335,800);
  text("100",415,800);
  text("100",495,800);
  text("100",575,800);
  fill("orange");
  text("200",655,800);
  text("200",735,800);
  text("200",815,800);
  text("200",895,800);

}

function mousePressed(){
  if(gameState !=="end"){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}