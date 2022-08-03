const Resto = require("../model/resto.model");


async function saveLocal(data){
    const local = new Resto(data);
    return local.save() 
}

async function deleteLocal(id){
  const result = await Resto.deleteOne({_id:id});
  return result;  
}

module.exports= {saveLocal,deleteLocal}
 
