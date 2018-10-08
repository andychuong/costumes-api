const express = require('express')
const router = express.Router()
const control = require('../controllers/tags')

// router.get('/', control.getAll)
// router.get('/:id', control.getOneTag)
router.post('/', control.createTag)
// router.put('/:id', control.updateTag)
// router.delete('/:id', control.deleteCostume)

module.exports = router
