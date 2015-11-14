import { Dictionary, Dates } from '../modules';

let Parser = {

  /**
   * Parse a string of text
   * @param  {String} input User submitted text
   * @return {Object}       Destructed event details
   */
  parse(input) {
    let data = {};

    /**
     * Iterate on each type of match on the Dictionary
     */
    for (var matches in Dictionary) {
      doTest(matches);
    }

    /**
     * Execute a test on a Dictionary item
     * @param  {Object} i Dictionary item
     */
    function doTest(matches) {
      Dictionary[matches].forEach((i) => {

        let match = input.match(i.regex);
        if (match) {
          match = match[i.index];
          input = input.replace(match, '').trim();

          // store the match on the current matching element
          data[matches] = match.trim();
        }

      });
    }

    // capitalize subject for styling purposes
    data.subject = input.charAt(0).toUpperCase() + input.slice(1);
    data.subject = data.subject.replace('  ', ' ');

    // return the data object to caller
    return data;
  },

  /**
   * Convert a stringified date to a real date object
   * @param  {String} str Date representation
   * @return {Object}     Date object
   */
  stringToDate(str) {
    str = str.trim();
    let result;

    Dates.forEach((representation) => {
      let match = str.match(representation.pattern);

      if (match) {
        match.splice(0, 1);
        result = representation.obj(...match);
      }
    });

    return result;
  },

  /**
   * Set the hour of the date object with the eventData hour
   * @param {Object} dateObject Moment object
   */
  setHour(eventData, dateObject) {
    let hoursToAdd, minutesToAdd, success;

    let match = eventData.hour.match(/(\d+):(\d+)\s*pm/);
    if (match && !success) {
      success = true;
      hoursToAdd = 12 + parseInt(match[1]);
      minutesToAdd = 0 + parseInt(match[2]);
      dateObject.hours(hoursToAdd);
      dateObject.minutes(minutesToAdd);
    }

    match = eventData.hour.match(/(\d+)\s*pm/);
    if (match && !success) {
      success = true;
      hoursToAdd = 12 + parseInt(match[1]);
      dateObject.hours(hoursToAdd);
      dateObject.minutes(0);
    }

    match = eventData.hour.match(/(\d+):(\d+)\s*?(am)?/);
    if (match && !success) {
      success = true;
      hoursToAdd = parseInt(match[1]);
      minutesToAdd = parseInt(match[2]);
      dateObject.hours(hoursToAdd);
      dateObject.minutes(minutesToAdd);
    }

    match = eventData.hour.match(/(\d+)\s*?(am)?/);
    if (match && !success) {
      success = true;
      hoursToAdd = parseInt(match[1]);
      dateObject.hours(hoursToAdd);
      dateObject.minutes(0);
    }

  }

};


export default Parser;
