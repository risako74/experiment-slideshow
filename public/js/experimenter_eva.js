var socket = io();

socket.on('selected photo', function(msg){
  $('#userPreference').prepend('<div class="data"><p><img src="/images/' + msg +'.jpg" width="70%"></p><p>' + msg +'</p></data>');
});
socket.on('evaluation', function(msg){
  $('#userPreference > .data:first').append('<strong>　　　' + msg + '</strong>');
});
socket.on('comment1', function(msg){
  $('#conversation').prepend('<p>' + msg + '写真がお好きなようですね!</p>');
});
socket.on('comment2', function(msg){
  $('#conversation').prepend('<p>' + msg + '写真もいいですよね…私も好きです！</p>');
});
socket.on('comment4', function(msg){
  $('#conversation').prepend('<p>' + msg + '写真なら必ずお好き、というわけではなさそうですね…。むずかしい…。</p>');
});
socket.on('comment5', function(msg){
  $('#conversation').prepend('<p>' + msg + '写真が好きなのかと思っていましたが、私の勘違いでした…。</p>');
});
socket.on('comment6', function(msg){
  $('#conversation').prepend('<p>' + msg + '写真がお好きだったわけですね…私も好きです！</p>');
});
socket.on('comment7', function(msg){
  $('#conversation').prepend('<p>' + msg + '写真の方がやっぱりお好きなのでしょうか…</p>');
});
socket.on('comment8', function(msg){
  $('#conversation').prepend('<p>' + msg + '</p>');
});
socket.on('comment3', function(msg){
  $('#conversation').prepend('<p>' + msg + '</p>');
});

socket.on('finish', function(msg){
  $('#userPreference').append('<p>' + msg + '</p>');
});
