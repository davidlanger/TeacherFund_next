import 'react'

export default function MediaCard ({ title, children, icon, iconFullsize }) {
  const imageClassName = iconFullsize
    ? 'center br-100 ba b--black-05 ma3 h4 h3-m w4 w3-m bg-white overflow-hidden'
    : 'center br-100 pa4 pa2-m ba b--black-05 mb2 ma3-m h4 h3-m w4 w3-m bg-white'
  return (
    <div className='pa2 tc'>
      <div className={imageClassName}>
        {icon}
      </div>
      <div className='tf-oswald f3-l f4-m pv2 tc'>{title}</div>
      <div className='tf-lato-lite f3-l pt2 tc f5-m'>{children}</div>
    </div>
  )
}
