import React         from 'react';
import {root}        from 'baobab-react/decorators';
import { State }     from '../modules';
import Front         from './Front.jsx';
import CardList      from './CardList.jsx';
import Navbar        from './Navbar.jsx';
import Toggler       from './Toggler.jsx';

@root(State)
class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar>BeDone</Navbar>

        <Front />

        <CardList />
        <Toggler />
      </div>
    );
  }

}

export default App;
