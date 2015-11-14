import React from 'react';
import InputBox from './InputBox.jsx';
import { branch } from 'baobab-react/decorators';

@branch({
  cursors: {
    showingCards: ['showingCards']
  }
})
class Front extends React.Component {

  render() {
    let classes = this.props.showingCards ? 'hidden' : '';

    return (
      <div id="front" className={ classes }>
        <img className="logo no-select" src="img/logo.png" />
        <InputBox />
      </div>
    );
  }
}

export default Front;
