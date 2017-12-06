/* importar o modulo framework express*/
var express = require('express');
/* importar o modulo consign */
var consign = require('consign');
/* importar o body-parse*/
var body_parser = require('body-parser');

/* importar o modulo do express-validator */
var express_validator = require('express-validator');

/* iniciar o objeto do express*/
var app = express();
/* setar as variaveis que a 'view' engine e 'views' do express */
app.set('view engine','ejs');
app.set('views','./app/views');
/* configurar a propriedade static do express*/
app.use(express.static('./app/public'));
/* configurar o middlware body-parser*/
/* pode recuperar os dados da pagina com o body parer via json*/
app.use(body_parser.urlencoded({extended:true}));
/* configurar o middlware express-validator*/
app.use(express_validator());
/* efetua o autoload das rotas, dos models e dos controllers para o objeto app*/
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportar o objeto app*/
module.exports = app;