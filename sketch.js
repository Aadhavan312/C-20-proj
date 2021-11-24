
var jerry,tom,tomImg,jerryImg,gardenImg,jerryImg2,tomAnm,jerryAnm;

function preload() {
    tomImg = loadImage("images/cat4.png");
    jerryImg = loadImage("images/mouse1.png");
    jerryImg2 = loadImage("images/mouse4.png");
    gardenImg = loadImage("images/garden.png");
    jerryAnm = loadAnimation("images/mouse2","images/mouse3");
    tomAnm = loadAnimation("images/cat2.png","images/cat3.png")
}

function setup(){
    createCanvas(1000,800);

    jerry = createSprite(200, 780, 0, 0);
    jerry.addImage(jerryImg);
    jerry.scale=0.2;
    tom = createSprite(900, 780, 0, 0);
    tom.addImage(tomImg);
    tom.scale=0.5;
}

function draw() {

    background(gardenImg);

  if(tom.x-jerry.x < jerry.width/2+tom.width/2 && 
      jerry.x-tom.x < jerry.width/2+tom.width/2 &&
      tom.y-jerry.y < jerry.height/2+tom.height/2 && 
      jerry.y-tom.y < jerry.height/2+tom.height/2){
    tom.addImage(tomImg);
    tom.velocityX=0;
  }

  drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
      tom.velocityX=-3;
      tom.addAnimation(tomAnm);
    }
    
}