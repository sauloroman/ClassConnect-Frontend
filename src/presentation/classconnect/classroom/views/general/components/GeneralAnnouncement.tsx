import React from 'react'
import { GeneralAnnouncementDefault, GeneralAnnouncementCreate } from './'

export const GeneralAnnouncement: React.FC = () => {
  return (
    <div className='general-add'>
      <GeneralAnnouncementCreate />
      <GeneralAnnouncementDefault />
    </div>
  )
}
