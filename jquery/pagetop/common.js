$(window).scroll(function(){
	if( $(window).scrollTop() > 150){
    $("#pageTop").show();
	} else {
		$("#pageTop").hide();
	}
});