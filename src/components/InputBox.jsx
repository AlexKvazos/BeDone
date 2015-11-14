import React from 'react';
import Parser from '../actions/Parser';
import Events from '../actions/Events';

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
      this.setState({ canCreate: true, eventData });
    } else {
      this.setState({ canCreate: false, eventData: null });
    }
  }

  handleCreate() {
    Events.create(this.state.eventData);
  }

  render() {
    let btnExtras = this.state.canCreate ? '' : 'hiding';

    return (
      <div id="inputbox">

          <div className="input-wrapper">
            <div
              className={ `btn ${btnExtras}` }
              onTouchEnd={ ::this.handleCreate }>
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
