import { Api } from './base'

export const payment = (params) => {
    return Api.post('/pay/payment/', params)
} 