var hypnoticBall, database;
var position;
var playercount;
var gameState;
var form,game,cheater;
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game = new Game();
game.getState();
game.start();

}

function draw(){

  
  
}