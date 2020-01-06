const shortid = require('shortid')
const mongoose = require('mongoose')
const ShorterSchema = require('../models/shorter')

const Shorter = mongoose.model('shorter', ShorterSchema)

async function readShorter(short) {
  const query = Shorter.where({ short })
  const shorter = await query.findOne()
  return shorter
}

async function createShorter(url) {
  const newShorter =  new Shorter({
    url: url,
    short: shortid()
  })

  try {
    await newShorter.save()
    return true
  } catch (e) {
    return false
  }
}

module.exports = {
  readShorter,
  createShorter
}
