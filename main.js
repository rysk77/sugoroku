
var $id = function(id){ return document.getElementById(id); };
var countVal = 1;　//投げた数をカウント
var leftVal = 100; //残りのマス
var diceFig; //サイコロの図を決定
var diceNum; //サイコロの価

var rollDice = function(){
	 diceNum = Math.floor(Math.random() * 6) + 1;
	 diceFig = diceNum + ".png";
	 $id('result').innerHTML = "<img src='" + diceFig + "' width='64' height='64'>"
	 countVal++;
 	 $id('count').innerHTML = countVal + "投目";
	 leftVal = leftVal - diceNum;
	 $id('position').innerHTML = "ゴールまで"+leftVal+"マス";
	 if(leftVal<=0){
		 $id('goal').innerHTML = "ゴールです！おめでとうございます"
		 $id('position').innerHTML = "";
		 $id('rollBtn').onclick = "";
}
}
