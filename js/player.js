class Player{
constructor(){}
getCount(){
    var a = database.ref('playerCount');
    a.on('value',function(data){
    playerCount = data.val();
    })
    }
    updateCount(state){
    database.ref('/').update({
    playerCount: state
    })
    }
update(name){
var d = 'player' + playerCount;
database.ref(d).set({
name : name
})
}
}
