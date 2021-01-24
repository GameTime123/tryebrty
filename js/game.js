class Game {
constructor(){}
getState(){
var a = database.ref('gameState');
a.on('value',function(data){
gameState = data.val();
})
}
update(state){
database.ref('/').update({
gameState: state
})
}
start(){
if(gameState === 0){
cheater = new Player();
cheater.getCount();
form = new Form();
form.display();
}
}
}