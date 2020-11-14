var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const dbHelper = require("../database/dbHelpers");


const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', (req, res) => {
    const password = req.body.password;
    const hashedPassword = getHashedPassword(password);

    dbHelper.getPassword('Admin').then((result) => {
        const actualPassword = result[0].Password;
        console.log({hashedPassword: actualPassword})
        if (hashedPassword === actualPassword) {
            const authToken = generateAuthToken();
            
            // Store authentication token
            dbHelper.storeAuthToken('Admin', authToken);
    
            // Give user authentication cookie with authToken
            res.cookie('AuthToken', authToken);
        
            // Redirect to the admin panel
            res.redirect('/admin/');
        } else {
            res.redirect('/admin/login')
        }
    })

})



module.exports = router;