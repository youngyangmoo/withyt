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
          name="양영무"
          birthdeath="1953년 01월 24일 ~ "
          isAdmin={true}
        />
      </header>
    </div>
  );
}

export default App;
