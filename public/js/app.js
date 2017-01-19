//スタート
socket.on('appearance_a', function(msg){
  $('#startLayer').prepend('<p id="text0">こんにちは、' + msg + 'お兄さん。<br />あなたにぴったりの動画をお作りしたいと思っています。</p>');
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
    $('#text0').text('急がなくて大丈夫です。ゆっくり考えて答えてくださいね…');
  }, 10000);
  setTimeout(function(){
    $('#start').fadeIn();
  }, 12000);
});

socket.on('appearance_b', function(msg){
  $('#startLayer').prepend('<p id="text0">こんにちは、' + msg + 'お姉さん。<br />あなたにぴったりの動画をお作りしたいと思っています。</p>');
  $('#text0').fadeIn('slow');
  setTimeout(function(){
    $('#text0').fadeOut('slow');
  }, 3000);
  setTimeout(function(){
    $('#text0').fadeIn('slow');
    $('#text0').text('まずはあなたの好みをおしえてください。');
  }, 5000);
  setTimeout(function(){
    $('#text0').fadeIn('slow');
    $('#text0').text('急がなくて大丈夫です。ゆっくり考えて答えてくださいね…');
  }, 8000);
  setTimeout(function(){
    $('#start').fadeIn();
  }, 10000);
});

//コメントが送られたとき
socket.on('comment1', function(msg){
  $('#overLayer').show();
  $('#text').fadeIn('slow');
  $('#loading').css('display', 'none');
  $('#text').text(msg + '写真がお好きなようですね');
  setTimeout(function(){
    $('#text').fadeOut('slow')
  }, 5000);
});

socket.on('comment2', function(msg){
  $('#overLayer').show();
  $('#text').fadeIn('slow');
  $('#loading').css('display', 'none');
  $('#text').text(msg + '写真もいいですよね…私も好きです！');
  setTimeout(function(){
    $('#text').fadeOut('slow')
  }, 5000);
});

socket.on('comment4', function(msg){
  $('#overLayer').show();
  $('#text').fadeIn('slow');
  $('#loading').css('display', 'none');
  $('#text').text(msg + '写真なら必ずお好き、というわけではなさそうですね…。むずかしい…。');
  setTimeout(function(){
    $('#text').fadeOut('slow')
  }, 5000);
});

socket.on('comment5', function(msg){
  $('#overLayer').show();
  $('#text').fadeIn('slow');
  $('#loading').css('display', 'none');
  $('#text').text(msg + '写真が好きなのかと思っていましたが、私の勘違いでした…。');
  setTimeout(function(){
    $('#text').fadeOut('slow')
  }, 5000);
});

socket.on('comment6', function(msg){
  $('#overLayer').show();
  $('#text').fadeIn('slow');
  $('#loading').css('display', 'none');
  $('#text').text(msg + '写真がお好きだったわけですね…私も好きです！');
  setTimeout(function(){
    $('#text').fadeOut('slow')
  }, 5000);
});

socket.on('comment7', function(msg){
  $('#overLayer').show();
  $('#text').fadeIn('slow');
  $('#loading').css('display', 'none');
  $('#text').text(msg + '写真の方がやっぱりお好きなのでしょうか…');
  setTimeout(function(){
    $('#text').fadeOut('slow')
  }, 5000);
});

socket.on('comment8', function(msg){
  $('#overLayer').show();
  $('#text').fadeIn('slow');
  $('#loading').css('display', 'none');
  $('#text').text(msg);
  setTimeout(function(){
    $('#text').fadeOut('slow')
  }, 5000);
});

socket.on('comment3', function(msg){
  $('#overLayer').show();
  $('#text').fadeIn('slow');
  $('#loading').css('display', 'none');
  $('#text').text(msg);
  setTimeout(function(){
    $('#text').fadeOut('slow')
  }, 5000);
});

//評価したとき４つの評価に応じてコメントリストから順番にコメントを出す
var loveReactions = ['よかったです！次までもう少しお待ち下さい！', 'おおお！よかったです！少々お待ちくださいね。', 'うれしいです！もっと探しますね！', 'おこれも大好きなんですね！よかった！！', 'これすごくいいですよね！', 'なるほどなるほど！！！もう少しお待ちください…', 'おおおこれも！？！？うれしいです…！', 'また大好きだなんて…！感激です！', 'ありがとうございます！！とても気に入っていただけてるようですね！！', 'またですか…！すごい……！', 'お好きなものがたくさん見つかってとてもうれしいです！', 'これも大好きですか…！！！！！', 'こんなに大好きだなんて、逆に困ってしまうくらいです！！！'];
var likeReactions = ['うんうん！もっと好きなのがないか探しています…', 'なるほど！もう少しお待ちくださいね！', 'よかったです。もう少々お待ちください。', 'お好きなんですね！', 'なるほど…。もっと好きなのを探します！', 'お！これもですね！少々お待ちください…', 'うんうん、いいですね！', 'これもお好きなんですね…！もう少し探させてくださいね。', 'なるほどなるほど！もう少々お待ちください。', 'よかったです！大好きなのがもっと見つかるとさらによいのですが…。', 'これもお好きですね！わかりました！', 'どれも気に入っていただけてうれしいです！', 'これもですね！', 'なるほど…。わかってきました！', 'ありがとうございます！でももっと大好きなのを見つけたいんです…！', 'たくさんお好きな写真があるのはよかったです。', 'また好きと言っていただけました！うれしいです！', 'どれも好きで逆に悩んでしまいます！'];
var normalReactions = ['ふつうですか…。うーん。', 'うーん…。難しいですね…。', 'なるほど…。少々お待ちください。', 'そうですか…。もう少しお待ちくださいね。', 'これもふつうですね…。', 'うーん。もっと頑張って探します。', '難しいな…。もう少しお待ちください。', 'なるほど…。これもふつうですね…。', 'うーん。頑張るのでもう少々ご辛抱ください。', 'またふつうですか！うーーーーん…。', '好きなのがあまり見つからなくてすみません…。', '頑張って探しているのですが、難しいです…。', 'これもふつうなんですね………', 'またですね…ごめんなさい…', 'わかりました……。お待ちください……。', 'どれならお好きなんでしょう…！', 'もう見つからない気がしてきました…。', '力不足です。すみません。'];
var dislikeReactions = ['がーん……。少しお待ちくださいね……。', 'えっっ…。ごめんなさい…。', '嫌い……！すみません！！', 'そんな…。ごめんなさい、もっと一生懸命探します。', '本当にすみません…。もう少々ご辛抱ください。', 'またですか…。どうしたらいいでしょう…。', 'もうだめだ…。すみません、もう少々お付き合いください！！！！', 'がーーーーーーーーーん。'];

var labels = {"5": loveReactions, "2": likeReactions, "1": normalReactions, "-100": dislikeReactions};
var counts = {"5": 0, "2": 0, "1": 0, "-100": 0};

$('.photo > button').click(function(){
  socket.emit('evaluated', $(this).attr('label'));
  $('#photo1').css('opacity', '0');
  $('#photo1').attr('src', '/images/selecting.jpg');
  $('#loading').css('display', 'block');
  var label = $(this).attr('label');
  $('#smalltalk').text(labels[label][counts[label] % labels[label].length]);
  counts[label]++;
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
