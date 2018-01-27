import express from 'express'
import renderer from './helpers/renderer.js'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(renderer())
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})