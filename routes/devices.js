var express = require('express');
var router = express.Router();
var devices = require('../src/repositories/devices');


router.get('/', async function (req, res) {
    let device = await devices.getAll()
    if (device) {
      return res.json(device)
  
    }
    res.status(404).end()
  });

  module.exports = router;