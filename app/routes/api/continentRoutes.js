// Connect countriesRoutes
// -----------------------------------------------------
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 3000;


const {continentDao: dao} = require('../../daos/dao');

// Destructure continentDao
// -----------------------------------------------------
router.get('/', (req, res)=>{
    const url = `http://localhost:${PORT}/continent/api`

    const fetch = (...args)=> import('node-fetch').then(({default: fetch})=> fetch(...args))

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/continent', {
                title: 'All Continents',
                name: 'All Continents',
                data
            })
        })
})

// localhost:3000/continent/api
// -----------------------------------------------------
router.get('/api', (req, res)=>{
    dao.findAll(res, dao.table)
});

// localhost:3000/continent/api/count
// -----------------------------------------------------
router.get('/api/count', (req, res)=>{
    dao.countAll(res, dao.table)
});


// localhost:3000/continent/api/id
// -----------------------------------------------------
router.get('/api/:id', (req, res)=>{
    dao.findById(res, dao.table, req.params.id)
});

//  localhost:3000/country/:id


// Views
// -----------------------------------------------------
router.get('/continent', (req, res)=> {
    const url = `http://localhost:${PORT}/continent/api`
    
    const fetch = (...args) => import('node-fetch').then(({defualt: fetch})=> fetch(...args))
    
    fetch(url)
    
})


// POST
// -----------------------------------------------------
router.post('/api/create', (req, res)=>{
    dao.create(req, res)
})

// Patch
router.patch('/api/update/:id', (req, res)=> {
    dao.update(req, res)
})

module.exports = router;