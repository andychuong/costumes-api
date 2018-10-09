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
function updateCostume(id, body) {
  let error = {}
  const costume = costumes.find(costume => costume.id === id)
  const costumeIndex = costumes.indexOf(costume)
  // const name = body.name
  let newName = costume.name
  let newPrice = costume.price
  let newDesc = costume.desc
  if(body.name) newName = body.name
  if(body.price) newPrice = body.price
  if(body.desc) newDesc = body.desc
  let response
  if (!costume) {
    error.message = `Could not find costume with id of ${id}`
    error.status = 404
    response = {
      error
    }
  } else {
    costume.name = newName
    costume.price = newPrice
    costume.desc = newDesc
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

function getTags(costumeId){
  const costume = costumes.find(costume => costume.id === costumeId)
  if(costume) {
    return costume.tags
  } else {
    return {`Could not find costume with id of ${costumeID}`}
  }
}

function getOneTag(costumeId, tagId) {
  let error = ''
  let response
  const costume = costumes.find(costume => costume.id === costumeId)
  if (costume) {
    const tag = costumes.tags.find(tag => tag.id === tagId)
    if (!tag) {
      error = `Could not find costume with id of ${id}`
      response = {
        error
      }
    } else {
      response = {
        costume
      }
    }
  } else {
    error = `Could not find costume with id of ${id}`
    response = {
      error
    }
  }
  return response
}

function updateTag(costumeId, tagId, body) {
  let error = {}
  let response
  const costume = costumes.find(costume => costume.id === costumeId)
  if (costume) {
    const tag = costumes.tags.find(tag => tag.id === tagId)
    let tagIndex = costume.tags.indexOf(tag)
    if(tag) {
      let newName = tag.name
      let newColor = tag.color
      if(body.name) newName = body.name
      if(body.color) newColor = body.color
      tag.name = newName
      tag.color = newColor
      costume.tags[tagIndex] = tag
      response = { tag }
    } else {
      error.message = `Could not find tag with id of ${tagId}`
      error.status = 404
      response = {
        error
      }
    }
  } else {
    error.message = `Could not find costume with id of ${costumeId}`
    error.status = 404
    response = {
      error
    }
  }
  return response
}

function deleteTag(costumeId, tagId){
  let error = {}
  let response
  const costume = costumes.find(costume => costume.id === costumeId)
  if (costume) {
    const tag = costumes.tags.find(tag => tag.id === tagId)
    let tagIndex = costume.tags.indexOf(tag)
    if(tag) {
      costume.tags.splice(tagIndex,1)
      response = { tag }
    } else {
      error.message = `Could not find tag with id of ${tagId}`
      error.status = 404
      response = {
        error
      }
    }
  } else {
    error.message = `Could not find costume with id of ${costumeId}`
    error.status = 404
    response = {
      error
    }
  }
  return response
}
}

module.exports = {
  createCostume,
  getAllCostumes,
  getOneCostume,
  updateCostume,
  deleteCostume,
  createTag,
  getTags,
  getOneTag,
  updateTag,
  deleteTag
}
