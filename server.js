//import express
const express = require('express');
//init app
const app = express();
//start the server
const PORT = 5000;

//middleware for JSON parsing (post requests)
app.use(express.json());

//import routing
const flashcardsRoutes = require('./routes/flashcards');
app.use('/api/flashcards', flashcardsRoutes);

//test route
app.get('/', (req, res) => {
    res.send("WELCOME TO AI FLASHCARD BACKEND BABY");

});


app.listen(PORT, () => {
    console.log('server is running at http://localhost:${PORT}');
});

