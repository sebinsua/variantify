import * as React from 'react'
import { compose, withHandlers } from 'recompose'
import statify from './statify'

import { initialState, reducer } from './reducer'
import * as actions from './actions'

export default compose([
  statify(reducer, initialState, actions),
  withHandlers({
    onClick: ({ increase }) => event => {
      event.preventDefault()
      increase()
    }
  })
])(HelloWorld)
