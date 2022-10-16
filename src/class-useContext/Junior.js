import React from 'react'
import OmContext from '../context'

function Junior() {
    const appTheme = React.useContext(OmContext)
  return (
    <div>Junior {appTheme.color} </div>
  )
}

export default Junior