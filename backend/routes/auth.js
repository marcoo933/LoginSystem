const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

router.post(
  '/signup',
  [
    body('name').trim().not().isEmpty(),
    body('email').isEmail().withMessage('Please enter a valid email.')

  ]
)

