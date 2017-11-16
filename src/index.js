import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import dataJson from '../data/data.json';

function component() {
    var element = document.createElement('div');
    
    // Add the image to our existing div
    var myIcon = new Image();
    myIcon.src = Icon;


    // Lodash, now imported by this script
    
    element.innerHTML = _.join(['Hello', dataJson.name], ' ');
    element.classList.add('hello');
    element.appendChild(myIcon);


    

    return element;
  }
  
  document.body.appendChild(component());