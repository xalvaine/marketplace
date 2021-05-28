/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.svg' {
  import React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  const path: string
  export default path
}
