import React from 'react'
import { ClassConnectLayout } from '../layout/ClassConnectLayout'
import { ClassroomDisplayModal, ClassroomHeader, ClassroomView } from '../'
import { useMenu } from '../../../application/hooks'

export const ClassroomPage: React.FC = () => {
  const { IsAsideMenuOpen } = useMenu()

  return (
    <ClassConnectLayout>
      <div className={`classroom ${!IsAsideMenuOpen && 'classroom-small'}`}>
        <ClassroomHeader />

        <div className="classroom-view">
          <ClassroomView />
        </div>

        <ClassroomDisplayModal />
      </div>
    </ClassConnectLayout>
  )
}