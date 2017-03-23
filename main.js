export let utils = {
  isNumber(num) {
    return (typeof num) !== "number";
  },
  Url: {
    queryString() {
      let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
      let r = window.location.search.substr(1).match(reg);
      if (r != null)
        return unescape(decodeURI(r[2]));
      return null;
    }
  }
};