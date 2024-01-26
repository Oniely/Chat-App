const express = require('express');
const router = express.Router()

const { getAllChat } = require('../controllers/chat')

router.route('/').get(getAllChat);

module.exports = router;