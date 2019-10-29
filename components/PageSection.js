import 'react'

export default function PageSection ({ title, children, bgColor, color = '' }) {
  return (
    <section className={'h-section' + (bgColor ? ' bg-tf-' + bgColor : '') + ' mt3 pt5-l'}>
      <div className='flex flex-column mt3 pt5-l'>
        <div className={`f1-l f2-m mb3-m tf-oswald center ${color}`}>
          {title}
        </div>
        <div className='flex flex-row flex-wrap justify-center w-auto mt2 mt5-l center'>
          {children}
        </div>
      </div>
    </section>
  )
}

// <section className='h-section bg-tf-teal pt5-l'>
//           <div className='flex flex-column pv3 pv0-l'></div>
