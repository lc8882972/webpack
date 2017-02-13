export let utils = new class {
    isNumber(num) {
        return (typeof num) !== "number";
    }

    constructor() {
        this.Url = new class {
            queryString() {
                let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
                let r = window.location.search.substr(1).match(reg);
                if (r != null)
                    return unescape(decodeURI(r[2]));
                return null;
            }
        }();
    }

}();