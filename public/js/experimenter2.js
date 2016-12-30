var socket = io();


$('#btn0').click(function(){
  socket.emit('started', $('#username').val());
});

$('#btn1').click(function(){
  socket.emit('decided', $('#photoname').val());
  setTimeout(function(){
      $('#photoname').val('');
  }, 1000);

  $('#userPreference').prepend('<div class="data"><p><img src="/images/' + $('#photoname').val() +'.jpg" width="50%"></p><p>' + $('#photoname').val() +'</p></data>');
});

$('#btn3').click(function(){
  socket.emit('finished', $(this).text());
});

$('#btn4').click(function(){
  socket.emit('completed', $(this).text());
});

$('#btn8').click(function(){
  socket.emit('finalized2', $(this).text());
});

//
// $('#btn6').click(function(){
//   socket.emit('finalized', $('#slide_photoname').val());
//   $('.finishing').append('<div class="data2"><p><img src="photo_for_slide/' + $('#slide_photoname').val() +'.jpg" width="50%"></p><p>' + $('#slide_photoname').val() +'</p></data>')
// });


socket.on('evaluation', function(msg){
  $('#userPreference > .data:first').append('<strong>　　　' + msg + '</strong>');
});
