require('./scss/layout.scss');

import { bar, Point } from './bar';
import { utils } from '../main';

bar();

var point = new Point(100, 100);

console.log( utils.isNumber(1));

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('service worker 注册成功');
    }).catch(function (err) {
        console.log('servcie worker 注册失败')
    });
}