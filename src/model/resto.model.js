const{Schema, model}= require('mongoose');

const restoSchema = new Schema({
    name:{type:String, required:true},
    url:{type:String},
    coordinates:{type:String},
    horario:{type:String},
    telefono:{type:String},
    imagen:{type:String},
    ofertadellocal:{type:String},
    servicios:[Object]
});

const Resto = new model('locales',restoSchema);

module.exports = Resto;