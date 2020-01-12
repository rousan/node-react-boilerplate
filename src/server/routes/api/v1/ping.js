const express = require('express');
const HttpStatus = require('http-status-codes');
const { wrapAsyncMiddleware } = require('../../../helper');

const router = express.Router();

router.get('/', wrapAsyncMiddleware(async (req, res) => {
  res.status(HttpStatus.OK)
    .json({
      message: "It's working"
    });
}));

module.exports = router;
