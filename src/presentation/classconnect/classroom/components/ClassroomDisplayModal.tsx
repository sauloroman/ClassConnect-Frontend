import React from 'react'
import { useModal } from '../../../../application/hooks'
import { ModalNames } from '../../../../application/state/modal/modal.slice'
import { GeneralModalDetailsClassroom } from '../views/general/components'

export const ClassroomDisplayModal: React.FC = () => {

  const { isModalOpen, modalName } = useModal()

  return (
    <>
      {
        isModalOpen
        && modalName === ModalNames.showClassroomDetails && <GeneralModalDetailsClassroom />
      }
    </>
  )
}
