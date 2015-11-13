import React         from 'react';
import {root}        from 'baobab-react/decorators';
import { State }     from '../modules';

@root(State)
class App extends React.Component {

  render() {
    return (
      <div></div>
    );
  }

}

export default App;
