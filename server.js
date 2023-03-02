// Create Server an make sure it is working
// ----------------------------------------------------
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;


// Create PORT Listener
// ----------------------------------------------------
server.listen(PORT, ()=> console.log(`PORT ${PORT} is working and we in there!`))