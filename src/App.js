import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('/search?q=javascript')
      .then(resp => {
        console.log('======success search request=======');
        this.processResp(resp);
        return fetch('/todos');
      })
      .then(todos => {
        console.log('======success todos request=======');
        todos.json().then(json => console.log(json));
        return axios.get('/posts');
      })
      .then(posts => {
        console.log('======success posts request=======');
        console.log(posts);
      })
      .catch(err => {
        console.log('======failure=======');
        console.log(err);
      });
  }

  processResp(resp) {
    resp.blob().then(re => {
      var FR = new FileReader();
      FR.onload = event => {
        console.log(FR.result);
      };
      FR.readAsText(re);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
