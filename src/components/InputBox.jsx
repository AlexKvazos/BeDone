import React from 'react';
import Parser from '../actions/Parser';

class InputBox extends React.Component {
  constructor() {
    super();
    this.state = {
      canCreate: false
    };
  }

  onChange() {
    let input = this.refs.input.value;

    let eventData = Parser.parse(input);
    if (eventData.date && eventData.subject.length > 3) {
      this.setState({ canCreate: true });
    } else {
      this.setState({ canCreate: false });
    }
  }

  render() {
    let btnExtras = this.state.canCreate ? '' : 'hiding';

    return (
      <div id="inputbox">

          <div className="input-wrapper">
            <div
              className={ `btn no-select ${btnExtras}` }>
              Create
            </div>

            <input
              ref="input"
              onChange={ ::this.onChange }
              placeholder="Try: Deliver Science Project in 2 days"
            />
          </div>

      </div>
    );
  }

}

export default InputBox;
