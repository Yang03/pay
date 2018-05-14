import Pay from '../controllers/pay'

module.exports = app => {
    app.get('/pay', Pay.index)
    app.post('/pay/payment', Pay.payment)
    app.post('/pay/callabck', Pay.callback)
}