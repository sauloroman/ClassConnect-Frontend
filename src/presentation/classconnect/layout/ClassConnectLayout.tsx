import React from 'react'
import { ClassConnectAsideMenu, ClassConnectHeader, ClassConnectNavigation } from '../'
import { useMenu } from '../../../application/hooks'

interface ClassConnectProps {
  children: React.ReactNode
}

export const ClassConnectLayout: React.FC<ClassConnectProps> = ({ children }) => {
  
  const { IsAsideMenuOpen } = useMenu()

  return (
    <div className='classconnect'>
      <ClassConnectHeader />

      <div className="classconnect__container">
        <ClassConnectAsideMenu />
        <main className={`classconnect__children ${!IsAsideMenuOpen && 'classconnect__children-small'}`}>
          {children}
        </main>
      </div>
    </div>
  )
}
