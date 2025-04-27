import { useNavigate } from "react-router-dom"

export const useNavigatePage = () => {

  const navigate = useNavigate()

  const navigateToPage = ( page: string ) => {
    navigate(page, { replace: false })
  }

  return {
    navigateToPage
  }

}