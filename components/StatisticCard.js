import 'react'

export default function StatisticCard ({ value, label, description, color }) {
  return (
    <div className={`index__metric border-tf-${color}`} aria-label={description}>
      <div className='tf-lato ts-title center'>
        {value}
      </div>
      <div className='pt2 tf-lato-lite ts-subtext center'>
        {label}
      </div>
    </div>
  )
}
