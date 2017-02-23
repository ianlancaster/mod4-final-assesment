import React, { Component } from 'react'

class Grudge extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { name, offense, date, forgiven } = this.props.data
    return (
      <article>
        <h4>Name: {name}</h4>
        <h4>Offense: {offense}</h4>
        <h4>Date: {date}</h4>
        <h4>You have{!forgiven && ' not'} forgiven this person</h4>
      </article>
    )
  }
}

module.exports = Grudge
