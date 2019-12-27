const Events = require("../models/Events");

module.exports = {
  get: {
    allEvents: (req, res, next) => {
      try {
        Events.find()
          .then(events => res.send(events))
          .catch(next);
      } catch (error) {
        res.status(500).json({ message: err.message });
      }
    }
  }
};
