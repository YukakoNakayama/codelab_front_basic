//使いそうな変数を宣言
var modal = document.getElementById("modal");
var answer = document.getElementById("answer");
var close = document.getElementById("close");
var mask = document.getElementById("mask");

answer.onclick = function(){
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
  var question1 = document.getElementsByTagName('input').question1;
  console.log(question1.selected);
  //チェックされた値が正解か確認する
  //正答率を計算するMath.round
  //表示に出す

};