var player =0;//プレイ人数
var person;//プレイしている人

//プレイ人数に応じた分岐
var one = function(){
	$id("sugoroku").classList.remove("none")
  $id('choise').classList.add("none");
  player=1;
  $id('m0').classList.add("red");
}

var two = function(){
  $id("sugoroku").classList.remove("none")
  $id('choise').classList.add("none");
  player=2;
  $id('m0').classList.add("red");
  $id('m0').classList.add("blue");
}

var three = function(){
  $id("sugoroku").classList.remove("none")
  $id('choise').classList.add("none");
  player=3;
  $id('m0').classList.add("red");
  $id('m0').classList.add("blue");
  $id('m0').classList.add("silver");
}

var four = function(){
  $id("sugoroku").classList.remove("none")
  $id('choise').classList.add("none");
  player=4;
  $id('m0').classList.add("red");
  $id('m0').classList.add("blue");
  $id('m0').classList.add("silver");
  $id('m0').classList.add("purple");
}

//サイコロを振る演出
  var shuffle = function(){
		var fakeNum = Math.floor(Math.random() * 6) + 1;
		var fakeFig = fakeNum + ".png";
		$id('result').innerHTML = "<img src='" + fakeFig + "' width='70 height='70'>";
	}
