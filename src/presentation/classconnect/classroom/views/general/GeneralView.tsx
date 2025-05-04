import React from 'react'
import { GeneralCover, GeneralAnnouncement, GeneralInfo, GeneralCodeClassroom } from './components'
import { useClassroom } from '../../../../../application/hooks'

export const GeneralView: React.FC = () => {

  const { classroom } = useClassroom()
  const { img, title, career, code, description, group } = classroom!

  return (
    <div className='general'>
      <GeneralCover img={img} title={title} career={career} />
      <div className="general__grid">
        <div className='general__details'>
          <GeneralCodeClassroom code={code} />
          <GeneralInfo title={ title } />
        </div>
        <GeneralAnnouncement />
      </div>
    </div>
  )
}
