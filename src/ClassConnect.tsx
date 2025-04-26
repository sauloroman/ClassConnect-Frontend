import React from 'react'
import { ClassConnectRouter } from './presentation/router/ClassConnectRouter'
import { Alert } from './presentation/shared/components'

export const ClassConnectApp: React.FC = () => {
  return (
    <>
      <ClassConnectRouter />
      <Alert />
    </>
  )
}
