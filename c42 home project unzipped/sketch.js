var background_image,background,iss_image,iss,spacecraft_image,spacecraft,spacecraft2_image,spacecraft3_image,spacecraft4_image;
var hasDocked = false;
function preload(){
iss_image = loadImage("Docking-undocking/iss.png");
background_image= loadImage("Docking-undocking/spacebg.jpg");
spacecraft_image = loadImage("Docking-undocking/spacecraft1.png");
spacecraft2_image = loadImage("Docking-undocking/spacecraft2.png");
spacecraft3_image = loadImage("Docking-undocking/spacecraft3.png");
spacecraft4_image = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(1000,1000);

  background = createSprite(400,400,800,800);
  background.addImage(background_image);
  background.scale = 2;

  spacecraft = createSprite(285,240,50,50);
  //spacecraft = createSprite(573,350);
    spacecraft.addImage(spacecraft_image);
    spacecraft.scale = 0.25;

  iss = createSprite(630,270,50,50);
  iss.addImage(iss_image);
  iss.scale = 0.9;

 


}


function draw() {
  spacecraft.addImage(spacecraft_image);

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
   
  }
  if(keyDown("UP_ARROW")){
    spacecraft.addImage(spacecraft2_image)
    spacecraft.y = spacecraft.y -2;
    
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.y = spacecraft.y +2;
    spacecraft.addImage(spacecraft2_image)
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.x = spacecraft.x +2;
    spacecraft.addImage(spacecraft3_image)
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.x = spacecraft.x -2;
    spacecraft.addImage(spacecraft4_image)
  }

  //if(spacecraft.x = )
  //background(255,255,255); 
  /*if(spacecraft.y <=(iss.y+ 70)&& spacecraft.x <=(iss.x - 10)){
    hasDocked = true;
    text("Docking Succesful",500,300);
  }*/ 
  if(spacecraft.y ===iss.y && spacecraft.x ===iss.x ){
    hasDocked = true;
    text("Docking Succesful",500,300);
  } 
  drawSprites();
}