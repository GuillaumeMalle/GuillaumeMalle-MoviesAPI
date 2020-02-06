const express = require('express');

const router = express.Router();

const handlerMovies = require('../handlers/movies');

router.route('/')
    .post(handlerMovies.create)
    .get(handlerMovies.readAll);

router.route('/:id')
    .get(handlerMovies.readOne)
    .put(handlerMovies.updateMovie)
    .delete(handlerMovies.deleteMovie);

    module.exports = router;