const express = require('express')
const router = express.Router()
// Require user model

// Add bcrypt to encrypt passwords

// Add passport

const ensureLogin = require('connect-ensure-login')

router.get('/private-page', (req, res) => {
	res.render('auth/private', { user: req.user })
})

module.exports = router
