import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassroomEntity } from "../../../domain/entities";
import { IPagination } from "../../../domain/interfaces";
import { ClassroomCategoryEntity } from "../../../domain/entities/classroom-category.entity";

interface InitialStateClassrooms {
  isLoading: boolean;
  classrooms: ClassroomEntity[];
  categories: ClassroomCategoryEntity[]
  pagination: IPagination
}

const initialState: InitialStateClassrooms = {
  isLoading: false,
  classrooms: [],
  categories: [],
  pagination: {
    currentPage: 1,
    limit: 5,
    nextPage: null,
    prevPage: null,
    totalItems: 0,
    totalPages: 0
  }
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
    },

    setClassrooms: ( state, {payload}: PayloadAction<ClassroomEntity[] | []>) => {
      state.classrooms = payload
    },

    setClassroomsCategories: ( state, {payload}: PayloadAction<ClassroomCategoryEntity[] | []>) => {
      state.categories = payload
    },

    setPagination: ( state, { payload }: PayloadAction<IPagination>) => {
      state.pagination = payload
    }

  }
})

export const {
  setIsLoadingClassrooms,
  addClassrooms,
  setClassrooms,
  setClassroomsCategories,
  setPagination,
} = classroomSlice.actions