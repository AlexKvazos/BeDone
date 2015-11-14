import m from 'moment';

let representations = [
  { pattern: /today/i,                      obj: () => m() },
  { pattern: /(for)?\s*tomorrow/i,          obj: () => m().add(1, 'days') },
  { pattern: /in 1 day/i,                   obj: () => m().add(1, 'days') },
  { pattern: /in a week/i,                  obj: () => m().add(1, 'weeks') },
  { pattern: /in a day/i,                   obj: () => m().add(1, 'days') },
  { pattern: /(?:on|for)?\s*sunday/i,       obj: () => m().day(7 + 0) },
  { pattern: /(?:on|for)?\s*monday/i,       obj: () => m().day(7 + 1) },
  { pattern: /(?:on|for)?\s*tuesday/i,      obj: () => m().day(7 + 2) },
  { pattern: /(?:on|for)?\s*wednesday/i,    obj: () => m().day(7 + 3) },
  { pattern: /(?:on|for)?\s*thursday/i,     obj: () => m().day(7 + 4) },
  { pattern: /(?:on|for)?\s*friday/i,       obj: () => m().day(7 + 5) },
  { pattern: /(?:on|for)?\s*saturday/i,     obj: () => m().day(7 + 6) },
  { pattern: /in (\d+) days/i,              obj: (i) => m().add(i, 'days') }
];

export default representations;
