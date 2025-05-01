import React, { useMemo } from 'react'
import { useAuth } from '../../../../application/hooks'
import { Roles } from '../../../../domain/entities'

export const ClassConnectInfoUser: React.FC = () => {

  const { user } = useAuth()

  const roleText = useMemo(() => {
    return user?.role === Roles.TEACHER 
    ? 'Profesor' 
    : user?.role === Roles.STUDENT
    ? 'Estudiante'
    : 'Administrador' 
  }, [user])

  return (
    <div className='classconnect-user'>
      <div className="classconnect-user__info">
        <p className="classconnect-user__role">{ roleText }</p>
        <p className="classconnect-user__name">{ user?.firstName } { user?.lastName }</p>
      </div>
      <div className="classconnect-user__image">
        {
          user?.avatarUrl
          ?  <img className='classconnect-user__photo' src={user?.avatarUrl} alt="Imagen del usuario" />
          : <p className='classconnect-user__initial'>{ user?.firstName[0] }</p>
        }
      </div>
    </div>
  )
}
