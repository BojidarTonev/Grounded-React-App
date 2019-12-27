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
    }
  }
};
