import React from 'react'
import { ClassConnectLayout } from '../layout/ClassConnectLayout'
import { ClassroomHeader } from '../'

export const ClassroomPage: React.FC = () => {
  return (
    <ClassConnectLayout>
      <div className="classroom">
        <ClassroomHeader />
      </div>
    </ClassConnectLayout>
  )
}