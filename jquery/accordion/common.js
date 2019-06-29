$(function() {  
  $('#accordion dd').hide();
  $('#accordion dd:first').show();

  $('#accordion dt').click(function() {
      $(this).next().slideToggle();
      $('#accordion dt').not($(this)).next('#accordion dd').slideUp();
  });

  
});