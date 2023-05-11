var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  var sorte = Math.round(random(1,3))
  if (frameCount%80===0){
    if (sorte===1){
      createApple(); 
      }else if (sorte===2){
        createOrange();
    } else {
      createRed();
    }
  }

 rabbit.x=World.mouseX;

  drawSprites();
}

function createApple(){
  Apple=createSprite(random(50,350),40,10,10);
  Apple.addImage(appleImg);
  Apple.scale=0.07;
  Apple.velocityY=3;
  Apple.lifeTime=150;
}

function createOrange(){
  OrangeL=createSprite(random(50,350),40,10,10);
  OrangeL.addImage(orangeImg);
  OrangeL.scale=0.07;
  OrangeL.velocityY=3;
  OrangeL.lifeTime=150;
}
function createRed(){
  RedL=createSprite(random(50,350),40,10,10);
  RedL.addImage(redImg);
  RedL.scale=0.07;
  RedL.velocityY=3;
  RedL.lifeTime=150;
}
