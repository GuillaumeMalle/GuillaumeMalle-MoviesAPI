const express = require('express');

const app = express();

const port = process.env.port || 3000;

const moviesRoutes = require('./routes/movies');

// Middleware(s)
app.use(express.json());

//First route
app.get('/', (req, res) => {
    res.send('Welcome to movies city!');
});

app.use('/api/movies', moviesRoutes);

app.listen(port, () => {
    console.log(`Listening to movies on port ${port}`);
});