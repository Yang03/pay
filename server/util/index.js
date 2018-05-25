
export const randomStr = function(len = 30) {
    let chars = "0123456789"
    let str = ""
        for (let i = 0; i < len; i++) {
            let index  = (Math.random(0, chars.length - 1) * 10).toFixed(0)
            str += chars.substr(index, 1)
        }
    return str
}

export const ksort = function(obj) {
    let keys = Object.keys(obj).sort()
    let sortedObj = {}

    for(var i in keys) {
        sortedObj[keys[i]] = obj[keys[i]]
    }
    return sortedObj
}