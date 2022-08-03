const axios = require('axios').default;
const API_KEY = process.env.NASA_API_KEY;
const config = require('config');
const {basepath, marts} = config.get('services.nasa');

async function getMarts(req, res){
    const {sol,api_key} = req.query;
    const {rover}= req.params;

    axios.get(`${basepath}${marts}${rover}/photos`, {
            params:{
            api_key: API_KEY,
            sol: sol,
            }
        })
        .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            const { status } = err.response;
            res.status(status);
            res.json(err);
        });
    
    
}
module.exports = { getMarts };