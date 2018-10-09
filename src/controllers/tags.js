// Controllers
const model = require('../models/costumes')

function createTag(req, res, next) {
  console.log('createtag')
  // console.log(req.body)
  // const costumeId = req.params.id
  console.log(req.params.id)
  const result = model.createTag(req.params.id, req.body)
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

function getTags(req, res, next) {
  const result = model.getTags(req.params.id)
  if (data.error) {
    return next({
      status: 404,
      message: result.error
    })
  }
  res.status(200).json({
    data: result
  })
}

function getOneTag(req, res, next) {
  const result = model.getOneTag(req.params.id, req.params.tagid)
  if (result.error) {
    return next({
      status: 404,
      message: result.error
    })
  }
  res.status(200).json({
    data: result.tag
  })
}

function updateTag(req, res, next) {
  const result = model.updateTag(req.params.id, req.params.tagid)
  if (result.error) {
    return next({
      status: 404,
      message: result.error
    })
  }
  res.status(200).json({
    data: result.tag
  })
}

function updateTag(req, res, next) {
  const result = model.updateTag(req.params.id, req.params.tagid)
  if (result.error) {
    return next({
      status: 404,
      message: result.error
    })
  }
  res.status(200).json({
    data: result.tag
  })
}

function updateTag(req, res, next) {
  const result = model.updateTag(req.params.id, req.params.tagid)
  if (result.error) {
    return next({
      status: 404,
      message: result.error
    })
  }
  res.status(200).json({
    data: result.tag
  })
}

function deleteTag(req, res, next) {
  const result = model.deleteTag(req.params.id, req.params.tagid)
  if (result.error) {
    return next({
      status: 404,
      message: result.error
    })
  }
  res.status(200).json({
    data: result.tag
  })
}

module.exports = {createTag, getTags, getOneTag, updateTag, deleteTag}
