  var countVal2 = 1;　//投げた数をカウント
	var leftVal2 = 100; //残りのマス
	var diceFig; //サイコロの図を決定
	var diceNum2; //サイコロの価
	var sum2 = 0; //出目の合計
	var masuId2 = "m" + 0;

	//駒を進める　
	var move2 = function(){
			$id(masuId2).classList.remove("blue");
			sum2++;
			if(sum2>=100){
				masuId2="m"+100;
			}else{
				masuId2 = "m" + sum2;
			}
			$id(masuId2).classList.add("blue");
	}

	//駒を戻す
	var back2 = function(){
			$id(masuId2).classList.remove("blue");
			sum2--;
			if(sum2<=0){
				sum2 = 0;
				masuId2="m"+0;
			}else{
				masuId2 = "m" + sum2;
			}
			$id(masuId2).classList.add("blue");
	}

	//サイコロの出目作成と結果出力
	var result2 = function(){
		return new Promise(function(resolve, reject) {
			diceNum2 = 4;//Math.floor(Math.random() * 6) + 1;
			diceFig = diceNum2 + ".png";
			$id('result').innerHTML = "<img src='" + diceFig + "' width='70' height='70'>"
			switch(diceNum2){
		 			case 1:
		 				setTimeout(move2,500);
		 				break;

		 			case 2:
		 				for (  var i = 0;  i < 2;  i++  ) {
		 					setTimeout(move2,i*500);
		 					}
		 				break;

		 			case 3:
		 				for (  var i = 0;  i < 3;  i++  ) {
		 					setTimeout(move2,i*500);
		 					}
		 				break;

		 			case 4:
		 				for (  var i = 0;  i < 4;  i++  ) {
		 					setTimeout(move2,i*500);
		 					}
		 				break;

		 			case 5:
		 				for (  var i = 0;  i < 5;  i++  ) {
		 					setTimeout(move2,i*500);
		 					}
		 				break;

		 			case 6:
		 				for (  var i = 0;  i < 6;  i++  ) {
		 					setTimeout(move2,i*500);
		 					}
		 				break;
		 		}
			});
	}

	//スクロール
	var scroll2 = function(){
	  $id('board').scrollTo(0,0);
	  $id('board').scrollLeft += sum2*104;
	}

	//イベント
	var events2 = function(){
    //入れ替えイベント
    if($id(masuId2).classList.contains('exchange') == true ){
      var change1;
   	 var change2;
    switch (player) {
    	case 2:
   	  $id('eventText').innerHTML = "イベント発生！ player1と入れ替え";
   	  $id(masuId).classList.remove("red");
   		$id(masuId2).classList.remove("blue");
       change1 = sum;
   		change2 = sum2;
       sum = change2;
   		sum2 = change1;
   		masuId = "m" + sum;
   		masuId2 = "m" + sum2;
   		$id(masuId).classList.add("red");
   		$id(masuId2).classList.add("blue");
    		break;
   		case 3:
   			var exchangeplayer = Math.floor(Math.random() * 2) + 1;
   			switch (exchangeplayer) {
   					case 1:
            $id('eventText').innerHTML = "イベント発生！ player1と入れ替え";
   					$id(masuId).classList.remove("red");
   					$id(masuId2).classList.remove("blue");
   			    change1 = sum;
   					change2 = sum2;
   			    sum = change2;
   					sum2 = change1;
   					masuId = "m" + sum;
   					masuId2 = "m" + sum2;
   					$id(masuId).classList.add("red");
   					$id(masuId2).classList.add("blue");
   					break;
   					case 2:
            $id('eventText').innerHTML = "イベント発生！ player3と入れ替え";
   					$id(masuId2).classList.remove("blue");
   					$id(masuId3).classList.remove("silver");
   			    change1 = sum2;
   					change2 = sum3;
   			    sum2 = change2;
   					sum3 = change1;
   					masuId2 = "m" + sum2;
   					masuId3 = "m" + sum3;
   					$id(masuId2).classList.add("blue");
   					$id(masuId3).classList.add("silver");
   					break;
   					}
   	 	break;
   		case 4:
   			var exchangeplayer = Math.floor(Math.random() * 3) + 1;
   			switch (exchangeplayer) {
   					case 1:
            $id('eventText').innerHTML = "イベント発生！ player1と入れ替え";
   					$id(masuId).classList.remove("red");
   					$id(masuId2).classList.remove("blue");
   			    change1 = sum;
   					change2 = sum2;
   			    sum = change2;
   					sum2 = change1;
   					masuId = "m" + sum;
   					masuId2 = "m" + sum2;
   					$id(masuId).classList.add("red");
   					$id(masuId2).classList.add("blue");
   					break;
   					case 2:
            $id('eventText').innerHTML = "イベント発生！ player3と入れ替え";
   					$id(masuId2).classList.remove("blue");
   					$id(masuId3).classList.remove("silver");
   			    change1 = sum2;
   					change2 = sum3;
   			    sum2 = change2;
   					sum3 = change1;
   					masuId2 = "m" + sum2;
   					masuId3 = "m" + sum3;
   					$id(masuId2).classList.add("blue");
   					$id(masuId3).classList.add("silver");
   					break;
   					case 3:
            $id('eventText').innerHTML = "イベント発生！ player4と入れ替え";
   					$id(masuId2).classList.remove("blue");
   					$id(masuId4).classList.remove("purple");
   			    change1 = sum2;
   					change2 = sum4;
   			    sum2 = change2;
   					sum4 = change1;
   					masuId2 = "m" + sum2;
   					masuId4 = "m" + sum4;
   					$id(masuId2).classList.add("blue");
   					$id(masuId4).classList.add("purple");
   					break;
   					}
   		break;
    }
    }else{
	 var separateNum = Math.floor(Math.random() * 2) + 1;
	 var eventNum = Math.floor(Math.random() * 6) + 1;
	//進むイベント
	 if( separateNum === 1){
		 $id('eventText').innerHTML = "イベント発生！　"+eventNum+ "マス進む";
		 setTimeout(function () {
		 	 switch(eventNum){
		 		 case 1:
	          move2();
		 			 break;

		 		 case 2:
		 			 for (  var i = 0;  i < 2;  i++  ) {
	  			 	move2();
		 				 }
		 			 break;

		 		 case 3:
		 			 for (  var i = 0;  i < 3;  i++  ) {
						 move2();
		 				 }
		 			 break;

		 		 case 4:
		 			 for (  var i = 0;  i < 4;  i++  ) {
						 move2();
		 				 }
		 			 break;

		 		 case 5:
		 			 for (  var i = 0;  i < 5;  i++  ) {
						 move2();
		 				 }
		 			 break;

		 		 case 6:
		 			 for (  var i = 0;  i < 6;  i++  ) {
		 				 	move2();
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
							back2();
							break;

						case 2:
							for (  var i = 0;  i < 2;  i++  ) {
								back2();
								}
							break;

						case 3:
							for (  var i = 0;  i < 3;  i++  ) {
								back2();
								}
							break;

						case 4:
							for (  var i = 0;  i < 4;  i++  ) {
								back2();
								}
							break;

						case 5:
							for (  var i = 0;  i < 5;  i++  ) {
							  back2();
								}
							break;

						case 6:
							for (  var i = 0;  i < 6;  i++  ) {
								back2();
								}
							break;
					}
				},2500);
	 }
	}
}
var turn2 = function(){
	switch (player) {
		case 2:
		$id("rollBtn").onclick = new Function("rollDiceRed()");
		$id('turn').innerHTML = "player1のターン"
		$id('count').innerHTML = countVal + "投目";
		$id('position').innerHTML = "ゴールまで"+leftVal+"マス";
		$id('eventText').innerHTML = "";
		$id("rollBtn").style.backgroundColor = 'red';
		scroll();
			break;

		case 3:
		case 4:
		$id("rollBtn").onclick = new Function("rollDiceSilver()");
		$id('turn').innerHTML = "player3のターン"
		$id('count').innerHTML = countVal3 + "投目";
		$id('position').innerHTML = "ゴールまで"+leftVal3+"マス";
		$id('eventText').innerHTML = "";
		$id("rollBtn").style.backgroundColor = 'silver';
		scroll3();
		break;
	}
}
//サイコロを降った際に行われる処理
var rollDiceBlue =function(){
	//1つ目
	$id("rollBtn").disabled = "true";
	$id('eventText').innerHTML = "";
	for(var i = 0; i<15; i++){
		setTimeout(shuffle,i*50);
	}
	//2つ目　800ms
	setTimeout(function () {
		result2();
		//3つ目　3800ms
		setTimeout(function () {
 　　//カウント
	 countVal2++;
		$id('count').innerHTML = countVal2 + "投目";
	 leftVal2 = 100 - sum2;
	 $id('position').innerHTML = "ゴールまで"+leftVal2+"マス";
 　　
	 //ゴール判定
	 if(leftVal2<=0){
		 $id('goal').innerHTML = "ゴールです！おめでとうございます"
		 $id('position').innerHTML = "";
		 $id('rollBtn').onclick = "";
 }
 setTimeout(function () {
 if( $id(masuId2).classList.contains('event') == true){
  events2();
	setTimeout(function () {
		scroll2();
		leftVal2 = 100 - sum2;
 	 $id('position').innerHTML = "ゴールまで"+leftVal2+"マス";
	 setTimeout(function () {
		 $id("rollBtn").disabled = "";
	   turn2();
	 },1500);
 },4000);
}else{
	setTimeout(function () {
 	 $id("rollBtn").disabled = "";
    turn2();
  },500);
}
},500);
}, 3000);
	}, 800);
}
