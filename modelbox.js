$(document).ready(function() {
  var index = 0;
  $('.alert').hide();
  $('.link').click(function() {
    if(index % 2 == 0) {
      $('.alert').show();
    }
    else $('.alert').hide();
    index++;
  })
})