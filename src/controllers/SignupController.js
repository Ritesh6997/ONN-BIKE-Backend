const express = require('express')
const { Signup} = require('./controllers/auth.controller')
const { body, validationResult } = require('express-validator')
const router = express.Router()

console.log(body('firstName'))
router.post(
  '',
  body('firstName').trim().not().isLength({min:3}),
  body('email')
    .not()
    .isEmpty()
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value }).lean().exec()
      if (user) {
        throw new Error('Email is already register')
      }
      return true
    }),
  body('password').isString().isLength({ min: 8 }).not().isLowercase().not()
    .isUppercase().not().isNumeric().not().isAlpha(),
  Signup,
)
module.exports = router
