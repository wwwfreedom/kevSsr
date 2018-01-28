import React from 'react'

// context name is change internally by staticRouter to staticContext
function NotFoundPage({ staticContext = {} }) {
  staticContext.notFound = true
  return <div className="NotFoundPageCon">Nothing to see here</div>
}

export default {
  component: NotFoundPage,
}
