import * as React from 'react'
import { TemplateProvider } from './variantify'

import { HelloWorld } from './variant-switcher'
import { AlternateHelloWorld } from './alternate-template'

function Page () {
  return (
    <div>
      <HelloWorld />
    </div>
  )
}

function Root () {
  return (
    <TemplateProvider templates={{ [HelloWorld]: AlternateHelloWorld }}>
      <Page />
    </TemplateProvider>
  )
}

export default Root
