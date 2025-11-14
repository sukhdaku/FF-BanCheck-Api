const express = require('express');
const { getBanInfo } = require('../controllers/bancontroller');

const router = express.Router();


router.get('/check', getBanInfo);
router.get('/', (req, res) =>{
    res.send('Node JS API for Garena Free Fire Ban Status by nexxlokesh (Aimguard)');
})

module.exports = router;
