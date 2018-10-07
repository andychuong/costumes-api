// Controllers
const model = require('../models/costumes')

function createCostume(req, res, next) {
  const result = model.create(req.body)
  if (result.errors) {
    return next({
      status: 400,
      message: `Could not create new costume`,
      errors: result.errors
    })
  }
  res.status(201).json({
    data: result
  })
}

function getAll(req, res, next) {
  const data = model.getAll()
  res.status(200).json({
    data: data
  })
}

function getOneCostume(req, res, next) {
  const data = model.getOneCostume(req.params.id)
  if (data.error) {
    return next({
      status: 404,
      message: data.error
    })
  }
  res.status(200).json({
    data: data.costume
  })
}

function updateCostume(req, res, next) {
  const data = model.updateCostume(req.params.id, req.body)
  if (data.error) {
    return next({
      status: data.error.status,
      message: data.error.message
    })
  }
  res.status(200).json({
    data: data.costume
  })
}

function deleteCostume(req, res, next) {
  const data = model.deleteCostume(req.params.id)
  if (data.error) {
    return next({
      status: 404,
      message: data.error
    })
  }
  res.status(204).json({
    data: data.costume
  })
}

module.exports = {
  createCostume,
  getAll,
  getOneCostume,
  updateCostume,
  deleteCostume
}
