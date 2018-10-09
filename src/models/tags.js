// models

const uuid = require('uuid/v4')
const tags = []
const model = require('../models/costumes')

function createTag(body) {
  const errors = []
  const name = body.name
  const color = body.color
  let response
  if (!name || !color) {
    errors.push(`Name and color are required`)
    response = {
      errors
    }
  } else {
    const newTag = {
      id: uuid(),
      name,
      color
    }
    tags.push(newTag)
    response = newTag
  }
  return response
}

module.exports = {createTag}
