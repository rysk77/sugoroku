//ローカルストレージに前回の情報を保存
	window.onbeforeunload = function(){
  localStorage.setItem('masu1', sum);
	localStorage.setItem('masu2', sum2);
	localStorage.setItem('masu3', sum3);
	localStorage.setItem('masu4', sum4);
	localStorage.setItem('people', player);
	localStorage.setItem('p', person);
	localStorage.setItem('count1', countVal);
	localStorage.setItem('count2', countVal2);
	localStorage.setItem('count3', countVal3);
	localStorage.setItem('count4', countVal4);
}

//誰から再開するかの分岐
var set = function(){
		if(person=='1番目'){
			$id('count').innerHTML = countVal + "投目";
			$id('position').innerHTML = "ゴールまで"+leftVal+"マス";
		}else if(person=='2番目'){
			turn();
		}else if(person=='3番目'){
			turn2();
		}else if(person=='4番目'){
			turn3();
		}
}

//前回データがあるか確認
window.onload = function(){
player =  Number(window.localStorage.getItem('people'));
if(player==0){
	$id('reStart').classList.add("none");
}
}

//前回データ取得
var getData = function(){
	sum = window.localStorage.getItem('masu1');
	sum2 = window.localStorage.getItem('masu2');
	sum3 = window.localStorage.getItem('masu3');
	sum4 = window.localStorage.getItem('masu4');
	masuId ="m"+sum;
	masuId2 ="m"+sum2;
	masuId3 ="m"+sum3;
	masuId4 ="m"+sum4;
  leftVal = 100-sum;
	leftVal2 = 100-sum2;
	leftVal3 = 100-sum3;
	leftVal4 = 100-sum4;
	countVal = window.localStorage.getItem('count1');
	countVal2 = window.localStorage.getItem('count2');
	countVal3 = window.localStorage.getItem('count3');
	countVal4 = window.localStorage.getItem('count4');
	person = window.localStorage.getItem('p');
}

//ゲームを再開させる。
var reStart = function(){
	$id("sugoroku").classList.remove("none");
	$id('choise').classList.add("none");
  getData();
	if(player==1){
			$id(masuId).classList.add("red");
			$id('count').innerHTML = countVal + "投目";
	 	  $id('position').innerHTML = "ゴールまで"+leftVal+"マス";
			set();
		}else if (player==2) {
		  $id(masuId).classList.add("red");
			$id(masuId2).classList.add("blue");
			set();
	 }else if (player==3){
			$id(masuId).classList.add("red");
			$id(masuId2).classList.add("blue");
			$id(masuId3).classList.add("silver");
			set();
		}else if (player==4) {
			$id(masuId).classList.add("red");
			$id(masuId2).classList.add("blue");
			$id(masuId3).classList.add("silver");
			$id(masuId4).classList.add("purple");
			set();
		}
}
