const intake = require("./intake").intake;

/*
Signature:
ID string -> Null

Purpose:
Simplifies usage of intake for the otr website backend. Hardcodes the otr.db,
content file path, and table. Has no return but logs successful or an error.
*/

// Function:
// function otrIn(ID) {
//     var intakePromise = intake('../otr.db', '../content.txt', "CONTENT", ID);
//     intakePromise.then((result) => {
//         console.log("Successful")
//     }).catch((err) => {
//         console.error(err.message)
//     })
// };

// var Arg = process.argv.slice(2);

// otrIn(... Arg);