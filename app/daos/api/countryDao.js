const connection = require('../../config/dbconfig');

const countryDao = {
    table: 'country',

    // Create Method
    // ----------------------------------------------------------------
    create: (req, res)=> {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create."
            })
        } else if (req.body.country || !req.body.continent){
            res.json({
                "error": true,
                "message": "Please provide all required fields."
            })
        } else {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);

            connection.exectute(
                `INSERT INTO country SET ${fields.join(' =?, ')} = ?;`,

                values,
                (error, dbres) => {
                    if(!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log('DAO ERROR', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    // Update
    // ----------------------------------------------------------------
    update: (req, res)=> {
        if(isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "ID must be a number"
            })
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update."
            })
        } else {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);
            
            connection.exectute(
                `UPDATE country SET${fields.join(' =?, ')} = ? WHERE movie_id = ?;`,
                [...values, req.params.id],
                (error, dbres) => {
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows}rows(s)`)
                    } else {
                        console.log('DAO ERROR', error)
                        res.send('Error updating record')
                    }
                } 
                )
            }
        },
    };
    
    // Export countriesDao
    module.exports = countryDao;