const express = require('express')
const router = express.Router()
const control = require('../controllers/tags')

router.get('/', control.getTags)
router.get('/:tagid', control.getOneTag)
router.post('/', control.createTag)
router.put('/:tagid', control.updateTag)
router.delete('/:tagid', control.deleteTag)

module.exports = router
