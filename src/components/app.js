import React, { Component } from 'react';
import BadModal from './bad_modal';
import Colors from './colors';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left">
          <h1>Hello</h1>
        </div>
        <div className="right">
          <h1>Hello</h1>
          <div>
            <BadModal>
              <h1>A really long amount of Modal Content</h1>
              <p>Etc.</p>
              <Colors />
            </BadModal>
          </div>
        </div>
      </div>
    );
  }
}
