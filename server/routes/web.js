import indexRouter from '../router/index'
import payRouter from '../router/pay'
import qrcodeRouter from '../router/qrcode'

export default class Web {
    constructor(app) {
        this.app = app
        this.app.use('/', indexRouter)
        this.app.use('/qrcode', qrcodeRouter)
        this.app.use('/pay', payRouter)
    }
}