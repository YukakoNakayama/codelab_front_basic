'use strict';
(function () {
  // 仕様
  // ショッピングカートに入った商品の合計を求めます。
  // 商品はタブレット(10,000円)とパソコン(50,000円)の2つです。
  // 計算ボタンをクリックした時に小計、税額、合計を求めてください。
  // 求めるものは以下の3つです。
  // 小計･･･商品の価格と数量の合計
  // 税額･･小計の金額に対して発生する消費税
  // 合計･･･小計と消費税を足した値

  //ヒント
  // HTMLから取得した値は常に文字列になります。JSで計算するには文字列→数値に変換する必要があります。
  var tabletPrice = document.getElementById('tabletPrice');
  tabletPrice = Number(tabletPrice.textContent);
  console.log(typeof tabletPrice);


  var pcPrice = document.getElementById('pcPrice');
  var pcPrice = Number(pcPrice.textContent);
  console.log(typeof pcPrice);

  // 使いそうな変数を宣言。必要に応じて後から追加する
  var pc = document.getElementById('pc');
  var tablet = document.getElementById('tablet');
  var btn = document.getElementById('btn');
  var subtotal = document.getElementById('subtotal');
  var tax = document.getElementById('tax');
  var total = document.getElementById('total');
  // 定数は全て大文字で書くことが多い
  var TAXRATE = 8;

  btn.onclick = function(){
    var result1 = tablet.selectedIndex;
    console.log(result1);
    var tabTotal = (result1+1)*tabletPrice;
    console.log(tabTotal);

    var result2 = pc.selectedIndex;
    console.log(result2);
    var pcTotal = (result2+1)*pcPrice;
    console.log(pcTotal);

    var subPrice = tabTotal + pcTotal;

    //小計を出す
    subtotal.innerHTML = subPrice;

    //税額を出す
    var taxPrice = Math.round((subPrice * TAXRATE) / 100);
    tax.innerHTML = taxPrice;

    //合計を出す
    total.innerHTML = subPrice + taxPrice;
  }

}());