// Step 3 Define Router and Error will go away
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT|| 3000;

// Serve static resources like images, css, JavaScript. Using express.static() method, you can server static resources directly by specifying the folder name where you have stored your static resources.
router.use(express.static('public'));


// countryRoutes
// --------------------------------------------------------
const countryRoutes = require('./api/countryRoutes')
router.use('/country', countryRoutes)

// continentRoutes
// --------------------------------------------------------
const continentRoutes = require('./api/continentRoutes')
router.use('/continent', continentRoutes)

// countryLanguageRoutes
// --------------------------------------------------------
const countryLanguageRoutes = require('./api/countryLanguageRoutes')
router.use('/countryLanguage', countryLanguageRoutes)

// languageRoutes
// --------------------------------------------------------
const languageRoutes = require('./api/languageRoutes')
router.use('/language', languageRoutes)

// Create Root Route => localhost:3000/api
// --------------------------------------------------------
router.get('/api', (req, res)=> {
    res.json({
        'All Countries': `http://localhost:${PORT}/country/api`,
        'All Continents': `http://localhost:${PORT}/continent/api`,
        'Country Languages': `http://localhost:${PORT}/countryLanguage/api`,
        'All Languages': `http://localhost:${PORT}/language/api`
    })
})

// localhost:3000/api/country
// ------------------------------------------
router.use('/country', require('./api/countryRoutes'));

// Home Page
// ------------------------------------------
router.get('/', (req, res)=>{
    res.render('pages/home', {
        title: 'Home',
        name: 'Veries\'s Country Database Home Page'
    })
})

// Error Page
// ------------------------------------------
router.get('*', (req, res)=>{
    if(req.url === '/favicon.ico/') {
        res.end()
    } else {
        res.render('pages/404',{
            title: '404 Error',
            name: '404 Error'
        })
    }
})

// Export router
module.exports = router;