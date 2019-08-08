$(function() {
  $("#open").on('click',function(){
    $("body").addClass("active");
  });
  $("#close").on('click',function(){
    $("body").removeClass("active");
  });

  //メニュー折りたたみ部分
  $("#menu2").on("click",function(){
    $("#menuDe").slideToggle();
  });

  //コーポレート折りたたみ部分
  $("#corDe1").on("click",function(){
    $("#corDe1").css("display","none");
    $("#corDe2").slideToggle();
    $("#contents").css("top","2500px");
    $("footer").css("top","4500px");
    $(".wrapper").css("height","4550px");
  });
  $(".close2").on("click",function(){
    $("#corDe1").css("display","block");
    $("#corDe2").slideToggle();
    $("#contents").css("top","1000px");
    $("footer").css("top","3000px");
    $(".wrapper").css("height","3100px");
  });
});