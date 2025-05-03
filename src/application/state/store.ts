import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";
import { alertSlice } from "./alert/alert.slice";
import { menuSlice } from "./menu/menu.slice";
import { classroomSlice } from "./classroom/classroom.slice";
import { modalSlice } from "./modal/modal.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    classrooms: classroomSlice.reducer,
    menu: menuSlice.reducer,
    modal: modalSlice.reducer
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