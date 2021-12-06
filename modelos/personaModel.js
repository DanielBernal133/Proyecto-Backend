import  mongoose from "mongoose";

//Definir esquema de personas 
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
    nombre_juego : {
        type: String,
        required : "Ingrese nombre",
    },
    empresa : {
        type: String,
    },
    tipo_juego :{
        type : String,
    },
    caracteristica :{
        type :String,
    }
})

export default PersonaSchema;