const connection = require('../../config/dbconfig');

const daoCommon = {
    // Find All
    // ----------------------------------------------
    findAll: (res, table)=> {
        connection.execute(
            // Query
            `SELECT * FROM ${table};`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )
    },
        
    // Find By ID
    // ----------------------------------------------
    findById: (res, table, id)=> {
        connection.execute(
            // Query
            `SELECT * FROM ${table} WHERE ${table}_id = ?;`,
            [id],
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )
    },
        
    // Count All
    // ----------------------------------------------
    countAll: (res, table)=> {
        connection.execute(
            // Query
            `SELECT COUNT(*) FROM ${table};`,
            (error, rows)=> {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )
    }


}

module.exports = daoCommon;