/*importar as configuracoes do servidor*/
var app = require('./config/server');
/*parametrixar a porta de escuta*/
app.listen(3000,function(){
    console.log("Servidor online");
});