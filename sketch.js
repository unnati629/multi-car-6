var  database, form;
var playerCount = 0, gameState = 0, player, game;
var car1, car2, car3, car4, cars;
var allPlayers, car1image, car2image,car3image,car4image,groundimage,trackimage;

function preload(){
  car1image = loadImage("images/car1.png");
  car2image = loadImage("images/car2.png");
  car3image = loadImage("images/car3.png");
  car4image = loadImage("images/car4.png");
  groundimage = loadImage("images/ground.png");
  trackimage = loadImage("images/track.jpg");
}


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20, displayHeight-120);
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
  

  if(playerCount ===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
    text("congatulations!! you have secured " + player.rank, displayWidth/2 -100, 50 );
  }
   
}

