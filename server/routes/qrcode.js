

import qrcode from '../controllers/qrcode'

module.exports = (app) => {
    app.get('/qrcode', qrcode.get)
}