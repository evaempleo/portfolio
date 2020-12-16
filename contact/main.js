console.log("hello")

 $(document).ready(function() {
     $('#submit').click(function() {
     $('#contactform').attr('action',
                      'mailto:evamarieempleo@gmail.om?subject=Eva Empleo Digital Portfolio' +
                      $('#name').val() + '&body=' + $('#email').val() + '&body=' + $('#comments').val() + '&body=');
       $('#contactform').submit();
     });
 });


 $('#submit').click(function(){
  //console.log("clicked!")
  $("#submit").addClass("animate__animated animate__shakeY");

  $(".modal").show();

});

$('.modal').hide();

$('.modal').click(function(){
  $('.modal').hide();
})
