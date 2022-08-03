const express = require('express');
const router = express.Router();


const {
    addResto,
    getAllResto,
    getLocalById,
    updateLocalById,
    deleteLocalById 
} = require('../controllers/resto/resto.controller');


router.get('/',getAllResto);
router.post('/new',addResto);
router.get('/:id',getLocalById);
router.patch('/:id',updateLocalById);
router.delete('/:id',deleteLocalById);


module.exports = router;
