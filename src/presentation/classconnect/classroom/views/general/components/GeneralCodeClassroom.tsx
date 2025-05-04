import React from 'react'

interface GeneralCodeClassroomProps {
  code: string
}

export const GeneralCodeClassroom: React.FC<GeneralCodeClassroomProps> = ({ code }) => {
  return (
    <div className='general-code'>
      <header className="general-code__header">
        <p>Código de clase</p>
        <button className='general-code__options'>
          <i className='bx bx-dots-vertical-rounded general-code__options-icon'></i>
        </button>
      </header>
      <div className="general-code__content">
        <p className='general-code__code'>{ code }</p>
        <button className='general-code__show'>
          <i className='bx bx-fullscreen general-code__show-icon'></i>
        </button>
      </div>
    </div>
  )
}
