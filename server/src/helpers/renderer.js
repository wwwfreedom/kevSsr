import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes.js'

export default req => {
  const content = renderToString(
    // context is require for static router and is use handle redirect and error handling
    // Static router need to know the current path this will be past in by the express
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  )

  return `
    <html>
      <head>
        <body>
          <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
      </head>
    </html>
  `
}
