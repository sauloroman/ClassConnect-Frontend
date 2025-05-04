import React from 'react'
import { Modal } from '../../../../../shared/components'
import { useModal } from '../../../../../../application/hooks'

export const GeneralModalDetailsClassroom: React.FC = () => {

  const { onCloseModal } = useModal()

  return (
    <Modal>GeneralModalDetailsClassroom</Modal>
  )
}
