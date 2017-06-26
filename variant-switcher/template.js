import * as React from 'react'
import { asVariantSwitcher } from '../variantify'

function Box ({ label, value }) {
  return (
    <div>
      <div>{label}:</div>
      <div>{value}</div>
    </div>
  )
}

function HelloWorld ({ onClick, state }) {
  return (
    <div onClick={onClick}>
      Hello world!<br />
      <Box label='Count' value={state.count} />
    </div>
  )
}

export { HelloWorld }
export default asVariantSwitcher(HelloWorld)
