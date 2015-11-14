import React from 'react';
import { branch } from 'baobab-react/decorators';
import { map } from 'lodash';

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

    return (
      <div id="cardlist" className={ cardlistClass }>

        <h1>Today</h1>
        { map(this.props.events, (event, index) => {
          return (
            <div className="card" key={ `event-${index}` }>
              <h1>{ event.title }</h1>
              <p>{ event.humanDate }</p>
            </div>
          );
        }) }

        <h1>Tomorrow</h1>
        { map(this.props.events, (event, index) => {
          return (
            <div className="card" key={ `event-${index}` }>
              <h1>{ event.title }</h1>
              <p>{ event.humanDate }</p>
            </div>
          );
        }) }

        <h1>Future events</h1>
        { map(this.props.events, (event, index) => {
          return (
            <div className="card" key={ `event-${index}` }>
              <h1>{ event.title }</h1>
              <p>{ event.humanDate }</p>
            </div>
          );
        }) }
      </div>
    );
  }

}

export default CardList;
