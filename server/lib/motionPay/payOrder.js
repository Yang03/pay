import {
    getMid, 
    getAppID, 
    getAPIPASSWORD, 
    SPBILL_CREATE_IP, 
    getCallbackURL
} from './config'

import queryString from 'querystring'
import crypto from 'crypto'
import utf8 from 'utf8'

import {ksort} from '../../util'

export default class payOrder {
    constructor() {
        this.bodyValues = {}
    }
    setMerchantType(type) {
        this.merchantType = type
    }
    getMerchantType() {
        return this.merchantType
    }
    setOutTradeNo(value) {
        this.bodyValues['out_trade_no'] = value
    }
    setMid() {
        this.bodyValues['mid'] = getMid(this.merchantType)
    }
    getMid() {
        return this.bodyValues['mid']
    }
    setGoodsInfo(value) {
        this.bodyValues['goods_info'] = value;
    }
    getGoodInfo() {
        return this.bodyValues['goods_info']
    }
    setTotalFee(value) {
        this.bodyValues['total_fee'] = parseInt(value, 10)
    }
    getTotalFee() {
        return this.bodyValues['total_fee']
    }
    setTerminalNo(value) {
        this.bodyValues['terminal_no'] = value
    }
    getTerminalNo() {
        return  this.bodyValues['terminal_no']
    }
    setSpbillCreateIP() {
        this.bodyValues['spbill_create_ip'] = SPBILL_CREATE_IP
    }
    getSpbillCreateIP() {
        return this.bodyValues['spbill_create_ip']
    }
    setNotifyUrl() {
        this.bodyValues['return_url'] = getCallbackURL()
    }
    getNotifyUrl() {
        return this.bodyValues['return_url']
    }
    setPayChannel(value) {
        this.bodyValues['pay_channel'] = value
    }
    getPayChannel() {
        return this.bodyValues['pay_channel']
    }
    setSign() {
        this.setMid()
        let sign = this.makeSign()
        this.bodyValues['sign'] = sign
        return sign
    }
    getSign() {
        return this.bodyValues['sign']
    }
    makeSign() {
        let values = ksort(this.bodyValues)
        let queryParams = queryString.stringify(values)
        let stringToEncode = queryParams + '&' + this.toSignParams()
        let str = utf8.encode(queryString.unescape(stringToEncode))
        let sha1 = crypto.createHash('sha1')
        sha1.update(str)
        let str1 = sha1.digest('hex')
        return str1.toUpperCase()
    }
    toSignParams() {
        const appId = getAppID(this.getMerchantType());
        const apiPassword = getAPIPASSWORD(this.getMerchantType())
        return `appid=${appId}&appsecret=${apiPassword}`
    }
    toBodyParams() {
        return this.bodyValues
    }
    fromArray(arr) {
        this.bodyValues = arr
    }

}