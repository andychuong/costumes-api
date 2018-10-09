// Routes
const express = require('express')
const router = express.Router()
const control = require('../controllers/costumes')

// http http://localhost:3000/costumes
router.get('/', control.getAll)
// http://localhost:3000/costumes/$id
router.get('/:id', control.getOneCostume)
// http  --json POST http://localhost:3000/costumes name=Harry+Potter price=5.00 desc=Cool+HP+Costume
router.post('/', control.createCostume)
// http --json PUT http://localhost:3000/costumes/$id name=Ron+Weasley
router.put('/:id', control.updateCostume)
// http DELETE http://localhost:3000/costumes/$id
router.delete('/:id', control.deleteCostume)

module.exports = router
