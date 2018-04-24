import express from 'express'
import qr from 'qr-image'

const router = express.Router()
router.get('/', function(req, res, next) {
    const data = req.query.data
    const code = qr.image(data, { type: 'png' })
    res.setHeader('Content-type', 'image/png')
    code.pipe(res)
})

export default router