// function preloadImage(url)
// {
//   var img=new image();
//   img.src=url;
// }

//
// $('<img src="ahcx063-28.jpg">');
// $('<img src="ahkq049-35.jpg">');
// $('<img src="anbx012-01.jpg">');
// $('<img src="anuz043-13.jpg">');
// $('<img src="aoax090-23.jpg">');
// $('<img src="aofz114-05.jpg">');

var socket = io();
//スタート
socket.on('name', function(msg){
  $('#startLayer').prepend('<p id="text0">こんにちは。<br />あなたにぴったりの動画を作るアプリです。</p>');
  $('#text0').fadeIn('slow');
  setTimeout(function(){
    $('#text0').fadeOut('slow');
  }, 3000);
  setTimeout(function(){
    $('#text0').fadeIn('slow');
    $('#text0').text('まずはあなたの好みを選択してください。');
  }, 5000);
  setTimeout(function(){
    $('#text0').fadeIn('slow');
    $('#text0').text('ゆっくり考えて答えてくださいね…');
  }, 8000);
  setTimeout(function(){
    $('#start').fadeIn();
  }, 10000);
});

$('#start').click(function(){
  $("#startLayer").fadeOut();
});


//写真が選択されたとき
socket.on('selected photo', function(msg){
  $('#photo1').attr('src', '/images/' + msg + '.jpg');
  setTimeout(function(){
      $('#photo1').css('opacity', '1');
    $('#loading').css('display', 'none');
  }, 2000);
  $('#overLayer').fadeOut('slow');
});

//評価したとき
$('.photo > button').click(function(){
  socket.emit('evaluated', $(this).attr('label'));
  $('#photo1').css('opacity', '0');
  $('#photo1').attr('src', '/images/selecting.jpg');
  $('#loading').css('left', '40%');
  $('#loading').css('display', 'block');
});

//終わったとき
socket.on('wait', function(msg){
  $('#loading').css('display', 'none');
  $('#finishLayer').show();
  $('#text1').fadeIn('slow');
});



socket.on('finalphoto', function(msg){
  console.log(msg);
  $('#slideshowInner ul').append('<li><img src="/photo_for_slide/' + msg + '.jpg" alt=""></li>');
});


socket.on('slideshow', function(msg){
  $('#text1').text('スライドショーができました。ご覧ください。');
  $('#finishLayer').append('<p><button id="slideshowbtn" onclick="location.href=\'/slideshow\'">スライドショーを見る</button></p>');
  // $('#finishLayer').append('<p><button id="slideshowbtn">スライドショーを見る</button></p>');
//
//
// $('#slideshowbtn').click(function(){
//   $('#slideshowLayer').show();
//   $('#slideshowInner').css('width', 655*$('slideshowInner ul').length+'px');
//   $('#slideshowInner ul li:last').prependTo('ul');
//   $('#slideshowInner').css('margin-left', '-655px');
//
//   var timerID = setInterval(function(){
//     // console.log('hi');
//     $('#slideshowInner').animate({
//       'margin-left' : parseInt($('#slideshowInner').css('margin-left'))- 640 + 'px'
//     }, 'slow', 'swing',
//     function(){
//       $('#slideshowInner').css('margin-left', '-655px');
//       $('#slideshowInner ul li:first').appendTo('ul');
//     })}, 1000);
//     setTimeout(function(){
//       clearInterval(timerID);
//     }, 6000);
// })
});


// $('#slideshowInner').css('width', 655*$('slideshowInner ul').length+'px');
// $('#slideshowInner ul li:last').prependTo('ul');
// $('#slideshowInner').css('margin-left', '-655px');
//
// var timerID = setInterval(function(){
//   // console.log('hi');
//   $('#slideshowInner').animate({
//     'margin-left' : parseInt($('#slideshowInner').css('margin-left'))- 640 + 'px'
//   }, 'slow', 'swing',
//   function(){
//     $('#slideshowInner').css('margin-left', '-655px');
//     $('#slideshowInner ul li:first').appendTo('ul');
//   })}, 3000);
