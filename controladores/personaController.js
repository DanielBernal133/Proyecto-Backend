import mongoose from "mongoose";
import PersonaSchema from "../modelos/personaModel.js";

//Construir objeto persona basado en el sistema
const Persona = mongoose.model('Persona' , PersonaSchema);

//Crear accion para registrar nueva persona 
export const addPersona = function(request, response){
    //crear nueva persona 
    let p = new Persona( request.body);
    //grabar a nueva persona
    p.save((error, p) => {
            if (error) {
                response.send(error);
            } else {
                response.json(p);
            }
        })
}

//Accion para obtener el resultado de todas las personas
export const getPersonas = (request, response)=>{
    Persona.find( { } , (error, personas) => {
        if(error){
            response.send(error);
        }else{
            response.json(personas);
        }
    })
}

//Accion para obtener un persona por su ID
export const getPersonaByID = (request , response)=>{
    Persona.findById(request.params.personaid , (error, persona)=>{
        if(error){
            response.send(error);
        }else{
            response.json(persona);
        }
    })
}

//Accion de actualizar una persona
export const updatePersona = (request, response)=>{
    Persona.findOneAndUpdate( { _id : request.params.personaid }, request.body, 
        {
            new: true
        }
        ,(error, persona)=>{
            if(error){
                response.send(error);
            }else{
                response.json(persona);
            } 
        })
}


export const deletePersona = (request, response)=>{
    Persona.remove({_id: request.params.personaid}, 
        (error, persona)=>{
            if(error){
                response.send(error);
            }else{
                response.json( {mensaje : "borrado exitosamente"} );
            }
        })
}