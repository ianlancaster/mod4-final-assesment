import React, { Component } from 'react'
import './App.css'
import Grudge from './Grudge'

class App extends Component {
  constructor () {
    super()
    this.state = {
      grudges: [],
      listView: true,
      currentGrudge: null
    }

    this.submitGrudge = this.submitGrudge.bind(this)
    this.updateGrudge = this.updateGrudge.bind(this)
    this.viewGrudgeDetail = this.viewGrudgeDetail.bind(this)
  }

  componentWillMount() {
    fetch('http://localhost:3001/api/grudges')
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
      date: inputs[2].value,
      id: Date.now(),
      forgiven: false
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

  updateGrudge(grudge) {
    fetch('http://localhost:3001/api/grudge', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(grudge)
    })
      .then(response => response.json())
      .then(grudges => this.setState({ grudges }))
      .catch(err => console.log('error: ', err))
  }

  viewGrudgeDetail(e) {
    this.setState({
      listView: false,
      currentGrudge: this.state.grudges.filter(grudge => grudge.name === e.target.innerText)[0]
    })
  }

  render() {
    if (this.state.listView) {
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
            {this.state.grudges.map((grudge, i) => (
              <h4
                key={i}
                onClick={this.viewGrudgeDetail}
              >{grudge.name}</h4>
            ))}
          </section>
        </div>
      )
    } else {
        return (
          <div className='app'>
            <Grudge
              data={this.state.currentGrudge}
              updateGrudge={this.updateGrudge}
            />
          </div>
        )
    }
  }
}

export default App
