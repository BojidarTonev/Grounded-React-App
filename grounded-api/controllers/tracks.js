const Tracks = require("../models/Tracks");

module.exports = {
  get: {
    allTracks: (req, res, next) => {
      try {
        Tracks.find()
          .then(tracks => res.send(tracks))
          .catch(next);
      } catch (error) {
        res.status(500).json({ message: err.message });
      }
    }
  }
};
