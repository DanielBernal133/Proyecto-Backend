//Funcion para gestionar las rutas del proyecto 
//Necesita el objeto express para crear los endpoints
//endpoint: ruta REST que expone colecciones/singletones/resultado de operaciones pero en formato JSON
import {addPersona, getPersonas, getPersonaByID, updatePersona, deletePersona} from "../controladores/personaController.js";

const rutas = (app) => {
    app.route('/personas')
        .get(getPersonas)
        .post( addPersona );

    app.route('/personas/:personaid') 
        .get(getPersonaByID)
        .put(updatePersona)
        .delete(deletePersona)   
}

export default rutas;