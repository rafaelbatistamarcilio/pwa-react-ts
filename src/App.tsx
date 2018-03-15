import * as React from 'react';
import './App.css';
import Header from './header/Header';
import { Switch, Route } from 'react-router';

import Home from './home/Home';
import User from './user/User';
import Camera from './camera/Camera';
import Toast from './toast/Toast';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className={`destaques container`}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/camera" component={Camera} />
            <Route path="/toast" component={Toast} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
