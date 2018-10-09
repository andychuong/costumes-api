// Controllers
const model = require('../models/costumes')

function createTag(req, res, next) {
  console.log('createtag')
  console.log(req.body)
  const result = model.createTag(req.body)
  if (result.errors) {
    return next({
      status: 400,
      message: `Could not create new tag`,
      errors: result.errors
    })
  }
  res.status(201).json({
    data: result
  })
}

module.exports = {createTag}
