import React, { useState } from 'react'
import { ClassConnectPhotoUser } from '../../../../layout/components/ClassConnectPhotoUser'
import { useAuth } from '../../../../../../application/hooks'
import { GeneralAnnouncementEditor } from './'

export const GeneralAnnouncementCreate: React.FC = () => {

  const { user } = useAuth()
  const [showBody, setShowBody] = useState(false)

  return (
    <div className='general-create'>

      <div className="general-create__content">

        {
          !showBody
          && 
          <div className="general-create__mini">
            <div className="general-create__photo">
              <ClassConnectPhotoUser 
                firstName={ user?.firstName! }
                image={ user?.avatarUrl! }
              />
            </div>
            <div className="general-create__text">Anuncia algo en tu clase</div>
            <button onClick={ () => setShowBody(true) } className='general-create__button'>
              <i onClick={ () => setShowBody(true) }  className='bx bx-caret-down general-create__icon'></i>
            </button>
          </div> 
        }

        { showBody && <GeneralAnnouncementEditor /> }
      </div>
    </div>
  )
}
