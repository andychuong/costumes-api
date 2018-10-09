// Models
const uuid = require('uuid/v4')
const costumes = []

// Create Costume!
function createCostume(body) {
  const errors = []
  const name = body.name
  const price = body.price
  const desc = body.desc
  let response
  if (!name || !price || !desc) {
    errors.push(`Name is required`)
    response = {
      errors
    }
  } else {
    const newCostume = {
      id: uuid(),
      name,
      price,
      desc,
      tags: []
    }
    costumes.push(newCostume)
    response = newCostume
  }
  return response
}

// Get All Costumes
function getAllCostumes() {
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
function updateCostumeName(id, body) {
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

function createTag(costume, body){
  const errors = []
  const name = body.name
  const Color = body.color

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
    costumes.tags.push(newTag)
    response = newTag
  }
  return response
}

module.exports = {
  createCostume,
  getAllCostumes,
  getOneCostume,
  updateCostumeName,
  deleteCostume
}
