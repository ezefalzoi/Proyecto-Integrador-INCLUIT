const config = require('config');
const Resto = require('../../model/resto.model');
const{saveLocal,deleteLocal} = require('../../services/resto.services');

//async function hola(req,res){
  // res.json("test base de dato nomgoo") ;
//};

//metodo para agregar data a la base de datos 
async function addResto (req,res){
   try{ 
    const data = req.body;
    const result = await saveLocal(data);
    res.json(result)
   } catch(err){
    console.error(err);
    res.status(400);
    res.json(err)
   }
}
   
// metodo para buscar toda la data de en base de datos 
async function getAllResto (req,res){
    const locales =await Resto.find({})
    .then(data =>{
        res.json(data);
    }).catch((err)=> {
        res.status(400);
        console.error(err);
        res.json(err)
    }) 
}
//metodo para ver la data en la base de datos  mediante id especifico 
async function getLocalById (req,res){
    const {id} = req.params;
    const local = await Resto.findById(id)
    .then(data =>{
        res.json(data);
    }).catch((err)=> {
        res.status(400);
        console.error(err);
        res.json(err)
    }) 
}
/* metodo para modificar datos en la base de datos mediante id especifico*/
async function updateLocalById(req,res){
    const {id} = req.params;
    const data = req.body;
    const local= await Resto.findById(id)
    .then((local) => {
        local.name = data.name;
        local.url = data.url;
        local.coordinates = data.coordinates;
        local.horario = data.horario;
        local.telefono = data.telefono;
        local.imagen = data.imagen;
        local.servicios = data.servicios;
        local.ofertadellocal = data.ofertadellocal;
        local.save();
        res.json({
            operation:'Editado de un  local',
            menssage:'ok',
            data:data,
        });
    }).catch((err)=> {
        res.status(400);
        console.error(err);
        res.json(err);
    }) 
}
//metodo para eliminar la data mediante id especifico
async function deleteLocalById(req,res){
try{
    const {id} = req.params;
    const local = await deleteLocal(id);
    res.json();
} catch(err){
    res.status(500);
    console.error(err);
    res.json(err);
}
};
module.exports= {addResto,getAllResto,getLocalById,updateLocalById,deleteLocalById};


