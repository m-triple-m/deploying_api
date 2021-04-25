const router = require('express')();
const mongoose = require('../connection');

router.get('/home', (req, res) => {
    console.log('NOw that is');
    res.send("Hey Buddy");
})

module.exports = router;