var countVal3 = 1;　//投げた数をカウント
var leftVal3 = 100; //残りのマス
var diceFig; //サイコロの図を決定
var diceNum3; //サイコロの価
var sum3 = 0; //出目の合計
var masuId3 = "m" + 0;

//駒を進める　
var move3 = function(){
    $id(masuId3).classList.remove("silver");
    sum3++;
    if(sum3>=100){
      masuId3="m"+100;
    }else{
      masuId3 = "m" + sum3;
    }
    $id(masuId3).classList.add("silver");
}

//駒を戻す
var back3 = function(){
    $id(masuId3).classList.remove("silver");
    sum3--;
    if(sum3<=0){
      sum3 = 0;
      masuId3="m"+0;
    }else{
      masuId3 = "m" + sum3;
    }
    $id(masuId3).classList.add("silver");
}

//サイコロの出目作成と結果出力
var result3 = function(){
  return new Promise(function(resolve, reject) {
    diceNum3 = Math.floor(Math.random() * 6) + 1;
    diceFig = diceNum3 + ".png";
    $id('result').innerHTML = "<img src='" + diceFig + "' width='70' height='70'>"
    switch(diceNum3){
        case 1:
          setTimeout(move3,500);
          break;

        case 2:
          for (  var i = 0;  i < 2;  i++  ) {
            setTimeout(move3,i*500);
            }
          break;

        case 3:
          for (  var i = 0;  i < 3;  i++  ) {
            setTimeout(move3,i*500);
            }
          break;

        case 4:
          for (  var i = 0;  i < 4;  i++  ) {
            setTimeout(move3,i*500);
            }
          break;

        case 5:
          for (  var i = 0;  i < 5;  i++  ) {
            setTimeout(move3,i*500);
            }
          break;

        case 6:
          for (  var i = 0;  i < 6;  i++  ) {
            setTimeout(move3,i*500);
            }
          break;
      }
    });
}

//スクロール
var scroll3 = function(){
  $id('board').scrollTo(0,0);
  $id('board').scrollLeft += sum3*104;
}

//イベント
var events3 = function(){
  if($id(masuId3).classList.contains('exchange') == true ){
    var change1;
   var change2;
  switch (player) {
    case 3:
      var exchangeplayer = Math.floor(Math.random() * 2) + 1;
      switch (exchangeplayer) {
          case 1:
          $id('eventText').innerHTML = "イベント発生！ player1と入れ替え";
          $id(masuId).classList.remove("red");
          $id(masuId3).classList.remove("silver");
          change1 = sum;
          change2 = sum3;
          sum = change2;
          sum3 = change1;
          masuId = "m" + sum;
          masuId3 = "m" + sum3;
          $id(masuId).classList.add("red");
          $id(masuId3).classList.add("silver");
          break;
          case 2:
          $id('eventText').innerHTML = "イベント発生！ player2と入れ替え";
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
          $id(masuId3).classList.remove("silver");
          change1 = sum;
          change2 = sum3;
          sum = change2;
          sum3 = change1;
          masuId = "m" + sum;
          masuId3 = "m" + sum3;
          $id(masuId).classList.add("red");
          $id(masuId3).classList.add("silver");
          break;
          case 2:
          $id('eventText').innerHTML = "イベント発生！ player2と入れ替え";
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
          $id(masuId3).classList.remove("silver");
          $id(masuId4).classList.remove("purple");
          change1 = sum3;
          change2 = sum4;
          sum3 = change2;
          sum4 = change1;
          masuId3 = "m" + sum3;
          masuId4 = "m" + sum4;
          $id(masuId3).classList.add("silver");
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
          move3();
         break;

       case 2:
         for (  var i = 0;  i < 2;  i++  ) {
          move3();
           }
         break;

       case 3:
         for (  var i = 0;  i < 3;  i++  ) {
           move3();
           }
         break;

       case 4:
         for (  var i = 0;  i < 4;  i++  ) {
           move3();
           }
         break;

       case 5:
         for (  var i = 0;  i < 5;  i++  ) {
           move3();
           }
         break;

       case 6:
         for (  var i = 0;  i < 6;  i++  ) {
            move3();
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
            back3();
            break;

          case 2:
            for (  var i = 0;  i < 2;  i++  ) {
              back3();
              }
            break;

          case 3:
            for (  var i = 0;  i < 3;  i++  ) {
              back3();
              }
            break;

          case 4:
            for (  var i = 0;  i < 4;  i++  ) {
              back3();
              }
            break;

          case 5:
            for (  var i = 0;  i < 5;  i++  ) {
              back3();
              }
            break;

          case 6:
            for (  var i = 0;  i < 6;  i++  ) {
              back3();
              }
            break;
        }
      },2500);
 }
}
}
var turn3 = function(){
	switch (player) {
    case 3:
    $id("rollBtn").onclick = new Function("rollDiceRed()");
    $id('turn').innerHTML = "player1のターン"
    $id('count').innerHTML = countVal + "投目";
    $id('position').innerHTML = "ゴールまで"+leftVal+"マス";
    $id('eventText').innerHTML = "";
    $id("rollBtn").style.backgroundColor = 'red';
    scroll();
      break;

      case 4:
      $id("rollBtn").onclick = new Function("rollDicePurple()");
      $id('turn').innerHTML = "player4のターン"
      $id('count').innerHTML = countVal4 + "投目";
      $id('position').innerHTML = "ゴールまで"+leftVal4+"マス";
      $id('eventText').innerHTML = "";
      $id("rollBtn").style.backgroundColor = 'purple';
      scroll4();
        break;
  }
}

//サイコロを降った際に行われる処理
var rollDiceSilver =function(){
//1つ目
$id("rollBtn").disabled = "true";
$id('eventText').innerHTML = "";
for(var i = 0; i<15; i++){
  setTimeout(shuffle,i*50);
}
//2つ目　800ms
setTimeout(function () {
  result3();
  //3つ目　3800ms
  setTimeout(function () {
　　//カウント
 countVal3++;
  $id('count').innerHTML = countVal3 + "投目";
 leftVal3 = 100 - sum3;
 $id('position').innerHTML = "ゴールまで"+leftVal3+"マス";
　　
 //ゴール判定
 if(leftVal3<=0){
   $id('goal').innerHTML = "ゴールです！おめでとうございます"
   $id('position').innerHTML = "";
   $id('rollBtn').onclick = "";
}
setTimeout(function () {
if( $id(masuId3).classList.contains('event') == true){
events3();
setTimeout(function () {
  scroll3();
  leftVal3 = 100 - sum3;
 $id('position').innerHTML = "ゴールまで"+leftVal3+"マス";
 setTimeout(function () {
   $id("rollBtn").disabled = "";
   turn3();
 },1500);
},4000);
}else{
setTimeout(function () {
 $id("rollBtn").disabled = "";
  turn3();
},500);
}
},500);
}, 3000);
}, 800);
}
