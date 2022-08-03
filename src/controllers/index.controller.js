function getIndex(req, res){
    res.json({
        msj: "Hola mundo"
    });
}

function postIndex(req, res){
    res.json({
        msj: "Hola desde postIndex"
    });
}


module.exports = { getIndex, postIndex };