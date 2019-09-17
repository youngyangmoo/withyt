import React from 'react';
import logo, { ReactComponent } from './assets/image/logo.svg';
import './assets/styles/App.css';
import {User} from './first-page/User';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, YT!</h1>
        <div>this is React</div>
        <User
          name="얭용뮈"
          job="마법사"
        />
      </header>
    </div>
  );
}

export default App;
