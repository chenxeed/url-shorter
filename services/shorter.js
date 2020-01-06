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
    _id: new mongoose.Types.ObjectId(),
    url: url,
    short: shortid()
  })

  try {
    const shorter = await newShorter.save()
    return shorter
  } catch (e) {
    throw e
  }
}

module.exports = {
  readShorter,
  createShorter
}
