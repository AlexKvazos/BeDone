import React from 'react';

class Navbar extends React.Component {

  render() {
    return (
      <div id="navbar" className='no-select'>
        { this.props.children }
      </div>
    );
  }

}

export default Navbar;
