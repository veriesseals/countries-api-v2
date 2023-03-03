// Connect countriesRoutes
// -----------------------------------------------------
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 3000;


const {continentDao: dao} = require('../../daos/dao');

// localhost:3000/country/api
// -----------------------------------------------------
router.get('/api', (req, res)=>{
    dao.findAll(res, dao.table)
});

// localhost:3000/country/api/count
// -----------------------------------------------------
router.get('/api/count', (req, res)=>{
    dao.countAll(res, dao.table)
});


// localhost:3000/country/api/id
// -----------------------------------------------------
router.get('/api/:id', (req, res)=>{
    dao.findById(res, dao.table, req.params.id)
});


module.exports = router;