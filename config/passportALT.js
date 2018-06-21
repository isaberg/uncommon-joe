const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

module.exports = function(passport) {
  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user);
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, callback) {
        console.log('starting signup process')
        console.log(req.body)
        User.findOne({ "local.email": email })
          .then(user => {
            if (user) {
              console.log('duplicate email found!')
              return callback(
                null,
                false,
                req.flash("signupMessage", "this email is already taken")
              );
            } else {
              console.log('USER IS UNIQUE, creating new user')
              let newUser = new User();
              newUser.local.email = email;
              newUser.local.password = newUser.encrypt(password);
              newUser.local.firstName = req.body.firstName
              newUser.local.lastName = req.body.lastName
              newuser.local.zip = req.body.zip

              newUser.save(err => {
                if (err) throw err;
                console.log('made new user')
                return callback(null, newUser);
              });
            }
          })
          .catch(err => console.log(err));
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, callback) {
        User.findOne({ "local.email": email }, function(err, user) {
          if (err) return callback(err);

          if (!user) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "No user found")
            );
          }
          if (!user.validPassword(password)) {
            return callback(
              null,
              false,
              req.flash("loginMessage", "Ooops, wrong password")
            );
          }
          return callback(null, user);
        });
      }
    )
  );
};
