import Baobab from 'baobab';

// load stored data from localStorage
let events = localStorage.events ? JSON.parse(localStorage.events) : null;

let state = new Baobab({
  events: events || [],
  showingCards: false
});

export default state;
