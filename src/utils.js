export default {
    isNumber(num) {
        return (typeof num) !== 'number'
    },
    Url: {
        queryString(key) {
            let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
            let r = window.location.search.substr(1).match(reg)
            if (r != null)
                return unescape(decodeURI(r[2]))
            return null
        }
    }
}