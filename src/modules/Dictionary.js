/**
 * Event command dictionary
 *
 * @copyright 2015 NX
 */

const Dictionary = {
  date: [
    {
      regex: /(for)?\s*(today|tomorrow|in \d+ days|next week|in a week|in a day)/gi,
      index: 0
    },
    {
      regex: /(on|for)?\s*(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/gi,
      index: 0
    }
  ],
  hour: [
    {
      regex: /at\s*((\d+):(\d+)\s*(am|pm))/gi,
      index: 0
    },
    {
      regex: /at\s*((\d+)\s*(am|pm))/gi,
      index: 0
    },
    {
      regex: /at\s*((\d+):(\d+))/gi,
      index: 0
    },
    {
      regex: /at\s*(\d+)/gi,
      index: 0
    }
  ]
};

export default Dictionary;
