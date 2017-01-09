var socket = io();
var images = ['ahkx057-42', 'ahwq054-36', 'anbx026-03', 'anuz043-13', 'aofz114-05', 'aooq082-18', 'hcq004-32', 'hcq015-33', 'hcq016-34', 'hcq038-32', 'hcq070-34', 'hcx002-28', 'hcx063-28', 'hkq049-35', 'hkx048-42', 'hkx050-29', 'hkx053-38', 'hwq028-36', 'hwq062-36', 'hwx071-40', 'hwx073-31', 'hwx080-31', 'hwz001-37', 'hwz059-40', 'hwz060-40', 'hwz065-41', 'hyq074-39', 'hyq076-32', 'hyx072-30', 'hyx084-30', 'hyz077-37', 'hyz089-39', 'nbx012-01', 'nbx014-01', 'nbx019-02', 'nbx025-03', 'nbx030-02', 'nbx033-02', 'nbz029-10', 'nmq018-09', 'nmq023-08', 'nmq027-08', 'nmz007-11', 'nmz032-11', 'nmz037-11', 'nsq039-04', 'nsq041-04', 'nsq046-04', 'nsz031-12', 'nsz035-12', 'nuq034-06', 'nuq042-06', 'nuz006-13', 'nuz044-14', 'oaq093-15', 'oaq100-16', 'oax087-07', 'oax090-23', 'oax101-24', 'oax104-24', 'oaz102-25', 'ofq111-17', 'ofq116-17', 'ofx106-21', 'ofx113-22', 'ofx118-22', 'ofz103-27', 'ofz117-27', 'ooq105-19', 'oox083-20', 'oox110-20', 'ooz086-26', 'ooz094-25', 'ooz099-25'];
  for (var i = 0; i < images.length; i++) {
    var $image = $('<div/>', { class: 'photo_for_select'}).
      append($('<img/>', {src: "/images/" + images[i] + ".jpg", width: "100px"})).
      append($('<p/>', { text: images[i] }));
    $('#all_photos').append($image);
  }


$('#btn0').click(function(){
  socket.emit('started', $('#username').val());
});

var num = 0;
$('#btn1').click(function(){
  socket.emit('decided', $('#photoname').val());
  $('.selected').addClass('sent').removeClass('selected');
  setTimeout(function(){
      $('#photoname').val('');
  }, 1000);
  num = num + 1;
  $('.count').text(num);
  // $('#userPreference').prepend('<div class="data"><p><img src="/images/' + $('#photoname').val() +'.jpg" width="50%"></p><p>' + $('#photoname').val() +'</p></data>');
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


$('.photo_for_select').click(function(){
  if($(this).hasClass('selected')){
    $(this).removeClass('selected');
  } else{
    $('.selected').removeClass('selected');
    $(this).addClass('selected');
  }
  // console.log($(this).children('p').text());
  $('#photoname').val($(this).children('p').text());
});

//
// $('#btn6').click(function(){
//   socket.emit('finalized', $('#slide_photoname').val());
//   $('.finishing').append('<div class="data2"><p><img src="photo_for_slide/' + $('#slide_photoname').val() +'.jpg" width="50%"></p><p>' + $('#slide_photoname').val() +'</p></data>')
// });

//
// socket.on('evaluation', function(msg){
//   $('#userPreference > .data:first').append('<strong>　　　' + msg + '</strong>');
// });
