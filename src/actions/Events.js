import Parser from './Parser';
import { State } from '../modules';

let Events = {

  create(eventData) {
    let dateObject = Parser.stringToDate(eventData.date);

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
  },

  hide() {
    State.set('showingCards', false);
  }

};

export default Events;
