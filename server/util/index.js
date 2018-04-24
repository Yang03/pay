
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

 export const bin2hex = function(s) {
    //  discuss at: http://locutus.io/php/bin2hex/
    // original by: Kevin van Zonneveld (http://kvz.io)
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    // bugfixed by: Linuxworld
    // improved by: ntoniazzi (http://locutus.io/php/bin2hex:361#comment_177616)
    //   example 1: bin2hex('Kev')
    //   returns 1: '4b6576'
    //   example 2: bin2hex(String.fromCharCode(0x00))
    //   returns 2: '00'
  
    var i
    var l
    var o = ''
    var n
  
    s += ''
  
    for (i = 0, l = s.length; i < l; i++) {
      n = s.charCodeAt(i)
        .toString(16)
      o += n.length < 2 ? '0' + n : n
    }
  
    return o
  }


  export const sha1 = function(str) {
    //  discuss at: http://locutus.io/php/sha1/
    // original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // improved by: Michael White (http://getsprink.com)
    // improved by: Kevin van Zonneveld (http://kvz.io)
    //    input by: Brett Zamir (http://brett-zamir.me)
    //      note 1: Keep in mind that in accordance with PHP, the whole string is buffered and then
    //      note 1: hashed. If available, we'd recommend using Node's native crypto modules directly
    //      note 1: in a steaming fashion for faster and more efficient hashing
    //   example 1: sha1('Kevin van Zonneveld')
    //   returns 1: '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'
  
    var hash
    try {
      var crypto = require('crypto')
      var sha1sum = crypto.createHash('sha1')
      sha1sum.update(str)
      hash = sha1sum.digest('hex')
    } catch (e) {
      hash = undefined
    }
  
    if (hash !== undefined) {
      return hash
    }
  
    var _rotLeft = function (n, s) {
      var t4 = (n << s) | (n >>> (32 - s))
      return t4
    }
  
    var _cvtHex = function (val) {
      var str = ''
      var i
      var v
  
      for (i = 7; i >= 0; i--) {
        v = (val >>> (i * 4)) & 0x0f
        str += v.toString(16)
      }
      return str
    }
  
    var blockstart
    var i, j
    var W = new Array(80)
    var H0 = 0x67452301
    var H1 = 0xEFCDAB89
    var H2 = 0x98BADCFE
    var H3 = 0x10325476
    var H4 = 0xC3D2E1F0
    var A, B, C, D, E
    var temp
  
    // utf8_encode
    str = unescape(encodeURIComponent(str))
    var strLen = str.length
  
    var wordArray = []
    for (i = 0; i < strLen - 3; i += 4) {
      j = str.charCodeAt(i) << 24 |
        str.charCodeAt(i + 1) << 16 |
        str.charCodeAt(i + 2) << 8 |
        str.charCodeAt(i + 3)
      wordArray.push(j)
    }
  
    switch (strLen % 4) {
      case 0:
        i = 0x080000000
        break
      case 1:
        i = str.charCodeAt(strLen - 1) << 24 | 0x0800000
        break
      case 2:
        i = str.charCodeAt(strLen - 2) << 24 | str.charCodeAt(strLen - 1) << 16 | 0x08000
        break
      case 3:
        i = str.charCodeAt(strLen - 3) << 24 |
          str.charCodeAt(strLen - 2) << 16 |
          str.charCodeAt(strLen - 1) <<
        8 | 0x80
        break
    }
  
    wordArray.push(i)
  
    while ((wordArray.length % 16) !== 14) {
      wordArray.push(0)
    }
  
    wordArray.push(strLen >>> 29)
    wordArray.push((strLen << 3) & 0x0ffffffff)
  
    for (blockstart = 0; blockstart < wordArray.length; blockstart += 16) {
      for (i = 0; i < 16; i++) {
        W[i] = wordArray[blockstart + i]
      }
      for (i = 16; i <= 79; i++) {
        W[i] = _rotLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1)
      }
  
      A = H0
      B = H1
      C = H2
      D = H3
      E = H4
  
      for (i = 0; i <= 19; i++) {
        temp = (_rotLeft(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff
        E = D
        D = C
        C = _rotLeft(B, 30)
        B = A
        A = temp
      }
  
      for (i = 20; i <= 39; i++) {
        temp = (_rotLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff
        E = D
        D = C
        C = _rotLeft(B, 30)
        B = A
        A = temp
      }
  
      for (i = 40; i <= 59; i++) {
        temp = (_rotLeft(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff
        E = D
        D = C
        C = _rotLeft(B, 30)
        B = A
        A = temp
      }
  
      for (i = 60; i <= 79; i++) {
        temp = (_rotLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff
        E = D
        D = C
        C = _rotLeft(B, 30)
        B = A
        A = temp
      }
  
      H0 = (H0 + A) & 0x0ffffffff
      H1 = (H1 + B) & 0x0ffffffff
      H2 = (H2 + C) & 0x0ffffffff
      H3 = (H3 + D) & 0x0ffffffff
      H4 = (H4 + E) & 0x0ffffffff
    }
  
    temp = _cvtHex(H0) + _cvtHex(H1) + _cvtHex(H2) + _cvtHex(H3) + _cvtHex(H4)
    return temp.toLowerCase()
  }

  export const utf8Encode = function(argString) { // eslint-disable-line camelcase
    //  discuss at: http://locutus.io/php/utf8_encode/
    // original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // improved by: Kevin van Zonneveld (http://kvz.io)
    // improved by: sowberry
    // improved by: Jack
    // improved by: Yves Sucaet
    // improved by: kirilloid
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    // bugfixed by: Ulrich
    // bugfixed by: Rafał Kukawski (http://blog.kukawski.pl)
    // bugfixed by: kirilloid
    //   example 1: utf8_encode('Kevin van Zonneveld')
    //   returns 1: 'Kevin van Zonneveld'
  
    if (argString === null || typeof argString === 'undefined') {
      return ''
    }
  
    // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    var string = (argString + '')
    var utftext = ''
    var start
    var end
    var stringl = 0
  
    start = end = 0
    stringl = string.length
    for (var n = 0; n < stringl; n++) {
      var c1 = string.charCodeAt(n)
      var enc = null
  
      if (c1 < 128) {
        end++
      } else if (c1 > 127 && c1 < 2048) {
        enc = String.fromCharCode(
          (c1 >> 6) | 192, (c1 & 63) | 128
        )
      } else if ((c1 & 0xF800) !== 0xD800) {
        enc = String.fromCharCode(
          (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
        )
      } else {
        // surrogate pairs
        if ((c1 & 0xFC00) !== 0xD800) {
          throw new RangeError('Unmatched trail surrogate at ' + n)
        }
        var c2 = string.charCodeAt(++n)
        if ((c2 & 0xFC00) !== 0xDC00) {
          throw new RangeError('Unmatched lead surrogate at ' + (n - 1))
        }
        c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000
        enc = String.fromCharCode(
          (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
        )
      }
      if (enc !== null) {
        if (end > start) {
          utftext += string.slice(start, end)
        }
        utftext += enc
        start = end = n + 1
      }
    }
  
    if (end > start) {
      utftext += string.slice(start, stringl)
    }
  
    return utftext
  }