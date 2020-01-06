var express = require('express');
var router = express.Router();
const shorterService = require('../services/shorter')

/* GET shorter unique URL */
router.get('/shorter/:short', async function(req, res, next) {
  const { short } = req.params

  const shorter = await shorterService.readShorter(short)

  res.send(shorter);
});


/* POST shorter unique URL */
router.post('/shorter/:short', async function(req, res, next) {
  const { url } = req.body

  const shorter = await shorterService.createShorter(url)

  res.send(shorter);
});


module.exports = router;
