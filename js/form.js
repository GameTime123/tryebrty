class Form {
constructor(){

}
display(){
var q = createElement('h4');
q.html("IT'S A RACE!!!!!!!");
q.position(230,100);
var w = createInput('INSERT NAME HERE');
w.position(230,200);
var e = createButton('START');
e.position(240,300);
e.mousePressed(function(){
e.hide();
w.hide();
var r = w.value();
playercount = playercount+1;
cheater.update(r);
cheater.updateCount(playerCount);
var t = createElement('h5');
t.html('Welcome ' + r);
});
}
}