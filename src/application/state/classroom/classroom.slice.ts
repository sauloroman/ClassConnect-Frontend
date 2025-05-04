import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassroomEntity } from "../../../domain/entities";

export const menuClassroom = ['general', 'trabajos', 'estudiantes', 'calificaciones']

interface InitialStateClassroom {
  navPageClassroom: string,
  classroom: ClassroomEntity | null,
}

const initialStateClassroom: InitialStateClassroom = {
  classroom: null,
  navPageClassroom: menuClassroom[0]
}

export const classroomSlice = createSlice({
  name: 'navigation',
  initialState: initialStateClassroom,
  reducers: {

    setNavPageClassroom: ( state, {payload}: PayloadAction<string>) => {
      state.navPageClassroom = payload
    },

    setClassroom: ( state, { payload }: PayloadAction<ClassroomEntity> ) => {
      state.classroom = payload
    }

  }
})

export const {
  setNavPageClassroom,
  setClassroom,
} = classroomSlice.actions

