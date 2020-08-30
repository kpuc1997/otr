const sqlite = require("sqlite3");
const assert = require("assert");
const fs = require('fs');
const { isNullOrUndefined } = require("util");

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
      throw(Error);
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

// Examples/Tests
const databasePath = './test.db';
const testPath = './test.txt';

// Open test database
let db = new sqlite.Database(databasePath, (err) => {
  if (err) {
    console.log('Test db Open Error');
    console.error(err.message);
    throw(Error);
  };
});

// Cleans up test database after the test runs. 
// (remove test row which is inserted during test)
function cleanup(db) {
  // Delete test row
  db.all("DELETE FROM CONTENT WHERE ID = 'test';", function(err, rows) {
    if (err) {
      console.log('Cleanup DELETE Error');
      console.error(err);
      throw(Error);
    }
  });	

  // Close database
  db.close((err) => {
    if (err) {
      console.log('Cleanup Close Error');
      console.error(err);
      throw(Error);
    }
  });
};

// Check correct row was inserted into test database against test content file
function checkTestRow(db) {
  // Get test file text
  fs.readFile(testPath, function(err, text) {
    if (err) {
      cleanup(db);
      console.error('Test row test file read error:');
      console.error(err.message);
      throw(Error);
    }

    // Assert test row
    db.all("SELECT ID, CONTENT FROM CONTENT WHERE ID = 'test';", function(err, rows) {
      if (err) {
        cleanup(db);
        console.error("Test row assert error:");
        console.error(err.message);
        throw(Error);
      };
      if (isNullOrUndefined(rows[0])) {
        console.error("Test row missing")
        throw(Error);
      }
      row = rows[0];

      // Here's where its asserted, but I want to make sure the database
      // is cleaned up before the program quits out so its wrapped in this
      // clunky if statement. These probably a better way to do this, come
      // back when there's time and clean this up.
      if (row.ID != 'test') {
        cleanup(db);
        assert(row.ID == 'test');
      };

      if (row.Content != text) {
        cleanup(db);
        assert(row.CONTENT == text);
      };

      // Backup asserts. Cleanup later.
      assert(row.ID == 'test');
      assert(row.CONTENT == text);
    });
  });
}

// Run test. Inherently checks promise resolves correctly. Checks correct row
// is inserted. Cleans up afterwards.
intake(databasePath, testPath, 'CONTENT', 'test').then((success) => {
  assert(success);
  // checkTestRow(db);
  // cleanup(db);
}).catch((err) => {
  console.error(err.message);
  try{
    cleanup(db);
  } catch {
    console.error("cleanup failed")
  }
  throw(err);
});

exports.intake = intake;