var express=require('express') //Import 
var app=express();
var socket = require('socket.io-client')('http://localhost:5000');
var bodyParser = require('body-parser'); //Hacer get y post desde el front 

var properties = require('./properties.json')
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('views', __dirname + '/views'); //Renderizar vistas
app.engine('html', require('ejs').renderFile); // Para procesar todo el HTML 
app.use(express.static('static')); //Donde voy a guardar archivos estaticos (java script y sus librerias)


app.get('/', function(request, response){ //Start the main page 
    context = {}
    context['political'] = ''

	response.render('crawler.html',context);
	//iniciar("https://es.wikipedia.org/wiki/Juan_Manuel_Santos")
}).listen(properties.crawler.port)  //Mientras :3

app.get('/search/personal_info', function(request, response){
    socket.emit('search politician', request.query.search)
    socket.on('my response', function(msg){
        salida = {}
        salida['Nombre'] = msg.Nombre
        salida['Url'] = msg.Url
        salida['Imagen']= msg.Imagen
        salida['Familia']= msg.Familia
        salida['Laboral'] = msg["laboral - links"]
        response.end(JSON.stringify(msg))
    })
})

app.get('/search/person:*', function(request, response){

    var political=request.query.search
    console.log(request.query.search)
    context={}

    context['political']=political

    
    response.render('crawler.html',context)

});


function iniciar(inicio){ 
    var a = {}
    getInfo(inicio, function(info){ a = info})
    console.log(a)
}
