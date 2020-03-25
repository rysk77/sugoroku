
var $id = function(id){ return document.getElementById(id); };
var countVal = 1;　//投げた数をカウント
var leftVal = 100; //残りのマス
var diceFig; //サイコロの図を決定
var diceNum; //サイコロの価
var sum = 0; //出目の合計
var masuId = "m" + 0;

//駒を進める　
var move = function(){
		$id(masuId).classList.remove("active");
		sum++;
		if(sum>=100){
			masuId="m"+100;
		}else{
			masuId = "m" + sum;
		}
		$id(masuId).classList.add("active");
}

//駒を戻す
var back = function(){
		$id(masuId).classList.remove("active");
		sum--;
		if(sum<=0){
			sum = 0;
			masuId="m"+0;
		}else{
			masuId = "m" + sum;
		}
		$id(masuId).classList.add("active");
}

//サイコロを振る演出
  var shuffle = function(){
		var fakeNum = Math.floor(Math.random() * 6) + 1;
		var fakeFig = fakeNum + ".png";
		$id('result').innerHTML = "<img src='" + fakeFig + "' width='70 height='70'>";
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

//サイコロを降った際に行われる処理
var rollDice =function(){
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
 scroll();
 setTimeout(function () {
 if( $id(masuId).classList.contains('event') == true){

  events();
	setTimeout(function () {
		scroll();
		leftVal = 100 - sum;
 	 $id('position').innerHTML = "ゴールまで"+leftVal+"マス";
 },4000);
 }
},500);
 $id("rollBtn").disabled = "";
}, 3000);
	}, 800);
}
