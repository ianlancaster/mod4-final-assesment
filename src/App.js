import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {}
  }

  submitGrudge(e) {
    e.preventDefault()
    const inputs = [].slice.call(e.target.children).filter(node => node.nodeName === 'INPUT')

    const grudge = {
      name: inputs[0].value,
      offense: inputs[1].value,
      date: inputs[2].value
    }

    fetch('http://localhost:3001/api/grudge', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grudge)
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log('error: ', err))

    inputs.forEach(input => input.value = '')
  }

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
