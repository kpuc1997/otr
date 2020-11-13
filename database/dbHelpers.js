const sqlite = require("sqlite3");
const assert = require("assert");
const fs = require('fs');
const { isNullOrUndefined } = require("util");

// This should be fixed at some point, but for right now, because the main express script runs
// from the root folder of the project, this has to be the path, because its relative to that 
// file, not this one.
const dbPath = "./database/otr.db"

// Provide a wrapper to access and clean up the dbContext
function dbWrapper(func) {
    // Inner function should return a promise
    // Outer function returns a promise that sets up and tears down
    // the inner function. Giving it the database context and proper 
    // clean up for the inner function.
    return function(...args) {
        // Returns promise which sets up the inner function and closes it out
        return new Promise( function(resolve, reject) {
            // Open Database
            let db = new sqlite.Database(dbPath, (err) =>{
                if (err) {
                console.error('Unable to open database: ')
                console.error(err.message);
                reject(err);
                }
            });

            // How to close the database, for later.
            function closedb() {
                // Close database
                db.close(function(err){
                    if (err) {
                    console.error('db close error:')
                    reject(err)
                    }
                });
            }

            // Run the wrapped function and pass up the results
            func(db, ...args).then((results) => {
                // Once you have the results, clean up the database, then resolve the data

                // Close database
                closedb();

                resolve(results)
            }).catch((err) => {
                // If theres an error, clean up the database and pass up the error
                
                // Close database
                closedb();

                reject(err)
            });
        })
    }
}

function getText(db, name) {
    // Javascript is never easy, so this function will return a promise for the text so everything runs smoothly
    // Promise setup
    return new Promise(function(resolve, reject) {
            // Form and execute query
            query = `SELECT Name, Text FROM Text WHERE Name IS '${name}';`
            db.all(query, function(err, rows){
            if (err) {
                console.error('Error reading data from database: ')
                console.error('Query: ', query)
                console.error(err.message)
                reject(err)
            };
            resolve(rows[0]);
            }); 
        }
    );
}

function getStaff(db) {
    return new Promise(function(resolve, reject) {
        // Form and execute query
        query = `SELECT Name, Description FROM Staff ORDER BY Number ASC;`
        db.all(query, function(err, rows){
        if (err) {
            console.error('Error reading data from database: ')
            console.error('Query: ', query)
            console.error(err.message)
            reject(err)
        };
        resolve(rows);
        }); 
    }
);
}

function getStaffMember(db, number) {
    return new Promise(function(resolve, reject) {
        // Form and execute query
        query = `SELECT Name, Description FROM Staff WHERE Number = ${number};`
        db.all(query, function(err, rows){
        if (err) {
            console.error('Error reading data from database: ')
            console.error('Query: ', query)
            console.error(err.message)
            reject(err)
        };
        resolve(rows);
        }); 
    }
);
}

function getPlaylists(db) {
        // Javascript is never easy, so this function will return a promise for the text so everything runs smoothly
        // Promise setup
        return new Promise(function(resolve, reject) {
                // Form and execute query
                query = `SELECT * FROM Playlists ORDER BY Date DESC;`
                db.all(query, function(err, rows){
                if (err) {
                    console.error('Error reading data from database: ')
                    console.error('Query: ', query)
                    console.error(err.message)
                    reject(err)
                };
                resolve(rows);
                }); 
            }
        );
}

function getRecordings(db) {
    // Look at the other similar functions with comments for context
    return new Promise(function(resolve, reject) {
        // Form and execute query
        query = `SELECT * FROM Recordings ORDER BY Date DESC;`
        db.all(query, function(err, rows){
            if (err) {
                console.error('Error reading data from database: ')
                console.error('Query: ', query)
                console.error(err.message)
                reject(err)
            };
            resolve(rows);
            });
    })
}

function updateText(db, name, text) {
    return new Promise(function(resolve, reject) {
        query = `UPDATE Text SET Text = '${text}' WHERE Name = '${name}';`
        db.all(query, function(err, rows){
            if (err) {
                console.error('Error from database: ')
                console.error('Query: ', query)
                console.error(err.message)
                reject(err)
            };
            resolve(rows);
            });
    })
}

function updateStaffMember(db, number, name, description) {
    return new Promise(function(resolve, reject) {
        query = `UPDATE Staff SET Name = "${name}", Description = "${description}" WHERE Number = '${number}';`
        db.all(query, function(err, rows){
            if (err) {
                console.error('Error from database: ')
                console.error('Query: ', query)
                console.error(err.message)
                reject(err)
            };
            resolve(rows);
            });
    })
}

exports.getText = dbWrapper(getText);
exports.getStaff = dbWrapper(getStaff);
exports.getStaffMember = dbWrapper(getStaffMember);
exports.getPlaylists = dbWrapper(getPlaylists);
exports.getRecordings = dbWrapper(getRecordings);

exports.updateText = dbWrapper(updateText);
exports.updateStaffMember = dbWrapper(updateStaffMember);