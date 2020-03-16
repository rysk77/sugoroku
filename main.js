
var $id = function(id){ return document.getElementById(id); };
var count = 1;
var sum = 0;
var dice;

var rollDice = function(){
	var diceNumber = Math.floor(Math.random() * 6) + 1;
	dice = diceNumber + ".png";
	$id('result').innerHTML = "<img src='" + dice + "' width='64' height='64'>"
	count++;
	$id('count').innerHTML = count + "投目";
	sum = sum + diceNumber;
	$id('position').innerHTML = "スタートから"+sum+"マス目";
}
