import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="HomeCon">
        I'm home yolo
        <button onClick={() => console.log('yolo')}>click me</button>
      </div>
    )
  }
}

export default Home
