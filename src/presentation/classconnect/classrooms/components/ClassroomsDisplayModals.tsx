import React from 'react'
import { useModal } from '../../../../application/hooks'
import { ModalNames } from '../../../../application/state/modal/modal.slice'
import { ClassroomsCreateModal } from './ClassroomsCreateModal'

export const ClassroomsDisplayModals: React.FC = () => {
  
  const { isModalOpen, modalName } = useModal()

  return (
    <>
    {
      isModalOpen
      && (
        modalName === ModalNames.createClassroom && <ClassroomsCreateModal />
      )
    }
    </>
  )
}
