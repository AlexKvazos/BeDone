import React from 'react';

class Navbar extends React.Component {

  render() {
    return (
      <div id="navbar">
        { this.props.children }
      </div>
    );
  }

}

export default Navbar;
