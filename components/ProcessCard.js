import 'react'
import MediaCard from './MediaCard'

export default function ProcessCard ({ title, children, icon }) {
  return (
    <div className='ma3 ma3-m w-25-m w-25-l'>
      <div className='w-100 pa3 pt3-m bg-card h5-25'>
        <MediaCard
          icon={icon}
          title={title}
          bgColor='white'
        >
          {children}
        </MediaCard>
      </div>
    </div>
  )
}
