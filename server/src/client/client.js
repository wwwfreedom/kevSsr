// start up point for the client side application
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes.js'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import reducers from '../client/reducers'
import axios from 'axios'

const axiosInstance = axios.create({
  // prepend /api to any routes so if /users will then be /api/users
  baseURL: '/api',
})

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
