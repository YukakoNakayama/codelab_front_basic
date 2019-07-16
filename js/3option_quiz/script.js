//使いそうな変数を宣言
var modal = document.getElementById("modal");
var answer5 = document.getElementById("answer");
var close = document.getElementById("close");
var mask = document.getElementById("mask");

answer5.onclick = function(){
  //解答ボタンを押すとモーダルウィンドウが表示される
  modal.classList.add('show');
  mask.classList.remove('hidden');

  //閉じるボタンと画面クリックで閉じる
  close.onclick = function(){
    modal.classList.remove('show');
    mask.classList.add('hidden');
  };
  mask.onclick = function(){
    modal.classList.remove('show');
    mask.classList.add('hidden');
  }

  //チェックされた値を取得する
  //1問目
  var form = document.getElementById('form');
  var radioNodeList = form.question1;
  var q1value = radioNodeList.value;
  //チェックされた値が正解か確認する
  if (q1value === "2"){
    //正解を選択状態の処理
    console.log(q1value);
    var answer1 = 1;
  }else{
    //不正解を選択状態の処理
    var answer1 = 0;
  }

  //2問目
  var form2 = document.getElementById('form2');
  var radioNodeList = form2.question2;
  var q2value = radioNodeList.value;
  //チェックされた値が正解か確認する
  if (q2value === "3"){
    //正解を選択状態の処理
    console.log(q2value);
    var answer2 = 1;
  }else{
    //不正解を選択状態の処理
    var answer2 = 0;
  }
  //3問目
  var form3 = document.getElementById('form3');
  var radioNodeList = form3.question3;
  var q3value = radioNodeList.value;
  //チェックされた値が正解か確認する
  if (q3value === "2"){
    //正解を選択状態の処理
    console.log(q3value);
    var answer3 = 1;
  }else{
    //不正解を選択状態の処理
    var answer3 = 0;
  }

  //正答率を計算するMath.round
  //(1+2+3)/3 * 100
  var answer = Math.round((answer1+answer2+answer3)/3 *100);
  console.log(answer);
  //表示に出す
  var result = document.getElementById('result');
  result.innerHTML = 
 "正答率は" + answer + "%でした。";
};