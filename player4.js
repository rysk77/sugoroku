var countVal4 = 1;　//投げた数をカウント
var leftVal4 = 100; //残りのマス
var diceFig; //サイコロの図を決定
var diceNum4; //サイコロの価
var sum4 = 0; //出目の合計
var masuId4 = "m" + 0;

//駒を進める　
var move4 = function(){
    $id(masuId4).classList.remove("purple");
    sum4++;
    if(sum4>=100){
      masuId4="m"+100;
    }else{
      masuId4 = "m" + sum4;
    }
    $id(masuId4).classList.add("purple");
}

//駒を戻す
var back4 = function(){
    $id(masuId4).classList.remove("purple");
    sum4--;
    if(sum4<=0){
      sum4 = 0;
      masuId4="m"+0;
    }else{
      masuId4 = "m" + sum4;
    }
    $id(masuId4).classList.add("purple");
}

//サイコロの出目作成と結果出力
var result4 = function(){
  return new Promise(function(resolve, reject) {
    diceNum4 = Math.floor(Math.random() * 6) + 1;
    diceFig = diceNum4 + ".png";
    $id('result').innerHTML = "<img src='" + diceFig + "' width='70' height='70'>"
    switch(diceNum4){
        case 1:
          setTimeout(move4,500);
          break;

        case 2:
          for (  var i = 0;  i < 2;  i++  ) {
            setTimeout(move4,i*500);
            }
          break;

        case 3:
          for (  var i = 0;  i < 3;  i++  ) {
            setTimeout(move4,i*500);
            }
          break;

        case 4:
          for (  var i = 0;  i < 4;  i++  ) {
            setTimeout(move4,i*500);
            }
          break;

        case 5:
          for (  var i = 0;  i < 5;  i++  ) {
            setTimeout(move4,i*500);
            }
          break;

        case 6:
          for (  var i = 0;  i < 6;  i++  ) {
            setTimeout(move4,i*500);
            }
          break;
      }
    });
}

//スクロール
var scroll4 = function(){
  $id('board').scrollTo(0,0);
  $id('board').scrollLeft += sum4*104;
}

//イベント
var events4 = function(){
  if($id(masuId4).classList.contains('exchange') == true ){
    var change1;
   var change2;
  switch (player) {
    case 4:
      var exchangeplayer = Math.floor(Math.random() * 3) + 1;
      switch (exchangeplayer) {
          case 1:
          $id('eventText').innerHTML = "イベント発生！ player1と入れ替え";
          $id(masuId).classList.remove("red");
          $id(masuId4).classList.remove("purple");
          change1 = sum;
          change2 = sum4;
          sum = change2;
          sum4 = change1;
          masuId = "m" + sum;
          masuId4 = "m" + sum4;
          $id(masuId).classList.add("red");
          $id(masuId4).classList.add("purple");
          break;
          case 2:
          $id('eventText').innerHTML = "イベント発生！ player2と入れ替え";
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
          case 3:
          $id('eventText').innerHTML = "イベント発生！ player3と入れ替え";
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
          move4();
         break;

       case 2:
         for (  var i = 0;  i < 2;  i++  ) {
          move4();
           }
         break;

       case 3:
         for (  var i = 0;  i < 3;  i++  ) {
           move4();
           }
         break;

       case 4:
         for (  var i = 0;  i < 4;  i++  ) {
           move4();
           }
         break;

       case 5:
         for (  var i = 0;  i < 5;  i++  ) {
           move4();
           }
         break;

       case 6:
         for (  var i = 0;  i < 6;  i++  ) {
            move4();
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
            back4();
            break;

          case 2:
            for (  var i = 0;  i < 2;  i++  ) {
              back4();
              }
            break;

          case 3:
            for (  var i = 0;  i < 3;  i++  ) {
              back4();
              }
            break;

          case 4:
            for (  var i = 0;  i < 4;  i++  ) {
              back4();
              }
            break;

          case 5:
            for (  var i = 0;  i < 5;  i++  ) {
              back4();
              }
            break;

          case 6:
            for (  var i = 0;  i < 6;  i++  ) {
              back4();
              }
            break;
        }
      },2500);
 }
}
}

var turn4 = function(){
$id("rollBtn").onclick = new Function("rollDiceRed()");
$id('turn').innerHTML = "player1のターン"
$id('count').innerHTML = countVal + "投目";
$id('position').innerHTML = "ゴールまで"+leftVal+"マス";
$id('eventText').innerHTML = "";
$id("rollBtn").style.backgroundColor = 'red';
scroll();
}
//サイコロを降った際に行われる処理
var rollDicePurple =function(){
//1つ目
$id("rollBtn").disabled = "true";
$id('eventText').innerHTML = "";
for(var i = 0; i<15; i++){
  setTimeout(shuffle,i*50);
}
//2つ目　800ms
setTimeout(function () {
  result4();
  //3つ目　3800ms
  setTimeout(function () {
　　//カウント
 countVal4++;
  $id('count').innerHTML = countVal2 + "投目";
 leftVal4 = 100 - sum4;
 $id('position').innerHTML = "ゴールまで"+leftVal4+"マス";
　　
 //ゴール判定
 if(leftVal4<=0){
   $id('goal').innerHTML = "ゴールです！おめでとうございます"
   $id('position').innerHTML = "";
   $id('rollBtn').onclick = "";
}
setTimeout(function () {
if( $id(masuId4).classList.contains('event') == true){
events4();
setTimeout(function () {
  scroll4();
  leftVal4 = 100 - sum4;
 $id('position').innerHTML = "ゴールまで"+leftVal2+"マス";
 setTimeout(function () {
   $id("rollBtn").disabled = "";
   turn4();
 },1500);
},4000);
}else{
setTimeout(function () {
 $id("rollBtn").disabled = "";
  turn4();
},500);
}
},500);
}, 3000);
}, 800);
}
