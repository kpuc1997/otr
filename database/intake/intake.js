const sqlite = require("sqlite3");
const assert = require("assert");
const fs = require('fs');

// Signature:
// SQLite3 database path string, content file path string, table string, ID string 
// -> Promise(resolve: Boolean, reject: Error)

// Purpose:
// Takes in a path string, adds the content from the file it points to to the database
// under the Table of the second string, with the ID of the third String, 
// then returns true if successful.

// Stub:
/*
function intake(database, content, table, id) {
    return new Promise(function(resolve, reject) {
      resolve(false);
    });
};
*/

// Function:
function intake(database, content, table, id) {

  // Open Database
  let db = new sqlite.Database(database, (err) =>{
    if (err) {
      console.error('Intake open error:')
      console.error(err.message);
    }
  });
  
  var success = new Promise(function(resolve, reject) {
    // Read file
    fs.readFile(content, function(err, text){
      // Pass error
      if (err) {
        console.error('Intake file open error:')
        reject(err)
      }

      // Form and execute query
      query = "INSERT INTO " + table + " (ID, CONTENT) VALUES ('" + id + "', '" + text + "');"
      db.all(query, function(err, rows){
        if (err) {
          console.error('Intake INSERT error:')
          console.error('Query: ', query)
          reject(err)
        }
      })

      // Close database when done
      db.close(function(err){
        if (err) {
          console.error('Intake close error:')
          reject(err)
        }
        else {
          resolve(true)
        }
      })
    })
  });
  
  return success
}

// Examples
const databasePath = './test.db';
const testPath = './test.txt';
intake(databasePath, testPath, 'CONTENT', 'test').then((success) => {
  assert(success);
  cleanup();
}).catch((err) => console.error(err.message));

// Example and Cleanup. Asserts test data was inserted and then removes it.
function cleanup(){

  // Open database
  let db = new sqlite.Database('./otr.db', (err) => {
    if (err) {
      console.log('Cleanup Open Error');
      console.error(err.message);
    };
  });

  // Get test file text
  fs.readFile('./test.txt', function(err, text) {
    if (err) {
      console.error('Cleanup test file read error:')
      console.error(err.message)
    }

    // Assert test row
    db.all("SELECT ID, CONTENT FROM CONTENT WHERE ID = 'test';", function(err, rows) {
      if (err) {
        console.error("Cleanup assert error:");
        console.error(err.message);
      };
      row = rows[0];
      assert(row.ID == 'test');
      assert(row.CONTENT == text);
    })

    // Delete test row
    db.all("DELETE FROM CONTENT WHERE ID = 'test';", function(err, rows) {
      if (err) {
        console.log('Cleanup DELETE Error');
        console.error(err);
      }
    });	

    // Close database
    db.close((err) => {
      if (err) {
        console.log('Cleanup Close Error');
        console.error(err);
      }
    });
  });
}

exports.intake = intake;