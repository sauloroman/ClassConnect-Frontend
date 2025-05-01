import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { setAccordeonMenuStatus, setAsideMenuStatus } from "../state/menu/menu.slice"

export const useMenu = () => {

  const dispatch = useDispatch()
  const { IsAccordeonMenuOpen, IsAsideMenuOpen } = useSelector( (state: RootState) => state.menu )

  const openAsideMenu = () => {
    dispatch( setAsideMenuStatus( true ) ) 
  }

  const closeAsideMenu = () => {
    dispatch( setAsideMenuStatus( false ) )
  }

  const openAccordeonMenu = () => {
    dispatch( setAccordeonMenuStatus( true ) )
  }

  const closeAccordeonMenu = () => {
    dispatch( setAccordeonMenuStatus(false) )
  }

  return {
    IsAccordeonMenuOpen,
    IsAsideMenuOpen,

    openAsideMenu,
    closeAsideMenu,
    openAccordeonMenu,
    closeAccordeonMenu
  }

}