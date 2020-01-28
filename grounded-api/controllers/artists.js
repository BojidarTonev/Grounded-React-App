const Artists = require("../models/Artists");

module.exports = {
  get: {
    allArtists: (req, res, next) => {
      try {
        Artists.find()
          .then(artists => res.send(artists))
          .catch(next);
      } catch (error) {
        res.status(500).json({ message: err.message });
      }
    },
    artistDetails: (req, res, next) => {
      try {
        Artists.find({_id: req.params.id})
          .then(artist => res.send(artist))
          .catch(next);
      } catch(error) {
        res.status(500).json({ message: err.message });
      }
    }
  }
};
