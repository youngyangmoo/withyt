import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/styles/App.css';
import {User} from './User';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, YT!</h1>
        <div>this is React</div>
        <User
          name="Yang Youngmu"
          birthdeath="1999-06-01 ~ "
          isAdmin={true}
        />
        <User
          name="Yang Yoontae"
          birthdeath="1999-04-07 ~ "
        />
      </header>
    </div>
  );
}

export default App;
