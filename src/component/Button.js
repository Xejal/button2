import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.state.message}></button>
      </div>
    )
  }
}
