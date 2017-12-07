/*importar as configuracoes do servidor*/
var app = require('./config/server');
/*parametrixar a porta de escuta*/
var server = app.listen(3000,function(){
    console.log("Servidor online");
});
var io = require('socket.io').listen(server);

app.set('io',io);
/* criar a conecao por websocket*/
io.on('connection',function(socket){
    console.log('Usuario conectou');
    
    socket.on('disconnect',function(){
        console.log("Usuario desconectou");
    });
    
    socket.on('msgParaServidor',function(data){
       socket.emit(
           'msgParaCliente',
           {apelido : data.apelido, mensagem:data.mensagem}
       ); 
        socket.broadcast.emit(
           'msgParaCliente',
           {apelido : data.apelido, mensagem:data.mensagem}
       ); 
    });
});
