var socket = io();

socket.on('sent info', function(msg){
  $('#text').html('<p>' + msg + '</p>');
});
