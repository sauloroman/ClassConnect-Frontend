import React from 'react'
import { useModal } from '../../../../application/hooks'
import { ModalNames } from '../../../../application/state/modal/modal.slice'
import { GeneralModalCode, GeneralModalDetailsClassroom } from '../views/general/components'

export const ClassroomDisplayModal: React.FC = () => {
  const { modalName } = useModal()
  return (
    <>
      { modalName === ModalNames.showClassroomDetails && <GeneralModalDetailsClassroom /> }
      { modalName === ModalNames.showClassroomCode && <GeneralModalCode /> }
    </>
  )
}
