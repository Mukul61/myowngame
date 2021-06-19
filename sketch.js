var canvas
var ring,player,player2I
var ring1,player1,player1I,player2,player3

function preload(){
  ring1 = loadImage("sprites/ring.jpg")
  player1I= loadImage("sprites/boxer1.png")
  player2I= loadImage("sprites/boxer.png")
  punchI=loadImage("sprites/punch.png")
  powerpunchI=loadImage("sprites/powerpunch.png")
  soundI=loadSound("sprites/sound1.mp3")
  sound2I=loadSound("sprites/punch.mp3")
  sound3=loadSound("sprites/win.mp3")
  sound4=loadSound("sprites/over.mp3")
  sound5=loadSound("sprites/fight.mp3")
  restartI=loadImage("sprites/restart.png")
}

function setup() {
  canvas =createCanvas(1350, 700);
  score1=100
score2=100
 // ring=createSprite(10,100,100,10);
  //ring.addAnimation(ring1);
restart=createSprite(675,350)
restart.addImage(restartI)
restart.visible=false
  player1=createSprite(120,505,10,10)
  player1.addImage(player1I)
  player1.scale=0.17
  player2=createSprite(1200,500,10,10)
 player2.addImage(player2I)
 player2.scale=0.35
punch=createSprite(120,660,10,10)
  punch.addImage(punchI)
punch.scale=0.1
powerpunch=createSprite(250,660,10,10)
  powerpunch.addImage(powerpunchI)
powerpunch.scale=0.1
powerpunch.visible=false
soundI.play(true)
sound5.play()



}

function draw() {
  background(ring1);
  
  if(keyDown("space")){
    player1.velocityX=12
  }
  if(mousePressedOver(punch)){
    player1.velocityX=12
  }
  if(player1.isTouching(player2)){
    sound2I.play(true)
    player1.x=120
    player1.velocityX=0
    player2.velocityX=-12
    score2=score2-10
    
  }
  if(score2<=50){
    powerpunch.visible=true
  }
  if((score2<=50)&&(mousePressedOver(powerpunch))){
    player1.velocityX=12
    score2=score2-30
    
  }
  if((score2<=50)&&(keyWentDown("enter"))){
    player1.velocityX=12
    score2=score2-30
    
  }
  
  if(player2.isTouching(player1)&&(player1.x=120)){
    sound2I.play(true)
    player2.x=1200
    player2.velocityX=0
    score1=score1-random(0+25)
    score2=score2+10
  }
  
  

 
 
  
  textSize(50)
  text(score1,270,50)
 text(score2,1230,50)
  textFont("Brush Script MT")
 text("Life -",150,50)
 text("Life -",1100,50)
 console.log(score1)
 console.log(score2)
 if(score1<=0){
  sound4.play(true);
  restart.visible=true}
  if(score2<=0){
sound3.play(true)
restart.visible=true;
  }
  drawSprites();}
