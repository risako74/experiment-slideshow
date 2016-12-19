var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');

app.set('views', path.join(__dirname, 'views')); //viewsの中にviewのテンプレートファイルをかく
app.set('view engine', 'ejs')

app.engine('html', require('ejs').renderFile);
app.use(express.static('public')); // static file(css, js, 画像)の読み込み

//'/'にアクセスが来た時にリクエストの内容がreqに入って、レスポンスの内容がresに入る
app.get('/', function(req, res){
  res.render('index.html');
});

//socketに関することはioを使う(httpとは規格がちがうため)
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('go clicked', function(msg){
    socket.broadcast.emit('sent info', msg);
    console.log('message: ' + msg);
  });
});

app.get('/experimenter', function(req, res){
  res.render('experimenter.html');
});

server.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
