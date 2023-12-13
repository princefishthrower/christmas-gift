import React, { Component } from 'react'; // let's also import Component
import snowflake from './img/snowflake.svg';
import './App.css';
import SnowStorm from 'react-snowstorm';

export default class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <SnowStorm snowStick={false} followMouse={false} excludeMobile={false} vMaxX={1} vMaxY={2} />
        <header className="App-header">
          <img src={snowflake} className="App-logo" alt="logo" />
          <h1>
            Merry Christmas!
        </h1>
          <p>
            On Christmas Day, at 10:00 AM EST,<br />you will get an email which will contain your surprise christmas gift!
        </p>
        </header>
      </div>
    )
  };
}