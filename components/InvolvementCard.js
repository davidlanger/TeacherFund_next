import 'react'

export default function StatisticCard ({ title, children, action }) {
  return (
    <div className='pa2 pa4-ns w-40-m w-33-l w-80 bg-card h5-5-ns ma3'>
      <div className='w-100 pa2'>
        <div className='pa2 tc'>
          <div className='tf-lato f3 pv2 tc'>
            {title}
          </div>
          <div className='tf-lato-lite f3-l f5-m pt2 tc h4-m'>
            {children}
          </div>
        </div>
        <div className='db center w-auto pv4 pb0-ns ph4 tc'>
          {action}
        </div>
      </div>
    </div>
  )
}
