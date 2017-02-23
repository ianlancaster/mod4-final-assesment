import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitGrudge}>
          <h2>Add Grudge</h2>
          <label for="name">Name of person who offended you:</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <label for="offense">What did they do?</label>
          <input
            type="offense"
            placeholder="Sneezed during my presentation"
            name="offense"
            required
          />
          <label for="date">When did the offense occur?</label>
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
