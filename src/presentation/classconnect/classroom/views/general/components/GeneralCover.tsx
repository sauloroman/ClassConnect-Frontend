import React from 'react'

interface GeneralCoverProps {
  img: string | null,
  title: string,
  career: string,
}

export const GeneralCover: React.FC<GeneralCoverProps> = ({career, img, title}) => {
  return (
    <div className='general-cover general-cover__gradient' style={{ backgroundImage: `${img}`}}>
      <div className="flex flex-end">
        <button className='general-cover__button'>
          <i className='bx bx-pencil general-cover__button-icon'></i>
          <p>Personalizar</p>
        </button>
      </div>
      <div className="general-cover__info">
        <h1 className="general-cover__name heading-secondary">{title}</h1>
        <p className='general-cover__carerr'>{ career }</p>
      </div>
    </div>
  )
}
