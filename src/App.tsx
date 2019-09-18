import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/styles/App.css';
import {User} from './components/User';
import {Counter, Counter2} from './components/Counter'
import {Animals} from './components/AnimalList'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome, YT!</h1>
        <User
          name="Yang Youngmu"
          birthdeath="1999-06-01 ~ "
          isAdmin={true}
        />

        <User
          name="Yang Yoontae"
          birthdeath="1999-04-07 ~ "
        />

        <Counter/>
        <Counter2/>
        <Animals/>
      </header>
    </div>
  );
}

export default App;
