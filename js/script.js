$(document).ready(function(){

  var $nights = $("#nightsSelect")
  for (i=1; i<=10; i++){
    $nights.append($('<option></option>').val(i).html(i))
  }

  var $guests = $("#guestsSelect")
  for (i=1; i<=10; i++){
    $guests.append($('<option></option>').val(i).html(i))
  }

  $(function() {
    $( "#datepicker" ).datepicker({ autoSize: true });
  });


// ITC Gothic Sans trial available for 30 days from 20 Oct
  var path = '//easy.myfonts.net/v2/js?sid=2820(font-family=ITC+Serif+Gothic+Bold)&sid=216109(font-family=ITC+Serif+Gothic+Std+Light)&sid=216111(font-family=ITC+Serif+Gothic+Std+Bold)&sid=216114(font-family=ITC+Serif+Gothic+Std+Roman)&key=0W4vFr1w30',
      protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
      trial = document.createElement('script');
  trial.type = 'text/javascript';
  trial.async = true;
  trial.src = protocol + path;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(trial);

});