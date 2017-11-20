import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './icon.jpg';
import dataJson from '../data/data.json';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    
    // Add the image to our existing div
    var myIcon = new Image();
    myIcon.src = Icon;


    // Lodash, now imported by this script
    
    element.innerHTML = _.join(['Hello', dataJson.name], ' ');
    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);
    element.classList.add('hello');
    element.appendChild(myIcon);


    

    return element;
  }
  
  document.body.appendChild(component());

  if(module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
      printMe();
    })
  }
  