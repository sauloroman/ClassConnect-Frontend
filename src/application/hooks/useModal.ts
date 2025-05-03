import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { closeModal, ModalNames, openModal, setModalName } from "../state/modal/modal.slice"

export const useModal = () => {

  const dispatch = useDispatch<any>()
  const { isOpen, modalName } = useSelector( (state: RootState) => state.modal )

  const onOpenModal = ( modalName: ModalNames ) => {
    dispatch( openModal() )
    dispatch( setModalName(modalName) )
  } 
  
  const onCloseModal = () => {
    dispatch( closeModal() )
    dispatch( setModalName(ModalNames.noModal) )
  }

  return {
    isModalOpen: isOpen,
    modalName,

    onOpenModal,
    onCloseModal
  }

}