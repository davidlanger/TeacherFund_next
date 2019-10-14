import React from 'react'
import MediaCard from './MediaCard'

const TeamMember = (props) =>
  (
    <li className='bg-white z-1 ma4-l ma3-m w-25-ns w-80'>
      <div className='w-100 bg-transparent pa4-l'>
        <MediaCard
          title={props.name}
          iconFullsize
          icon={<img src={'/static/images/people/' + props.src} alt='' />}
        >
          {props.bio}
        </MediaCard>
      </div>
    </li>
  )

export default TeamMember
