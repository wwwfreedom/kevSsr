// start up point for the client side application
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home.js'

ReactDOM.hydrate(<Home />, document.querySelector('#root'))
