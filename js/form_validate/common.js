var errName = document.getElementById("err-name");
var errKana = document.getElementById("err-kana");
var errTel = document.getElementById("err-tel");
var errMail = document.getElementById("err-mail");
var btn = document.getElementById("submit");

btn.onclick = function(e){
  var errFlag = false;
  if (form.name.value == ""){
    errName.innerHTML = "名前が未入力です";
    errName.style.color = "red";
    errFlag = true;
  }else{
    errName.innerHTML = "";
  }

  if (form.kana.value == "" || !form.kana.value.match(/^[ァ-ヶー　]+$/)){
    errKana.innerHTML = "全角カナで入力してください";
    errKana.style.color = "red";
    errFlag = true;
  }else{
    errKana.innerHTML = "";
  }

  if (form.tel.value == "" || !form.tel.value.match(/^\d[0-9]{10,11}$/)){
    errTel.innerHTML = "電話番号をハイフン無しで入力してください";
    errTel.style.color = "red";
    errFlag = true;
  }else{
    errTel.innerHTML = "";
  }

  if (form.mail.value == "" || !form.mail.value.match(/^[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+(\.[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+)*@[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+(\.[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+)*$/)) {
    errMail.innerHTML = "メールアドレスの形式で入力してください";
    errMail.style.color = "red";
    errFlag = true;
  }else{
    errMail.innerHTML = "";
  }

  if (errFlag === true) {
    e.preventDefault();
  }
  

}