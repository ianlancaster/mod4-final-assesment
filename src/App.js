import React, { Component } from 'react'
import './App.css'
import Grudge from './Grudge'

class App extends Component {
  constructor () {
    super()
    this.state = {
      grudges: []
    }

    this.submitGrudge = this.submitGrudge.bind(this)
  }

  componentWillMount() {
    fetch('http://localhost:3001/api/grudge')
      .then(response => response.json())
      .then(grudges => this.setState({ grudges }))
      .catch(err => console.log('error: ', err))
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
      .then(grudges => this.setState({ grudges }))
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
        <section className="grudge-container">
          {this.state.grudges.map((grudge, i) => <Grudge key={i} data={grudge} />)}
        </section>
      </div>
    )
  }
}

export default App
