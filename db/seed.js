const User = require('../models/User.js')
const Org = require('../models/Org.js')
const bcrypt = require('bcrypt-nodejs')

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  let isaiah = User.create({
    local: {
      email: 'isaiahberg@email.com',
      password: createPassword('testpassword123'),
      orgName: 'General Assembly'
      firstName: 'Isaiah',
      lastName: 'Berg',
      zipCode: '12345'
    }
  }).then((user) => {
    user.save(err => console.log(err))
  })

  let nathan = User.create({
    local: {
      email: 'nathanberg@email.com',
      password: createPassword('testpassword1234'),
      orgName: 'General Assembly'
      firstName: 'Nathan',
      lastName: 'Berg',
      zipCode: '12345'
    }}).then((user) => {
    user.save(err => console.log(err))
  })

  let marta = User.create({
    local: {
      email: 'martaberg@email.com',
      password: createPassword('testpassword1234'),
      orgName: 'General Assembly'
      firstName: 'Marta',
      lastName: 'Berg',
      zipCode: '12345'
    }}).then((user) => {
    user.save(err => console.log(err))
  })

  let david = User.create({
    local: {
      email: 'davidberg@email.com',
      password: createPassword('testpassword1234'),
      orgName: 'General Assembly'
      firstName: 'David',
      lastName: 'Berg',
      zipCode: '12345'
    }}).then((user) => {
    user.save(err => console.log(err))
  })
})

Org.find({}).remove(() => {
  let generalAssembly = Org.create({
    local: {
      email: 'generalassembly@email.com',
      password: createPassword('testpassword123'),
      orgName: 'General Assembly',
      zipCode: '20005'
    }
  }).then((org) => {
    org.save(err => console.log(err))
  })

  let dcTech = Org.create({
    local: {
      email: 'dctech@email.com',
      password: createPassword('testpassword1234'),
      orgName: 'DC Tech Meetup',
      zipCode: '20005'
    }}).then((org) => {
    org.save(err => console.log(err))
  })
})
