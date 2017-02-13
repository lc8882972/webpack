function reverse(str) {
    return str.split('').reverse().join('');
}

function isInteger(num) {
    if (typeof num !== "number") return false;
    var pattern = /^[1-9]\d*$/g;
    return pattern.test(num);
}


var utils = {
    isNumber: function (num) {
        return (typeof num) !== "number";
    },
    Url: {
        queryString: function (key) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return unescape(decodeURI(r[2]));
            return null;
        }
    }
}

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };

    var result = fmt;
    if (/(y+)/.test(result))
        result = result.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(result))
            result = result.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }

    return result;
}