import React from 'react'
import App from './App.js'
import HomePage from './pages/HomePage.js'
import UsersListPage from './pages/UsersListPage.js'

export default [
  {
    ...App,
    routes: [{ ...HomePage, path: '/', exact: true }, { ...UsersListPage, path: '/users' }],
  },
]
