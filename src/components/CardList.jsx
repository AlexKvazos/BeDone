import React from 'react';
import moment from 'moment';
import { branch } from 'baobab-react/decorators';
import { map, sortBy } from 'lodash';

@branch({
  cursors: {
    events: ['events'],
    showingCards: ['showingCards']
  }
})
class CardList extends React.Component {
  constructor() {
    super();
  }

  render() {
    let cardlistClass = this.props.showingCards ? '' : 'hidden';

    let events = sortBy(this.props.events, 'unix');

    let today = [];
    let tomorrow = [];
    let future = [];

    events.forEach((event) => {
      if (moment(event.date.toDate()).isBetween(moment().startOf('day'), moment().endOf('day'))) {
        today.push(event);
      } else if (moment(event.date.toDate()).isBetween(moment().startOf('day').add(1, 'days'), moment().endOf('day').add(1, 'days'))) {
        tomorrow.push(event);
      } else {
        future.push(event);
      }
    });

    return (
      <div id="cardlist" className={ cardlistClass }>

        { today.length ? (
          <div>
          <h1>Today ({ today.length })</h1>
          { map(today, (event, index) => {
            return (
              <div className="card" key={ `event-${index}` }>
                <h1>{ event.title }</h1>
                <p>{ event.humanDate }</p>
              </div>
            );
          }) }
          </div>
        ) : null }

        { tomorrow.length ? (
          <div>
          <h1>Tomorrow ({ tomorrow.length })</h1>
          { map(tomorrow, (event, index) => {
            return (
              <div className="card" key={ `event-${index}` }>
                <h1>{ event.title }</h1>
                <p>{ event.humanDate }</p>
              </div>
            );
          }) }
          </div>
        ) : null }

        { future.length ? (
          <div>
          <h1>Future Events ({ future.length })</h1>
          { map(future, (event, index) => {
            return (
              <div className="card" key={ `event-${index}` }>
                <h1>{ event.title }</h1>
                <p>{ event.humanDate }</p>
              </div>
            );
          }) }
          </div>
        ) : null }
      </div>
    );
  }

}

export default CardList;
