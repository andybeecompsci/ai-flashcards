const express = require('express');
const router = express.Router();




//test route for api
router.get('/test', (req, res) => {
    res.send('Flashcards API is working!');
});




module.exports = router;