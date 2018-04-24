import {PRE_PAY, getURL} from './config'
import axios from 'axios'
const request = axios.create({
    timeout: 5000, //5s
    headers: {'Content-Type': 'application/json'}
});
const Api = Object.create(null)
Api.qrOrder = async function(order) {
    let url = getURL(PRE_PAY)
    order.setSign()
    let data = order.toBodyParams()
    const result = await request.post(url, data)
    console.log(result.data)
    return result.data
}
export default Api