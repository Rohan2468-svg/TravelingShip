var sea, seaImage, ship_running;
var ship;


function preload(){

 seaImage = loadImage("sea.png");
 ship_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}


function setup(){
  createCanvas(500,500);

   //creating the sea
   sea = createSprite(120,30,10,10);
   sea.addImage(seaImage);
   
   
  //creating the ship
  ship = createSprite(150,150,65,20);
  ship.addAnimation("running", ship_running);
   
  //adding scale and position to ship
   ship.scale = 0.30; 

   ship.velocityx = ship.velocityx + 0.35;

   
 if(sea.x < 0){
  sea.x = sea.width/2;
}
sea.velocityX= -2

   edges = createEdgeSprites();   

  }

function draw() {
  background("blue");


  if(ship_running.x < 0){
    ship_running.x = sea.width/2;
    ship_running.velocityX=-5;
  }
  

  drawSprites();
}