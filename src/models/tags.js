// models

const uuid = require('uuid/v4')
const tags = []
const model = require('../models/costumes')

function createTag(body) {
  const errors = []
  const name = body.name
  let response
  if (!name) {
    errors.push(`Name is required`)
    response = {
      errors
    }
  } else {
    const newTag = {
      id: uuid(),
      name
    }
    tags.push(newTag)
    response = newTag
  }
  return response
}

module.exports = {createTag}
