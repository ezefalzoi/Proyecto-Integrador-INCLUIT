const axios = require('axios').default;
const API_KEY = process.env.NASA_API_KEY;
const config = require('config');
const { basepath, apod} = config.get('services.nasa');

async function getApod(req, res){
    const {date, start_date, end_date} = req.query;
    axios.get(`${basepath}${apod}`, {
            params:{
                api_key: API_KEY,
                date: date,
                start_date: start_date,
                end_date: end_date
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

module.exports = { getApod };