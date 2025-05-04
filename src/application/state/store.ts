import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { alertSlice } from "./alert/alert.slice";
import { authSlice } from "./auth/auth.slice";
import { classroomSlice } from "./classroom/classroom.slice";
import { classroomsSlice } from "./classrooms/classrooms.slice";
import { menuSlice } from "./menu/menu.slice";
import { modalSlice } from "./modal/modal.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    classrooms: classroomsSlice.reducer,
    classroom: classroomSlice.reducer,
    menu: menuSlice.reducer,
    modal: modalSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>