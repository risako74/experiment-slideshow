var socket = io();

// Preload all image before starting
var image_sources = [
  'ahkx057-42', 'ahwq054-36', 'anbx026-03', 'anuz043-13', 'aofz114-05',
  'aooq082-18', 'hcq004-32', 'hcq015-33', 'hcq016-34', 'hcq038-32', 'hcq070-34',
  'hcx002-28', 'hcx063-28', 'hkq049-35', 'hkx048-42', 'hkx050-29', 'hkx053-38',
  'hwq028-36', 'hwq062-36', 'hwx071-40', 'hwx073-31', 'hwx080-31', 'hwz001-37',
  'hwz059-40', 'hwz060-40', 'hwz065-41', 'hyq074-39', 'hyq076-32', 'hyx072-30',
  'hyx084-30', 'hyz077-37', 'hyz089-39', 'nbx012-01', 'nbx014-01', 'nbx019-02',
  'nbx025-03', 'nbx030-02', 'nbx033-02', 'nbz029-10', 'nmq018-09', 'nmq023-08',
  'nmq027-08', 'nmz007-11', 'nmz032-11', 'nmz037-11', 'nsq039-04', 'nsq041-04',
  'nsq046-04', 'nsz031-12', 'nsz035-12', 'nuq034-06', 'nuq042-06', 'nuz006-13',
  'nuz044-14', 'oaq093-15', 'oaq100-16', 'oax087-07', 'oax090-23', 'oax101-24',
  'oax104-24', 'oaz102-25', 'ofq111-17', 'ofq116-17', 'ofx106-21', 'ofx113-22',
  'ofx118-22', 'ofz103-27', 'ofz117-27', 'ooq105-19', 'oox083-20', 'oox110-20',
  'ooz086-26', 'ooz094-25', 'ooz099-25'];
var images = {};
function preload(sources) {
  for (i = 0; i < sources.length; i++) {
    images[sources[i]] = $("<img>", {
      "src": '/images/' + sources[i] + '.jpg',
      "class": "main_photo",
      "id": "photo1"
    })
  }
}
preload(image_sources)

$('#start').click(function(){
  $("#startLayer").fadeOut();
});

//写真が選択されたとき
socket.on('selected photo', function(msg){
  $('#photo_container').html(images[msg]);
  $('#photo1').css('opacity', '1');
  $('#loading').css('display', 'none');
  $('#overLayer').fadeOut('slow');
});
