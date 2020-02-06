const db = require('../models');

exports.create = async (req, res) => {
    try {
        let newMovie = await db.Movie.create(req.body);
        return res
            .status(200)
            .json({
                message: 'Nouveau film ajouté.',
                newMovie
            });
    } catch (err) {
        return res.status(400).json({
            message: `Le film n'a pas pu être ajouté`,
            error: err
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        let movies = req.query 
            ? req.query.producer
                ?  await db.Movie.find(req.query)
                    .sort({releaseDate: 1})
                    .select({title: 1, producer: 1, releaseDate: 1})
                : await db.Movie.find(req.query)
            : movies = await db.Movie.find();
        return res
            .status(200).json(movies);
    } catch (err) {
        return res.status(400).json({
            message: `Aucun film n'a pu être trouvé.`,
            error: err
        });
    }
}

exports.readOne = async (req, res) => {
    try {
        let movie = await db.Movie.findById(req.params.id);
        return res
            .status(200)
            .json(movie);
    } catch (err) {
        return res.status(400).json({
            message: `Le film n'a pas pu être trouvé`,
            error: err
        });
    }
};

exports.updateMovie = async (req, res) => {
    try {
        let movie = await db.Movie.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            }, 
            {new: true}
        );
        return res
            .status(200)
            .json(movie);
    } catch (err) {
        return res.status(400).json({
            message: `Le film n'a pas pu être trouvé`,
            error: err
        });
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        let movie = await db.Movie.findByIdAndRemove(req.params.id);
        return res
            .status(200)
            .json(movie);
    } catch (err) {
        return res.status(400).json({
            message: `Le film n'a pas pu être trouvé`,
            error: err
        });
    }
}