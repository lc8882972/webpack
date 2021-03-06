require('./scss/article.scss')
require('./article.js')
var $ = require('jquery')
import { areas } from './city'
/**
 * 省市拼音排序
 */
function pySegSort(arr, empty) {
  if (!String.prototype.localeCompare)
    return null
  var letters = '*ABCDEFGHJKLMNOPQRSTWXYZ'.split('')
  var zh = '阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀'.split('')
  var segs = [] // 存放数据
  var py = [] // 存放首字母
  var res = {}
  var curr
  $.each(letters, function(i) {
    curr = {
      letter: this,
      data: []
    }
    $.each(arr, function(k, v) {
      if ((!zh[i - 1] || zh[i - 1].localeCompare(v.cityName) <= 0) && v.cityName.localeCompare(zh[i]) == -1) {
        curr.data.push(this)
      }
    })
    if (empty || curr.data.length) {
      py.push(this)
      segs.push(curr)
      curr.data.sort(function(a, b) {

        return a.cityName.localeCompare(b.cityName)
      })
    }
  })
  res['segs'] = segs
  res['py'] = py
  return res
}

/**
 * 调用排序
 */
let cityList = []
areas.forEach(function(area) {
  area.children.forEach(function(city) {
    cityList.push({
      cityName: city.label,
      id: city.value
    })
  })
})


var str = pySegSort(cityList)


console.log(JSON.stringify(str))