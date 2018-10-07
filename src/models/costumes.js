// Models
const uuid = require('uuid/v4')
const costumes = []

// Create Costume!
function create(body) {
  const errors = []
  const name = body.name
  let response
  if (!name) {
    errors.push(`Name is required`)
    response = {
      errors
    }
  } else {
    const newCostume = {
      id: uuid(),
      name
    }
    costumes.push(newCostume)
    response = newCostume
  }
  return response
}

// Get All Costumes
function getAll() {
  return costumes
}

// Get One Costumes
function getOneCostume(id) {
  let error = ''
  const costume = costumes.find(costume => costume.id === id)
  let response
  if (!costume) {
    error = `Could not find costume with id of ${id}`
    response = {
      error
    }
  } else {
    response = {
      costume
    }
  }
  return response
}

// Update A Costume
function updateCostume(id, body) {
  let error = {}
  const costume = costumes.find(costume => costume.id === id)
  const costumeIndex = costumes.indexOf(costume)
  const name = body.name
  let response
  if (!costume) {
    error.message = `Could not find costume with id of ${id}`
    error.status = 404
    response = {
      error
    }
  } else if (!name) {
    error.message = `Name is required`
    error.status = 400
    response = {
      error
    }
  } else {
    costume.name = name
    costumes[costumeIndex] = costume
    response = {
      costume
    }
  }
  return response
}

// Delete A Costume
function deleteCostume(id) {
  let error = {}
  const costume = costumes.find(costume => costume.id === id)
  const costumeIndex = costumes.indexOf(costume)
  if (!costume) {
    error.message = `Could not find costume with id of ${id}`
    error.status = 404
    response = {
      error
    }
  } else {
    costumes.splice(costumeIndex, 1)
    response = {
      costume
    }
  }
  return response
}

module.exports = {
  create,
  getAll,
  getOneCostume,
  updateCostume,
  deleteCostume
}
