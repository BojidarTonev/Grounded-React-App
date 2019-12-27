const Users = require("../models/Users");

module.exports = {
  get: (req, res, next) => {},

  post: {
    register: (req, res, next) => {
      const { username, password, rePassword, email } = req.body;

      if (password != rePassword) {
        return res.send("password and repassword are not equal");
      }

      Users.create({ username, password, email })
      .then(createdUser => res.send(createdUser))
      .catch(next);

    },
    login: {},
    logout: {}
  }
};
