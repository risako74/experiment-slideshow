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

$('#btn_a').click(function(){
  socket.emit('commented_1', $('#message_a').val());
  setTimeout(function(){
      $('#message_a').val('');
  }, 1000);
});

$('#btn_c').click(function(){
  socket.emit('commented_2', $('#message_c').val());
  setTimeout(function(){
      $('#message_c').val('');
  }, 1000);
});

$('.btn_b').click(function(){
  socket.emit('commented_3', $(this).text());
});

$('#btn3').click(function(){
  socket.emit('finished', $(this).text());
});

$('#btn4').click(function(){
  socket.emit('completed', $(this).text());
});

$('#btn7').click(function(){
  socket.emit('finalized', $(this).text());
});

//
// $('#btn6').click(function(){
//   socket.emit('finalized', $('#slide_photoname').val());
//   $('.finishing').append('<div class="data2"><p><img src="photo_for_slide/' + $('#slide_photoname').val() +'.jpg" width="50%"></p><p>' + $('#slide_photoname').val() +'</p></data>')
// });


socket.on('evaluation', function(msg){
  $('#userPreference > .data:first').append('<strong>　　　' + msg + '</strong>');
});
