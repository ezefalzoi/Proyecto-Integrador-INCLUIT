const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { getApod } = require('../controllers/nasa/apod.controller');
const { getMarts }=require('../controllers/nasa/marts.controller');
/* NASA endpoints*/
router.get('/apod', getApod);
router.get('/marts/:rover', getMarts)

module.exports = router;
