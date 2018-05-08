
import qr from 'qr-image'

exports.get = function(req, res) {
    const data = req.query.data
    const code = qr.image(data, { type: 'png' })
    res.setHeader('Content-type', 'image/png')
    code.pipe(res)
}
