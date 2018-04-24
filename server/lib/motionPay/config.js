/**
 * Server's IP Address
 * 服务器IP地址
*/
export const SPBILL_CREATE_IP = '192.168.1.1'

export const $LOG_FOLDER = '/tmp/'

export const CALLBACK_LOG_FILENAME = ''

export const CALLBACK_URL = 'pay/callback'

export const ONLINE_MERCHANT = 'ONLINE'
export const OFFLINE_MERCHANT = 'OFFLINE'
export const H5_MERCHANT = 'H5'

export const USING_LIVE_APISERVER = false

export const MERCHANT_IDS_TEST = {
    [ONLINE_MERCHANT] : "100105100000011",
    [OFFLINE_MERCHANT]: '100100010000010',
    [H5_MERCHANT]: '100100010000009'
}

export const API_IDS_TEST = {
    [ONLINE_MERCHANT]: '5005642017006',
    [OFFLINE_MERCHANT]: '5005642017008',
    [H5_MERCHANT]: '5005642017007'
}

export const API_PASSWORDS_TEST = {
    [ONLINE_MERCHANT]: '2ce9f51261e21ba6a087ee239160f0b1',
    [OFFLINE_MERCHANT]: 'cd3f5e88a1ec1df2351cdca75d7ce94a',
    [H5_MERCHANT]: '052366873962708184168aaa57a32295'
}

export const MERCHANT_IDS_LIVE = {
    ONLINE_MERCHANT : '',
    OFFLINE_MERCHANT: '',
    H5_MERCHANT: ''
}

export const API_IDS_LIVE = {
    ONLINE_MERCHANT: '',
    OFFLINE_MERCHANT: '',
    H5_MERCHANT: ''
}

export const API_PASSWORDS_LIVE = {
    ONLINE_MERCHANT: '',
    OFFLINE_MERCHANT: '',
    H5_MERCHANT: ''
}

// export const API_PASSWORDS_LIVE = {
//     ONLINE_MERCHANT: '',
//     OFFLINE_MERCHANT: '',
//     H5_MERCHANT: ''
// }

export const API_HOST_URL_TEST = 'https://api.motionpay.org/'


export const API_HOST_URL_LIVE = 'APIHOST_To_Be_Replaced_Before_Live'

export const ORDER_PAY =  'onlinePayment/v1_1/pay/orderPay'
	/**
	 * mobile scan
	 * 手机主扫
	 */
export const PRE_PAY = 'onlinePayment/v1_1/pay/prePay'	
	/**
	 * H5 payment
	 * H5 手机直接支付
	 */
export  const H5_PAY = 'onlinePayment/v1_1/pay/wapPay'
	/**
	 * Get H5 Pay URL
	 * 获取H5手机直接支付的网址
	 */
export const GET_PAY_URL = 'onlinePayment/v1_1/pay/getPayUrl'
	
	/**
	 * query order
	 * 查询已提交的订单的状态
	 */
export const ORDER_QUERY = 'onlinePayment/v1_1/pay/orderQuery'
	/**
	 * refund order
	 * 对已支付的订单进行退款
	 */
export const ORDER_REVOKE = 'onlinePayment/v1_1/pay/revoke'

export const CURL_PROXY_HOST = '0.0.0.0'  //'192.168.1.1';
export const CURL_PROXY_PORT = 0  //8080;

export const getURL = function(fn) {
    if (USING_LIVE_APISERVER == false) {
        return API_HOST_URL_TEST + fn
    } else {
        return API_HOST_URL_LIVE + fn
    }
}

export const getMid = function(type) {
    if (USING_LIVE_APISERVER == false) {
        return MERCHANT_IDS_TEST[type]
    } else {
        return MERCHANT_IDS_LIVE[type]
    }
}

export const getAppID = function(type) {
    if (USING_LIVE_APISERVER == false) {
        return API_IDS_TEST[type]
    } else {
        return API_IDS_LIVE[type]
    }
}

export const getAPIPASSWORD = function(type) {
    if (USING_LIVE_APISERVER == false) {
        return API_PASSWORDS_TEST[type]
    } else {
        return API_PASSWORDS_LIVE[type]
    }
}

export const getCallbackURL = function(){
    return CALLBACK_URL
}

