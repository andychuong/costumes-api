const express = require('express')
const router = express.Router()
const control = require('../controllers/tags')

router.get('/:id/tags', control.getTags)
router.get('/:id/tags/:tagid', control.getOneTag)
// http  --json POST http://localhost:3000/costumes/f855ef12-2154-4d55-90f0-d7b6b8ddf0fc/tags name=cool+stuff color=black
router.post('/:id/tags', control.createTag)
router.put('/:id/tags', control.updateTag)
router.delete('/:id/tags/:tagid', control.deleteTag)

module.exports = router
