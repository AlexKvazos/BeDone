import React from 'react';
import { branch } from 'baobab-react/decorators';
import Events from '../actions/Events';

@branch({
  cursors: {
    showingCards: ['showingCards']
  }
})
class Toggler extends React.Component {

  toggleCards() {
    if (this.props.showingCards) {
      Events.hide();
    } else {
      Events.show();
    }
  }

  render() {
    let c = this.props.showingCards ? 'rotate' : '';

    return (
      <div id="toggler" onTouchEnd={ ::this.toggleCards } className={ c }>
       <i className="fa fa-chevron-up" />
      </div>
    );
  }
}

export default Toggler;
