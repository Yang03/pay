import payOrder from '../lib/motionPay/payOrder'
import {randomStr} from '../util/index'
import {ONLINE_MERCHANT} from '../lib/motionPay/config'
import motionPayApi from '../lib/motionPay/api'
import datetime from 'node-datetime'

exports.index = (req, res) => {
    res.render('pay', {})
}

exports.payment = async function (req, res) {
    let paymentAmount = req.body.paymentAmount
    let paymentType = req.body.paymentType
    let totalFee = paymentAmount * 100
    let order = new payOrder()
    let dt = datetime.create()
    let outTradeNo = dt.format('YmdHMS') + randomStr(10)
    order.setOutTradeNo(outTradeNo)
    order.setGoodsInfo('Test_Product')
    order.setMerchantType(ONLINE_MERCHANT)
    order.setTotalFee(totalFee)
    order.setSpbillCreateIP()
    order.setPayChannel(paymentType)
    order.setNotifyUrl()
    order.setMid()
    const result = await motionPayApi.qrOrder(order)
    if (parseInt(result.code, 10) === 0) {
        return res.json({
            code: 0,
            qrcode: result.content.qrcode
        })
    } else {
        res.json({
            code: 1,
            message: '请求失败'
        })
    }
}

exports.callback = (req, res) => {
    // pay_result 
    // out_trade_no
    // total_fee
    // pay_channel
    // third_order_no
    // transaction_id
    //sign
    const params = req.body
    let order = new payOrder()
    order.fromArray(params)
    order.setSign()
    const signStr = order.getSign()
    if (signStr === req.body.sign) {
        //TODO
    } else {
        return res.json({
            code: 1,
            message: req.body['pay_result']
        })
    }
}