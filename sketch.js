var rectangle1,rectangle2,rectangle3,rectangle4
var bg, backgroundImage
var rectangle5, floatingImage
var coin, coinImage
var player, playerIdle, playerRunning
var fire, fireImage
var door, doorImage
var vx=0
var score=0
function preload(){
  backgroundImage=loadImage('background.png')
  floatingImage= loadImage('floating.png')
  coinImage=loadAnimation('tile000.png','tile001.png','tile002.png','tile003.png','tile004.png','tile005.png')
  playerIdle=loadAnimation('idle000.png','idle001.png','idle002.png','idle003.png')
  fireImage=loadAnimation('fire000.png', 'fire001.png', 'fire002.png', 'fire003.png', 'fire004.png', 'fire005.png',
  'fire006.png','fire007.png','fire008.png','fire009.png','fire010.png','fire011.png')
  playerRunning=loadAnimation('running001.png','running002.png','running003.png','running004.png','running005.png',
  'running006.png')
  doorImage=loadAnimation('door (1).png','door (2).png','door (3).png','door (4).png','door (5).png','door (6).png',
  'door (7).png')
  doorIdle=loadAnimation('door (1).png')
}

function setup() {
  createCanvas(800,600);
  rectangle1=createSprite(100,550,2000,15)
  rectangle1.shapeColor='red'

  rectangle2=createSprite(20,410,300,15)
  invirectangle2=createSprite(20,410,300,15)
  invirectangle2.visible=false
  rectangle2.shapeColor='blue'

  rectangle3=createSprite(600,410,500,15)
  invirectangle3=createSprite(600,410,500,15)
  invirectangle3.visible=false
  rectangle3.shapeColor='green'

  rectangle4=createSprite(620,300,220,15)
  invirectangle4=createSprite(620,300,220,15)
  invirectangle4.visible=false
  rectangle4.shapeColor='beige'

  rectangle5=createSprite(200,300,250,15)
  invirectangle5=createSprite(200,300,250,15)
  invirectangle5.visible=false
  rectangle5.shapeColor='orange'

  rectangle6=createSprite(400,170,150,15)
  invirectangle6=createSprite(400,170,150,15)
  invirectangle6.visible=false
  rectangle6.shapeColor='purple'

  coin1=createSprite(200,220)
  coin1.addAnimation('coin', coinImage)
  coin1.scale=0.5

  coin2=createSprite(600,220)
  coin2.addAnimation('coin', coinImage)
  coin2.scale=0.5

  coin3=createSprite(100,350)
  coin3.addAnimation('coin', coinImage)
  coin3.scale=0.5

  coin4=createSprite(400,350)
  coin4.addAnimation('coin', coinImage)
  coin4.scale=0.5

  coin5=createSprite(470,350)
  coin5.addAnimation('coin', coinImage)
  coin5.scale=0.5

  coin6=createSprite(550,350)
  coin6.addAnimation('coin', coinImage)
  coin6.scale=0.5
  door=createSprite(400,150,150,15)
  door.addAnimation('doorIdle',doorIdle)
  door.addAnimation('door',doorImage)
  

  player=createSprite(20,370)
  player.addAnimation('idle', playerIdle)
  player.addAnimation('running',playerRunning)
  function createFireRow(y, color) {
    for(c=0; c<20; c++)
    {
      var fire = createSprite(30+54*c,y,50, 25);
      fire.addAnimation('fire', fireImage)
    }
  }
  createFireRow(525, "red");
  
  
}

function draw() {
  background(000000)
  if(keyCode==RIGHT_ARROW){
    player.x+=2
    player.changeAnimation('running',playerRunning)
  }
  if(keyCode==LEFT_ARROW){
    player.x-=2
    player.changeAnimation('running',playerRunning)
  }

  if(keyDown("space")&& player.y >= 100) {
    player.velocityY = -13;
  }
  if(player.isTouching(coin1)){
    score+=1
    coin1.destroy()
  }
  if(player.isTouching(coin2)){
    score+=1
    coin2.destroy()
  }
  if(player.isTouching(coin3)){
    score+=1
    coin3.destroy()
  }
  if(player.isTouching(coin4)){
    score+=1
    coin4.destroy()
  }
  if(player.isTouching(coin5)){
    score+=1
    coin5.destroy()
  }
  if(player.isTouching(coin6)){
    score+=1
    coin6.destroy()
  }
  if(player.isTouching(door)&&score==6){
    rectangle1.visible=false
    rectangle2.visible=false
    rectangle3.visible=false
    rectangle4.visible=false
    rectangle5.visible=false
    rectangle6.visible=false
    player.visible=false
    door.visible=false
    score.visible=false
    fill('white')
    textSize(100)
    text('GAME OVER', 100,100)
  }
  if(score==6){
    door.changeAnimation('door',doorImage)
  }
  player.velocityY = player.velocityY + 0.8

  player.collide(invirectangle2)
  player.collide(invirectangle3)
  player.collide(invirectangle4)
  player.collide(invirectangle5)
  player.collide(invirectangle6)
  drawSprites();
  fill('white')
  textSize(20)
  text('Score: '+score,100,100)
}
