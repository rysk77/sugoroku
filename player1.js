var $id = function(id){ return document.getElementById(id); };
var countVal = 1;　//投げた数をカウント
var leftVal = 100; //残りのマス
var diceFig; //サイコロの図を決定
var diceNum; //サイコロの価
var sum = 0; //出目の合計
var masuId = "m" + 0;

//駒を進める　
var move = function(){
		$id(masuId).classList.remove("red");
		sum++;
		if(sum>=100){
			masuId="m"+100;
		}else{
			masuId = "m" + sum;
		}
		$id(masuId).classList.add("red");
}

//駒を戻す
var back = function(){
		$id(masuId).classList.remove("red");
		sum--;
		if(sum<=0){
			sum = 0;
			masuId="m"+0;
		}else{
			masuId = "m" + sum;
		}
		$id(masuId).classList.add("red");
}

//サイコロの出目作成と結果出力
var result = function(){
	return new Promise(function(resolve, reject) {
		diceNum = Math.floor(Math.random() * 6) + 1;
		diceFig = diceNum + ".png";
		$id('result').innerHTML = "<img src='" + diceFig + "' width='70' height='70'>"
		switch(diceNum){
	 			case 1:
	 				setTimeout(move,500);
	 				break;

	 			case 2:
	 				for (  var i = 0;  i < 2;  i++  ) {
	 					setTimeout(move,i*500);
	 					}
	 				break;

	 			case 3:
	 				for (  var i = 0;  i < 3;  i++  ) {
	 					setTimeout(move,i*500);
	 					}
	 				break;

	 			case 4:
	 				for (  var i = 0;  i < 4;  i++  ) {
	 					setTimeout(move,i*500);
	 					}
	 				break;

	 			case 5:
	 				for (  var i = 0;  i < 5;  i++  ) {
	 					setTimeout(move,i*500);
	 					}
	 				break;

	 			case 6:
	 				for (  var i = 0;  i < 6;  i++  ) {
	 					setTimeout(move,i*500);
	 					}
	 				break;
	 		}
		});
}

//スクロール
var scroll = function(){
  $id('board').scrollTo(0,0);
  $id('board').scrollLeft += sum*104;
}

//イベント
var events = function(){
 var separateNum = Math.floor(Math.random() * 2) + 1;
 var eventNum = Math.floor(Math.random() * 6) + 1;
//進むイベント
 if( separateNum === 1){
	 $id('eventText').innerHTML = "イベント発生！　"+eventNum+ "マス進む";
	 setTimeout(function () {
	 	 switch(eventNum){
	 		 case 1:
          move();
	 			 break;

	 		 case 2:
	 			 for (  var i = 0;  i < 2;  i++  ) {
  			 	move();
	 				 }
	 			 break;

	 		 case 3:
	 			 for (  var i = 0;  i < 3;  i++  ) {
					 move();
	 				 }
	 			 break;

	 		 case 4:
	 			 for (  var i = 0;  i < 4;  i++  ) {
					 move();
	 				 }
	 			 break;

	 		 case 5:
	 			 for (  var i = 0;  i < 5;  i++  ) {
					 move();
	 				 }
	 			 break;

	 		 case 6:
	 			 for (  var i = 0;  i < 6;  i++  ) {
	 				 	move();
	 				 }
	 			 break;
	 	 }
	 },2500);
 }
//戻るイベント
 if( separateNum === 2){
　　$id('eventText').innerHTML = "イベント発生！　"+eventNum+ "マス戻る";
   setTimeout(function () {
			switch(eventNum){
					case 1:
						back();
						break;

					case 2:
						for (  var i = 0;  i < 2;  i++  ) {
							back();
							}
						break;

					case 3:
						for (  var i = 0;  i < 3;  i++  ) {
							back();
							}
						break;

					case 4:
						for (  var i = 0;  i < 4;  i++  ) {
							back();
							}
						break;

					case 5:
						for (  var i = 0;  i < 5;  i++  ) {
						  back();
							}
						break;

					case 6:
						for (  var i = 0;  i < 6;  i++  ) {
							back();
							}
						break;
				}
			},2500);
 }
}
//ターンの切り替え
var turn = function(){
	switch (player) {
		case 1:
		$id('eventText').innerHTML = "";
	 	scroll();
			break;

	 case 2:
	 case 3:
	 case 4:
	 $id("rollBtn").onclick = new Function("rollDiceBlue()");
	 $id('turn').innerHTML = "player2のターン"
	 $id('count').innerHTML = countVal2 + "投目";
	 $id('position').innerHTML = "ゴールまで"+leftVal2+"マス";
	 $id('eventText').innerHTML = "";
	 $id("rollBtn").style.backgroundColor = 'blue';
	 scroll2();
	}
}

//サイコロを降った際に行われる処理
var rollDiceRed =function(){
	//1つ目
	$id("rollBtn").disabled = "true";
	$id('eventText').innerHTML = "";
	for(var i = 0; i<15; i++){
		setTimeout(shuffle,i*50);
	}
	//2つ目　800ms
	setTimeout(function () {
		result();
		//3つ目　3800ms
		setTimeout(function () {
 　　//カウント
	 countVal++;
		$id('count').innerHTML = countVal + "投目";
	 leftVal = 100 - sum;
	 $id('position').innerHTML = "ゴールまで"+leftVal+"マス";
 　　
	 //ゴール判定
	 if(leftVal<=0){
		 $id('goal').innerHTML = "ゴールです！おめでとうございます"
		 $id('position').innerHTML = "";
		 $id('rollBtn').onclick = "";
 }
 setTimeout(function () {
 if( $id(masuId).classList.contains('event') == true){
  events();
	setTimeout(function () {
		scroll();
		leftVal = 100 - sum;
 	 $id('position').innerHTML = "ゴールまで"+leftVal+"マス";
	 setTimeout(function () {
  　$id("rollBtn").disabled = "";
   turn();
 },1500);
 },4000);
}else{
  setTimeout(function () {
 　$id("rollBtn").disabled = "";
  turn();
  },500);
}
},500);
}, 3000);
	}, 800);
}
