import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes.js'
import renderer from './helpers/renderer.js'
import createStore from './helpers/createStore.js'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  // some logic to initialize the redux store on the server

  // figure out what component to render
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
