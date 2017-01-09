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
app.get('/index', function(req, res){
  res.render('index.html');
});

//socketに関することはioを使う(httpとは規格がちがうため)

//実験者→被験者
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('started', function(msg){
    socket.broadcast.emit('name', msg);
    console.log('message: ' + msg);
  });
  socket.on('decided', function(msg){
    socket.broadcast.emit('selected photo', msg);
    console.log('message: ' + msg);
  });
  socket.on('commented_1', function(msg){
    socket.broadcast.emit('comment1', msg);
    console.log('message: ' + msg);
  });
  socket.on('commented_2', function(msg){
    socket.broadcast.emit('comment2', msg);
    console.log('message: ' + msg);
  });
  socket.on('commented_4', function(msg){
    socket.broadcast.emit('comment4', msg);
    console.log('message: ' + msg);
  });
  socket.on('commented_5', function(msg){
    socket.broadcast.emit('comment5', msg);
    console.log('message: ' + msg);
  });
  socket.on('commented_6', function(msg){
    socket.broadcast.emit('comment6', msg);
    console.log('message: ' + msg);
  });
  socket.on('commented_7', function(msg){
    socket.broadcast.emit('comment7', msg);
    console.log('message: ' + msg);
  });
  socket.on('commented_8', function(msg){
    socket.broadcast.emit('comment8', msg);
    console.log('message: ' + msg);
  });
  socket.on('commented_3', function(msg){
    socket.broadcast.emit('comment3', msg);
    console.log('message: ' + msg);
  });
  socket.on('evaluated', function(msg){
    socket.broadcast.emit('evaluation', msg);
    console.log('message: ' + msg);
  });
  socket.on('finished', function(msg){
    socket.broadcast.emit('wait', msg);
    console.log('message: ' + msg);
  });
  socket.on('completed', function(msg){
    socket.broadcast.emit('slideshow', msg);
    console.log('message: ' + msg);
  });
  socket.on('finalized', function(msg){
    socket.broadcast.emit('eva_start', msg);
    console.log('message: ' + msg);
  });
  socket.on('finalized2', function(msg){
    socket.broadcast.emit('eva_start2', msg);
    console.log('message: ' + msg);
  });
  socket.on('finalevaluated', function(msg){
    socket.broadcast.emit('finish', msg);
    console.log('message: ' + msg);
  });
  // socket.on('finalized', function(msg){
  //   socket.broadcast.emit('finalphoto', msg);
  //   console.log('message: ' + msg);
  // });
});


app.get('/experimenter', function(req, res){
  res.render('experimenter.html');
});

app.get('/slideshow', function(req, res){
  res.render('slideshow.html');
});


app.get('/index2', function(req, res){
  res.render('index2.html');
});

app.get('/experimenter2', function(req, res){
  res.render('experimenter2.html');
});

app.get('/experimenter_eva', function(req, res){
  res.render('experimenter_eva.html');
});


server.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
