import '../styles.scss';
import { bar, Point } from './bar';
import { utils } from '../main';

bar();
console.log($('#say').text());
var point = new Point(100, 100);

console.log( utils.isNumber(1));