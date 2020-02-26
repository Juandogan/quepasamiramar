const express = require ('express'); // traigo a express
const morgan = require ('morgan'); // traigo middleware morgan muestra las peticiones en consola. 
const cors = require ('cors'); // modulo para comunicar los dos servidores angular y node
const { mongoose } = require ('./database'); 
const path = require ('path');
const app = express(); // express() devuelve el objeto completo lo instancio en la constante "app"



// Settings
app.set('port', process.env.PORT || 3789);  // tomo app e nsu propiedad .set  // creo variable  "port" y luego paso contenido - process.env.PORT (escucha puerto por defecto)
// sino usa el 3000

// Midlewares  conecta 
app.use(morgan('dev')); // morgan es una funcion,app.use ejecuta funciones  la pegamos en la propiedad use de app. y pasamos el parametro dev que indica que mostrara el mensaje por consola de desarrollo. las peticiones de las acciones dentro de un metodo de app.use ejecuta una funcion
app.use(express.json()); // habilita para que el servidor entienda formato json, es una propiedad de la dependencia Express.
app.use(cors({origin:'http://localhost:4200'}));
// Routes
app.use('/api/cards', require('./routes/card.routes'));


// Starting 

app.listen(app.get('port'), () => {console.log("Escuchando en puerto: ", app.get('port'))}); // app.listen escucha el puerto. 
// app.listen  primer parametro puerto. funcion flecha para salida por consola. 