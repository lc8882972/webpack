require('./scss/article.scss')
require('./article.js')
var $ = require('jquery')
  // require('html-loader?attrs=img:data-src!./article.html')

// import { bar, Point } from './bar'
// // import { utils } from '../main'

// bar()

// var point = new Point(100, 100)
// point.toString()
// console.log( utils.isNumber(1));

// if (navigator.serviceWorker) {
//     navigator.serviceWorker.register('service-worker.js').then(function(registration) {
//         console.log('service worker 注册成功');
//     }).catch(function (err) {
//         console.log('servcie worker 注册失败')
//     });
// }

/**
 * 省市拼音排序
 */
function pySegSort(arr, empty) {
  if (!String.prototype.localeCompare)
    return null
  var letters = "*ABCDEFGHJKLMNOPQRSTWXYZ".split('')
  var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('')
  var segs = []; // 存放数据
  var py = []; // 存放首字母
  var res = {};
  var curr;
  $.each(letters, function(i) {
    curr = {
      letter: this,
      data: []
    };
    $.each(arr, function(k, v) {
      if ((!zh[i - 1] || zh[i - 1].localeCompare(v.cityName) <= 0) && v.cityName.localeCompare(zh[i]) == -1) {
        curr.data.push(this);
      }
    });
    if (empty || curr.data.length) {
      py.push(this);
      segs.push(curr);
      curr.data.sort(function(a, b) {

        return a.cityName.localeCompare(b.cityName);
      });
    }
  });
  res["segs"] = segs;
  res["py"] = py;
  return res;
}

/**
 * 调用排序
 */
function pinyin() {
  var arr2 = [
    { "id": "v1", "cityName": "北京" },
    { "id": "v2", "cityName": "上海" },
    { "id": "v5", "cityName": "天津" },
    { "id": "v7", "cityName": "安徽" },
    { "id": "v3", "cityName": "呼和浩特" },
    { "id": "v4", "cityName": "包头" },
    { "id": "v9", "cityName": "海南" },
    { "id": "v8", "cityName": "张家口" }
  ];
  var str = pySegSort(arr2)
  

  console.log(JSON.stringify(str))
}

pinyin()