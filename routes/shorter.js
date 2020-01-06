var express = require('express');
var router = express.Router();
const shorterService = require('../services/shorter')

/* GET shorter unique URL */
router.get('/read/:short', async function(req, res) {
  const { short } = req.params

  const shorter = await shorterService.readShorter(short)

  res.send(shorter);
});


/* POST shorter unique URL */
router.post('/create', async function(req, res) {
  const { url } = req.body

  const shorter = await shorterService.createShorter(url)

  res.send(shorter);
});


module.exports = router;
