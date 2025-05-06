import React from 'react'

interface ClassConnectPhotoUserProps {
  image?: string,
  firstName: string,
}

export const ClassConnectPhotoUser: React.FC<ClassConnectPhotoUserProps> = ({ image, firstName }) => {
  return (
    <>
    {
      image
      ?  <img className='classconnect-user__photo' src={image} alt="Imagen del usuario" />
      : <p className='classconnect-user__initial'>{ firstName[0] }</p>
    }
    </>
  )
}
