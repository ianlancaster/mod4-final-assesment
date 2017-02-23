import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitGrudge}>
          <h2>Add Grudge</h2>
          <label htmlFor="name">Name of person who offended you:</label>
          <input
            type="text"
            className="text-input"
            placeholder="Name"
            name="name"
            required
          />
          <label htmlFor="offense">What did they do?</label>
          <input
            type="text"
            className="text-input"
            placeholder="Sneezed during my presentation"
            name="offense"
            required
          />
          <label htmlFor="date">When did the offense occur?</label>
          <input
            type="date"
            name="date"
            required
          />
          <button type="submit">Remember Forever</button>
        </form>
      </div>
    );
  }
}

export default App;
