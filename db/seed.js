const User = require('../models/User.js')
const bcrypt = require('bcrypt-nodejs')

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  let isaiah = User.create({
    local: {
      email: 'isaiahberg@email.com',
      password: createPassword('testpassword123'),
      firstName: 'Isaiah',
      lastName: 'Berg',
      zip: '58377'
    }
  }).then((user) => {
    user.save(err => console.log(err))
  })

  let nathan = User.create({
    local: {
      email: 'nathanberg@email.com',
      password: createPassword('testpassword1234'),
      firstName: 'Nathan',
      lastName: 'Berg',
      zip: '58377'
    }}).then((user) => {
    user.save(err => console.log(err))
  })
})
