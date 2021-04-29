var space, spaceImage;
var tileImage;
var spaceShip, spaceShipImage;
var tileGroup;
 var gameState = "START";
 var chooseObj;
var score=0;
var soundy;
var bullet, bulletImg;
var monster,monsterImg;
var monsterGroup;
var bulletGroup;
var hit,over;
var gameOver,gameOverImg;
var life1Img,life2Img,life3Img;
var life1,life2,life3;
var life=3;
var star,starImg,starGroup;
var stary;
var laser, laserImg;
var laserGroup;
var inviPlank;
var finish, finishImg;
var re, reImg;
var bgd;
var fire, fireImg, fireGroup;
var win, winImg;
var formObj;
var restart, resetImg;
var ship1;
function preload()

{
  spaceImage = loadImage("imagex.png");
fireImg = loadImage("firet.png");
finishImg= loadImage("finishm.PNG");
winImg = loadImage("win.png");
  tileImage = loadImage("space.png");
  resetImg= loadImage("reset.png");
  spaceShipImage = loadImage("spaceship.png");
soundy=loadSound("soundd.wav");
monsterImg = loadImage("bomb.png");
 hit=loadSound("hit.ogg");
 over=loadSound("bombb.wav")
  gameOverImg=loadImage("gameOver.png");
  life1Img=loadImage("spaceship.png");
  life2Img=loadImage("spaceship.png");
  life3Img=loadImage("spaceship.png");
  reImg = loadImage("alphas.png");
  starImg=loadImage("star.png");
  stary=loadSound("star.wav");
  bulletImg = loadImage("alpha.png");
  laserImg = loadImage("laserImg.png");
}



function setup()
{
  createCanvas(600, 600);
  
  formObj= new form();
  
 
  

  space = createSprite(300,300, displayWidth, displayHeight*1000000000000000000000);
 space.addImage("space", spaceImage);
  space.velocityY = (6 + 3*score/100);
  
  space.scale=4;
  
  finish=createSprite(300,-1600,100000000,30);
  finish.addImage("fin",finishImg);
  finish.scale = 0.5;

  spaceShip = createSprite(300, 400, 10, 10);
  spaceShip.addImage("spaceShip", spaceShipImage);
  spaceShip.scale = 0.2;

gameOver = createSprite(300, 200, 10, 10);
  gameOver.addImage("gameOverr", gameOverImg);
  gameOver.scale=0.7;
  gameOver.visible=false;

  win = createSprite(250,-1800,30,30);
  win.addImage("win", winImg);
  
  
  
  life1=createSprite(135,147,5,5);
  life1.addImage("lifee",life1Img);
  life1.scale=0.07;
  
  life2=createSprite(160,147,5,5);
  life2.addImage("lifee",life2Img);
  life2.scale=0.07;
  
  life3=createSprite(185,147,5,5);
  life3.addImage("lifee",life3Img);
  life3.scale=0.07;
  
  tileGroup = new Group();
  monsterGroup=new Group();
  bulletGroup = new Group();
  laserGroup= new Group();
  fireGroup = new Group();
  
  ship1 = createSprite(displayWidth/2 - 300, displayHeight/2 - 30, 20,20 );
  ship1.addImage("im", spaceShipImage);
  ship1.visible=false;
  
restart= createSprite(550, 650, 40,10);
restart.addImage("reset", resetImg);
restart.scale = 0.2;


  soundy.loop();
  score = 0;
  inviPlank=createSprite(300,spaceShip.y + 80, 600, 10 );
  inviPlank.visible = false;
}


function draw() 
{
  background("white");
 
   if (gameState === "PLAY")
  {
   //formObj.hide();
   
restart.y = spaceShip.y + 250;
restart.x = spaceShip.x + 250;
  
  console.log(spaceShip.y);
  
       
     if(tileGroup.isTouching(bulletGroup) ) {
     tileGroup.destroyEach()
      score=score+10;
      hit.play()
      
    } 
    
  
   if(keyDown("G")){
      bullet = createSprite(spaceShip.x,spaceShip.y - 30,10,20);
     bullet.velocityY = -50;
     bullet.scale = 0.1;
     bullet.addImage("bulet", bulletImg);
     bulletGroup.add(bullet);
     
      }

      if(keyDown("F")){
        fire = createSprite(spaceShip.x,spaceShip.y - 30,10,20);
       fire.velocityY = -40;
       fire.scale = 0.1;
       fire.addImage("fire", fireImg);
       fireGroup.add(fire);
       
        }
    
    if (keyDown("LEFT_ARROW"))

    {
 
      spaceShip.x = spaceShip.x - 7;
      life1.x = life1.x - 7;
      life2.x = life2.x - 7;
      life3.x = life3.x - 7;

    }
    if(keyDown("UP_ARROW")){
spaceShip.y = spaceShip.y -3;
inviPlank.y = inviPlank.y - 3;
life1.y = life1.y - 3;
life2.y = life2.y - 3;
life3.y = life3.y - 3;
gameOver.y = gameOver.y - 3;
    }
    
    if(keyDown("DOWN_ARROW")){
spaceShip.y = spaceShip.y + 3;
inviPlank.y = inviPlank.y + 3;
life1.y = life1.y + 3;
life2.y = life2.y + 3;
life3.y = life3.y + 3;
gameOver.y = gameOver.y + 3;
    }
   
    // if (space.y > 300)
    // {
    //   space.y = space.y / 2;
    // }
    if(tileGroup.isTouching(inviPlank)){
score = score - 2;
tileGroup.destroyEach();
    }

    if (keyDown("RIGHT_ARROW"))

    {
      
      spaceShip.x = spaceShip.x + 7;
      life1.x = life1.x + 7;
      life2.x = life2.x + 7;
      life3.x = life3.x + 7;

    }
    
   camera.position.x = spaceShip.x;
   camera.position.y = spaceShip.y;
    spawntiles();
    spawnLaser();
    spawnmonsters();
    //spawnstars();

    console.log(spaceShip.y);
    

  if(monsterGroup.isTouching(spaceShip) ){
     monsterGroup.destroyEach();
     over.play();
    life=life-1;
       
    }
    
    if(fireGroup.isTouching(laserGroup)){
laserGroup.destroyEach();
score = score + 5;
    }

    
    
   if(spaceShip.y < -1600){
text("YOU WIN", 280,-2600);

      monsterGroup.setVelocityYEach(0);
       tileGroup.setVelocityYEach(0);
      monsterGroup.setLifetimeEach(-1);
         tileGroup.setLifetimeEach(-1);
      monsterGroup.destroyEach();
      tileGroup.destroyEach();
      laserGroup.destroyEach();
   }
    if(life===2)
    {
       life3.visible=false;
      
       }
    
    if(life===1)
    {
       life2.visible=false;
    }

    if(score < -20){
life = 0;
    }

    if(life===0)
    {
      life1.visible=false;
      
       gameOver.visible=true;
     space.velocityY=0;
     
      spaceShip.velocityY=0;
      monsterGroup.setVelocityYEach(0);
       tileGroup.setVelocityYEach(0);
      monsterGroup.setLifetimeEach(-1);
         tileGroup.setLifetimeEach(-1);
      monsterGroup.destroyEach();
      tileGroup.destroyEach();
      laserGroup.destroyEach();
      
       }

       if(laserGroup.isTouching(spaceShip)){
        life = life - 1;
        laserGroup.destroyEach();
        over.play();
            }
   
    
    
    if(mousePressedOver(restart)){
reset();
    }
   
        drawSprites();
 fill("white");
text("Score: "+ score, spaceShip.x + 160,spaceShip.y -250);
    text("Life:",spaceShip.x - 210,spaceShip.y -250);
    text("Press 'G' or 'F' to Fire ! ",spaceShip.x-40,spaceShip.y -250);
  }else if(gameState === "START"){
    formObj.display();
  }

 
  
  
}

function spawntiles()
{

  if (frameCount % 60 === 0) 
  {
   
    var tile = createSprite(200, spaceShip.y - 345, 20, 20);
    tile.addImage(tileImage);
    tile.scale=0.15;
    tile.velocityY = (6 + 3*score/100);
    tile.x = Math.round(random(100, 500));
    // tile.y = Math.round(random(100, 500));
    tile.lifetime = 500;
    
    tileGroup.add(tile);




      
  }
}

function spawnmonsters()
{

  if (frameCount % 100 === 0) 
  {
   
    var monster = createSprite(20, spaceShip.y-345, 20, 20);
    monster.addImage(monsterImg);
    monster.scale=0.4;
    
monster.velocityY = (6 + 3*score/100);
    monster.x = Math.round(random(100, 400));
     monster.y = Math.round(random(100, 400));
   monster.lifetime = 500;
    monsterGroup.add(monster);

     
  
  }
}

function spawnLaser(){

  if(frameCount % 150 === 0){
       laser = createSprite(280,spaceShip.y - 200,1000,10);
       laser.scale = 0.8;
       laser.addImage("laser", laserImg);
       laser.velocityY = 3;
      // laser.velocityX = 20;
      laserGroup.add(laser);
       
  }
}

function reset(){
  life=3;
  life1.visible=true;
  life2.visible=true;
  life3.visible=true;
  gameState="PLAY";
  
  space.velocityY = (6 + 3*score/100);
  spaceShip.y = 400;
   
  score=0;
  
  spaceShip.x = 300;
  
  gameOver.visible=false;
  
  re = createSprite(spaceShip.x, spaceShip.y - 100, 20,20);
  
  re.addImage(reImg);
  re.velocityX = 5;
  
 
  
}

