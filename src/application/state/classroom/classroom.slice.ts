import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassroomEntity } from "../../../domain/entities";
import { IPagination } from "../../../domain/interfaces";
import { ClassroomCategoryEntity } from "../../../domain/entities/classroom-category.entity";


interface InitialStateClassrooms {
  isLoading: boolean;
  classrooms: ClassroomEntity[];
  categories: ClassroomCategoryEntity[]
  filterCategory: string,
  pagination: IPagination
}

const initialState: InitialStateClassrooms = {
  isLoading: false,
  classrooms: [],
  categories: [],
  filterCategory: 'todos',
  pagination: {
    currentPage: 1,
    limit: 8,
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

    setClassrooms: ( state, {payload}: PayloadAction<ClassroomEntity[] | []>) => {
      state.classrooms = payload
    },

    setClassroomsCategories: ( state, {payload}: PayloadAction<ClassroomCategoryEntity[] | []>) => {
      state.categories = payload
    },

    setPagination: ( state, { payload }: PayloadAction<IPagination>) => {
      state.pagination = payload
    },

    setPage: ( state, { payload }: PayloadAction<number>) => {
      state.pagination.currentPage = payload
    },

    setFilterCategory: ( state, { payload }: PayloadAction<string>) => {
      state.filterCategory = payload
    }

  }
})

export const {
  setIsLoadingClassrooms,
  setClassrooms,
  setClassroomsCategories,
  setPagination,
  setPage,
  setFilterCategory,
} = classroomSlice.actions