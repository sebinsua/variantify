import * as React from 'react'

function AlternateHelloWorld ({ onClick, state }) {
  return (
    <div onClick={onClick}>
      Hello alternate world!<br />
      <Box label='Count' value={state.count} />
    </div>
  )
}

export default AlternateHelloWorld
