var socket = io();
//
// socket.on('finalphoto', function(msg){
//   $('ul').append('<li><img src="/images/' + msg + '.jpg" alt=""></li>');
// });

$('#slideshowInner').css('width', 655*$('slideshowInner ul').length+'px');
$('#slideshowInner ul li:last').prependTo('ul');
$('#slideshowInner').css('margin-left', '-655px');

setTimeout(function(){
  $('#slideshowInner').fadeIn('slow');
}, 3000);


setTimeout(function(){
var timerID= setInterval(function(){
  // console.log('hi');
  $('#slideshowInner').animate({
    'margin-left' : parseInt($('#slideshowInner').css('margin-left'))- 640 + 'px'
  }, 'slow', 'swing',
  function(){
    $('#slideshowInner').css('margin-left', '-655px');
    $('#slideshowInner ul li:first').appendTo('ul');
  })}, 5000);
  setTimeout(function(){
        clearInterval(timerID);
      }, 35000);
}, 3000);

socket.on('eva_start', function(msg){
  $('#finalLayer').fadeIn('slow');
  setTimeout(function(){
        $('.lasteva1').fadeIn('slow');
      }, 3000);
});

$('.lasteva1 > button').click(function(){
  $('.lasteva1').hide();
  $('#text2').hide();
  if($(this).attr('label')=="-100"){
    $('#finalLayer').html('<p id="text3">…すみません、残念です……。<br>次は頑張るのでまた来てくださいね…。<br>ありがとうございました。</p>');
  }
  else if($(this).attr('label')=="1"){
    $('#finalLayer').html('<p id="text3">そうですか……。<br>次はもっと頑張るのでまた来てくださいね。<br>ありがとうございました。</p>');
  }
  else if($(this).attr('label')=="2"){
    $('#finalLayer').html('<p id="text3">気に入っていただけてよかったです！<br>また来てくださいね。<br>ありがとうございました。</p>');
  }
  else{
    $('#finalLayer').html('<p id="text3">気に入っていただけてとってもうれしいです！<br>またお待ちしています！<br>ありがとうございました。</p>');
  }
  setTimeout(function(){
        $('#text3').fadeIn('slow');
      }, 1000);
  setTimeout(function(){
        $('#text3').fadeIn('slow');
        $('#text3').text('あなたの残りの1日もよいものになりますように！');
      }, 5000);
  setTimeout(function(){
        $('#text3').fadeOut('slow');
      }, 9000);
      setTimeout(function(){
        $('#finalLayer').html('<p id="text5">終了です</p>')
      }, 12000);
});

socket.on('eva_start2', function(msg){
  console.log();
  $('#lasteva').removeClass('lasteva1').addClass('lasteva2');
  $('.lasteva2 > button').click(function(){
    console.log();
    $('.lasteva2').hide();
    $('#text2').hide();
    $('#finalLayer').html('<p id="text4">ありがとうございました。</p>');
    setTimeout(function(){
          $('#text4').fadeIn('slow');
        }, 1000);
    setTimeout(function(){
          $('#text4').fadeOut('slow');
        }, 7000);
    setTimeout(function(){
      $('#finalLayer').html('<p id="text5">終了です</p>')
    }, 10000);
  });
  $('#finalLayer').fadeIn('slow');
  setTimeout(function(){
        $('.lasteva2').fadeIn('slow');
      }, 3000);
});

setTimeout(function() {
  var $audio = $('#audio');
    $audio.animate({volume: 0}, 2000);
}, 35000);

$('#lasteva > button').click(function(){
  socket.emit('finalevaluated', $(this).attr('label'));
});
