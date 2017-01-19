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

//スタート
socket.on('nonAppearance', function(msg){
  $('#startLayer').prepend('<p id="text0">こんにちは。<br />あなたにぴったりの動画をお作りしたいと思っています。</p>');
  $('#text0').fadeIn('slow');
  setTimeout(function(){
    $('#text0').fadeOut('slow');
  }, 5000);
  setTimeout(function(){
    $('#text0').fadeIn('slow');
    $('#text0').text('まずはあなたの好みをおしえてください。');
  }, 7000);
  setTimeout(function(){
    $('#text0').fadeIn('slow');
    $('#text0').text('ゆっくり考えて答えてくださいね…');
  }, 10000);
  setTimeout(function(){
    $('#start').fadeIn();
  }, 12000);
});

//評価したとき

var machineReactions = ['読み込んでいます…。', 'ただいま用意をしています。', '読み込み中です。', '用意に少し時間がかかります…。', 'ただいま読み込み中です…。', '探している最中です。', '準備中です…。', '少々時間がかかります…。', 'ただいま読み込んでいます。', '用意中です…。', '分析をしています…。', '時間がかかっています…。', 'ただいま探しています。', '分析中です。', '準備しています…。', '読み込みに時間がかかります…。', '用意しています…。', '分析している最中です…。'];
var counts = 0;

$('.photo > button').click(function(){
  socket.emit('evaluated', $(this).attr('label'));
  $('#photo1').css('opacity', '0');
  $('#photo1').attr('src', '/images/selecting.jpg');
  $('#loading').css('left', '40%');
  $('#loading').css('display', 'block');
  $('#smalltalk').text(machineReactions[counts % machineReactions.length]);
  counts++;
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
