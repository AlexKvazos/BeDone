import Parser from './Parser';
import { State } from '../modules';

let Events = {

  create(eventData) {
    let event = {
      title: eventData.subject,
      date: Parser.stringToDate(eventData.date)
    };

    State.select('events').push(event);
  }

};

export default Events;
