const express = require('express')
const router = express.Router()

const User = require('../../models/userSchema')

router.post('/Login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  
  User.find()
    .lean()
    .then(user => {
      let validUser = user.some(user => user.email === email)
      let correctPassword = user.some(user => user.email === email && user.password === password)

      if(!validUser) {
        return res.render('index', { no_user: `<small class="text-danger">Invalid user!</small>` })
      }

      else if (validUser && !correctPassword){
        return res.render('index', { 
          no_user: `<small class="text-success">Invalid user!</small>`,
          wrong_password: `<small class="text-danger">Wrong Password!</small>` 
        })
      } else {
        return res.render('success', { user: user[0] })
      }
    })
    .catch(error => console.log(error))
})


module.exports = router