import React from 'react'

interface ClassConnectNavigationProps {
  name: string;
}

export const ClassConnectNavigation: React.FC<ClassConnectNavigationProps> = ({ name }) => {
  return (
    <div className='classconnect-navigation'>
      <p>ClassConnect</p>
      <i className='bx bx-chevron-right'></i>
      <p className='classconnect-navigation__name'>{name}</p>
    </div>
  )
}
