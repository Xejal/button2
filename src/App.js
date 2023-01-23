import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0,
    message: 'click here'
  }
  render() {
    const{count} = this.state
    console.log(count)
    return (
      <div>
        <button>{this.state.message}</button>
      </div>
    )
  }
}

