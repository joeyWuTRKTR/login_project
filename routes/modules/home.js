const express = require('express')
const router = express.Router()

const User = require('../../models/userSchema')

router.get('/', (req, res) => {
  User.find()
    .lean()
    .then(users => res.render('index', { users }))
    .catch(error => console.log(error))
})


module.exports = router