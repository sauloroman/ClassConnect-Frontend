import { useNavigate, useParams } from "react-router-dom"

export const useNavigatePage = () => {

  const params = useParams()
  const navigate = useNavigate()

  const navigateToPage = ( page: string ) => {
    navigate(page)
  }

  const getTokenFromParams = (): string => {
    return params?.token ?? ''
  }

  return {
    navigateToPage,
    getTokenFromParams,
  }

}