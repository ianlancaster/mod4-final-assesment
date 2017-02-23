import React, { Component } from 'react'
import './grudge.css'

class Grudge extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    if (this.props.data) {
      const { data, updateGrudge } = this.props
      const { name, offense, date, forgiven } = data

      return (
        <article>
          <h4>Name: {name}</h4>
          <h4>Offense: {offense}</h4>
          <h4>Date: {date}</h4>
          <h4>You have{!forgiven && ' not'} forgiven this person</h4>
          <button onClick={() => updateGrudge(this.props.data)}>
            {forgiven ? 'Unforgive' : 'Foregive' }
          </button>
        </article>
      )
    }
    return null
  }
}

module.exports = Grudge
