import React, { Component } from 'react';
import { injectGlobal } from 'styled-components'
import HomePage from './components/HomePage.js'

injectGlobal`
body {
  display: flex;
justify-content: center;
align-items: center;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: pink;
  background color: black;
  text-decoration: underline;
  text-decoration-color: blue;
  background: black;
  font-size:40px;
  font-family: 'Indie Flower'
  }
  

`


class App extends Component {
  render() {
    return (
      <div className="App">
    <HomePage/>
      </div>
    );
  }
}

export default App;
