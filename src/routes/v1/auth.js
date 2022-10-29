const express = require('express')
const router = express.Router()
const {signup,signin} = require('../../controllers/v1/auth/AuthController')
const { checkUserDuplicate,checkRoles } = require('../../middlewares/verifySignup')

router.post('/signup', [
    checkUserDuplicate,
    checkRoles
],signup )
router.post('/signin', signin )

module.exports = router;