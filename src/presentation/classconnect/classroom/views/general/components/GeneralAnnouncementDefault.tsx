import React from 'react'
import annoDef from '../../../../../assets/img/announcement-default.png'

export const GeneralAnnouncementDefault: React.FC = () => {
  return (
    <div className='general-add-default'>
      <div className="general-add-default__container">
        <img 
          className='general-add-default__image'
          src={ annoDef }
          alt="Announcement Default" 
        />
        <div className="general-add-default__content">
          <h2 className="general-add-default__title">Aquí puedes comunicarte con tu clase</h2>
          <p className="general-add-default__text">Usa este espacio para publicar anuncios o tareas y responder a preguntas de los alumnos</p>
        </div>
      </div>
    </div>
  )
}
