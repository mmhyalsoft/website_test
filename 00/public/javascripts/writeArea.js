/**
 * Created by Marco on 2/28/2017.
 */
$( document ).ready(function() {

    $('.elementContainer').click(function() {
      $('.elementContainer').fadeOut(100);
      $('#content').show(600);
    });

    $('#myForm input').on('change', function() {
       //alert($('input[name="myRadio"]:checked', '#myForm').val());
       if($('input[name="when"]:checked', '#myForm').val()==="later") {
         console.log("later selected");
         $('#datepicker').hide(200);
         $('#email').show(200);
       }

       if($('input[name="when"]:checked', '#myForm').val()==="date") {
         console.log("date selected");
         $('#datepicker').show(200);
         $('#email').hide(200);
       }
    });

    //date picker
    var picker = new Pikaday({ field: document.getElementById('datepicker') });
});
