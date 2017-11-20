import { cube } from './math.js';
import printMe from './print.js';
import './style.css';
import Icon from './icon.jpg';
import dataJson from '../data/data.json';

function component() {

  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;

}
  
document.body.appendChild(component());

  