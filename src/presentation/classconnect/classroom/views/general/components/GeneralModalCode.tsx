import React from 'react'
import { Modal } from '../../../../../shared/components'
import { useClassroom } from '../../../../../../application/hooks'

export const GeneralModalCode: React.FC = () => {

  const { classroom } = useClassroom()
  const { code, title, career } = classroom!

  return (
    <Modal width={70}>
      <div className="general-modal-code">
        <p className='general-modal-code__code'>{code}</p>
        <footer className="general-modal-code__footer">
          <div>
            <p>{title}</p>
            <p>{career}</p>
          </div>
          <div>
            <button className='general-modal-code__button'>Copiar enlace de invitación</button>
          </div>
        </footer>
      </div>
    </Modal>
  )
}
