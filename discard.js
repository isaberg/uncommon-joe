/*
// FROM PASSPORT.JS
else {
  console.log('USER IS UNIQUE, creating new user')
  let newUser = new User()
  newUser.local.email = email
  newUser.local.password = newUser.encrypt(password)
  newUser.local.firstName = req.body.firstName
  newUser.local.lastName = req.body.lastName
  newUser.local.zip = req.body.zip

  newUser.save(err => {
    if (err) throw err
    return callback(null, newUser)
  })
}
*/



            /* //FROM passport.js 
            {
              console.log('USER IS UNIQUE, creating new user')
              User.create({
                email: email,
                password: password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                zip: req.body.zip
              }).then(newUser => {
                newUser.save(err => {
                  if (err) throw err
                  console.log('made new user')
                  return callback(null, newUser)
                })
              })
            }
            */
