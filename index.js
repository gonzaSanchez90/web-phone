const express = require ('express');
const app = express();
const path = require ('path');
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const Rutas = require('./rutas/rutas');

// const ejs = require('ejs');
const bd='mongodb://localhost:27017/smartphones';
// Conexión con el server
mongoose.connect(bd)
.then(()=>console.log('conexión exitosa con la BBDD'))
.catch((err)=> console.log('no puedo conectar con la BBDD'));
// Creamos el puerto
app.set('port', process.env.PORT || 8080);
// Creamos las vistas
app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');
// Usamos el middleware morgan para desarrollo
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));
// Utilizamos las rutas
app.use('/', Rutas);
// Ponemos el Servidor a escuchar
app.listen(app.get('port'), ()=>{
    console.log('servidor lanzado en el puerto:', app.get('port'));
    console.log('==> ACCEDER ==> http://localhost:8080');
});

