const express = require('express')
const router = express.Router()
const control = require('../controllers/tags')

router.get('/', control.getAll)
router.get('/:tagid', control.getOneTag)
router.post('/', control.createTag)
router.put('/:tagid', control.updateTag)
router.delete('/:tagid', control.deleteCostume)

module.exports = router
