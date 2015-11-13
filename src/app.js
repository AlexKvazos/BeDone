/**
 * BeDone, Copyright © NX 2015
 *
 * @copyright 2015
 * @author NX
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// wait for cordova to be ready if available
if (window.cordova) {
    document.addEventListener('deviceready', init, false);
} else {
    init();
}

function init() {

  // prevent keyboard scrolling our view
  if (window.cordova && window.cordova.plugins.Keyboard) {
    window.cordova.plugins.Keyboard.disableScroll(true);
    window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
  }

  // render application
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
  );
}
