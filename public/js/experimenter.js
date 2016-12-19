var socket = io();

$('#btn1').click(function(){
  socket.emit('go clicked', 'This is risako'); //go clickedがプッシュされる（This is risakoはデータ
})
