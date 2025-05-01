import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassroomEntity } from "../../../domain/entities";

interface InitialStateClassrooms {
  isLoading: boolean;
  classrooms: ClassroomEntity[];
}

const initialState: InitialStateClassrooms = {
  isLoading: false,
  classrooms: []
}

export const classroomSlice = createSlice({
  name: 'classrooms',
  initialState: initialState,
  reducers: {

    setIsLoadingClassrooms: ( state, {payload}: PayloadAction<boolean> ) => {
      state.isLoading = payload
    },

    addClassrooms: ( state, {payload}: PayloadAction<ClassroomEntity> ) => {
      state.classrooms.push( payload )
    } 

  }
})

export const {
  setIsLoadingClassrooms,
  addClassrooms,
} = classroomSlice.actions