let dictionary = {
  date: [
    {
      regex: /(for)?\s*(today|tomorrow|in \d+ days|next week|in a week|in a day)/gi,
      index: 0
    },
    {
      regex: /(on|for)?\s*(monday|tuesday|wednesday|thursday|friday|sunday)/gi,
      index: 0
    }
  ]
};

let Parser = {

  /**
   * Parse a string of text
   * @param  {String} input User submitted text
   * @return {Object}       Destructed event details
   */
  parse(input) {
    let data = {};

    /**
     * Iterate on each type of match on the dictionary
     */
    for (var matches in dictionary) {
      doTest(matches);
    }

    /**
     * Execute a test on a dictionary item
     * @param  {Object} i Dictionary item
     */
    function doTest(matches) {
      dictionary[matches].forEach((i) => {

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
  }

};


export default Parser;
