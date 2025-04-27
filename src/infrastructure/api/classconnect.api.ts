import axios from 'axios'
import { 
  getEnvVariables, 
  getLocalStorage 
} from '../../presentation/shared/helpers'

const { VITE_BACKEND_URL } = getEnvVariables()

export const classconnectApiPublic = axios.create({
  baseURL: VITE_BACKEND_URL,
  timeout: 6000,
})

export const classconnectApiPrivate = axios.create({
  baseURL: VITE_BACKEND_URL,
  timeout: 6000,
})

classconnectApiPrivate.interceptors.request.use( (config) => {
  const classconnectToken = getLocalStorage('classconnectToken')

  if ( classconnectToken ) {
    config.headers.Authorization = `Bearer ${classconnectToken}`
  }

  return config
})


