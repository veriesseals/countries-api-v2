// Step 1 and 2 Create Server an make sure it is working
// ----------------------------------------------------
const express = require('express');
const PORT = process.env.PORT || 3000;

// define helmet
const helmet = require('helmet');
// define cors
const cors = require('cors');

// Call Helmet, Express and Cors
const server = express().use(helmet()).use(cors()).use(express.json());

// Create and set View Engine
server.set('view engine', 'ejs');

// Server will throw error on this step routes/router.js has not been defined yet
const router = require('./app/routes/router');
server.use('/', router);


// Create PORT Listener
// ----------------------------------------------------
server.listen(PORT, ()=> console.log(`PORT ${PORT} is working and we in there!`))