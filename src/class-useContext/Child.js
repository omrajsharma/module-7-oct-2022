import React from 'react'
import Junior from './Junior'
import OmContext from '../context'

function Child() {

    const appTheme = React.useContext(OmContext)

  return (
    <div>Child {appTheme.theme} 
        <Junior />
    </div>
  )
}

export default Child