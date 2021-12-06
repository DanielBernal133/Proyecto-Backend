import Express from "express";
import rutas from "./rutas/rutas.js";
import mongoose from "mongoose";
import bodyparser from "body-parser";

const app = Express()
const puerto = 5000

//conexion a mongo
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/personaCMR" , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

//configuracion de body-parsert
app.use(bodyparser.urlencoded({ extended : true }))
app.use(bodyparser.json())


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Utilizo las rutas definidas en el archivo rutas.js
rutas(app);


//Crear servidor
app.listen( puerto, function() {
    console.log(`Servidor ejecutando en puerto${puerto}`)
})


