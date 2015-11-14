import Parser from './Parser';
import { State } from '../modules';

let Events = {

  create(eventData) {
    let dateObject = Parser.stringToDate(eventData.date);

    if (eventData.hour) {
      Parser.setHour(eventData, dateObject);
    }

    let event = {
      title: eventData.subject,
      date: dateObject,
      humanDate: dateObject.format('MMM D, h:mm a'),
      unix: dateObject.unix()
    };

    State.select('events').push(event);
  },

  show() {
    State.set('showingCards', true);
    if (window.cordova) {
      window.cordova.plugins.Keyboard.close();
      setTimeout(window.cordova.plugins.Keyboard.close, 150);
    }
  },

  hide() {
    State.set('showingCards', false);
  }

};

export default Events;
