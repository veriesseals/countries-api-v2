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


// Export router
module.exports = router;