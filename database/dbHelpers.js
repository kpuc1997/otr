const sqlite = require("sqlite3");
const assert = require("assert");
const fs = require('fs');
const { isNullOrUndefined } = require("util");

// This should be fixed at some point, but for right now, because the main express script runs
// from the root folder of the project, this has to be the path, because its relative to that 
// file, not this one.
const dbPath = "./database/otr.db"

function getText(name) {
    // Open Database
    let db = new sqlite.Database(dbPath, (err) =>{
        if (err) {
        console.error('Unable to open database: ')
        console.error(err.message);
        throw(Error);
        }
    });

    // How to close the database, for later.
    function closedb() {
        // Close database
        db.close(function(err){
            if (err) {
            console.error('Intake close error:')
            throw(Error)
            }
        });
    }

    // Javascript is never easy, so this function will return a promise for the text so everything runs smoothly
    // Promise setup
    var result = new Promise(function(resolve, reject) {
            // Form and execute query
            query = `SELECT Name, Text FROM Text WHERE Name IS '${name}';`
            db.all(query, function(err, rows){
            if (err) {
                console.error('Error reading data from database: ')
                console.error('Query: ', query)
                console.error(err.message)
                reject(err)
            };
            closedb()
            resolve(rows[0]);
            }); 
        }
    );
    return result
}

function getPlaylists() {
        // Open Database
        let db = new sqlite.Database(dbPath, (err) =>{
            if (err) {
            console.error('Unable to open database: ')
            console.error(err.message);
            throw(Error);
            }
        });
    
        // How to close the database, for later.
        function closedb() {
            // Close database
            db.close(function(err){
                if (err) {
                console.error('Intake close error:')
                throw(Error)
                }
            });
        }
    
        // Javascript is never easy, so this function will return a promise for the text so everything runs smoothly
        // Promise setup
        var result = new Promise(function(resolve, reject) {
                // Form and execute query
                query = `SELECT * FROM Playlists ORDER BY Date DESC;`
                db.all(query, function(err, rows){
                if (err) {
                    console.error('Error reading data from database: ')
                    console.error('Query: ', query)
                    console.error(err.message)
                    reject(err)
                };
                closedb()
                resolve(rows);
                }); 
            }
        );
        return result
}

exports.getText = getText;
exports.getPlaylists = getPlaylists;