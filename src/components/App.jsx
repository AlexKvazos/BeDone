import React         from 'react';
import {root}        from 'baobab-react/decorators';
import { State }     from '../modules';
import Navbar from './Navbar.jsx';
import InputBox from './InputBox.jsx';

@root(State)
class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar>
          BeDone
        </Navbar>

        <img className="logo" src="img/logo.png" />
        <InputBox />

        {/* <div id="toggler">
          <i className="fa fa-plus"></i>
        </div> */}
      </div>
    );
  }

}

export default App;
