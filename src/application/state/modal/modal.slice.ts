import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ModalNames {
  noModal = 'noModal',
  createClassroom = 'createClassroom',
  showClassroomDetails = 'showClassroomDetails'
}

interface InitialStateModal {
  isOpen: boolean;
  modalName: ModalNames;
}

const initialState: InitialStateModal = {
  isOpen: false,
  modalName: ModalNames.noModal
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {

    openModal: (state ) => {
      state.isOpen = true
    },

    closeModal: (state) => {
      state.isOpen = false
    },

    setModalName: ( state, {payload}: PayloadAction<ModalNames> ) => {
      state.modalName = payload
    }

  }
})

export const {
  openModal,
  closeModal,
  setModalName
} = modalSlice.actions