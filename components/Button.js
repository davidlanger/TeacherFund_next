import 'react'
import Link from 'next/link'

export default function Button ({ children, color = 'yellow', href, big, nextLink }) {
  const className = `white no-underline pointer ${big ? 'pa3' : 'pa2'} db br-pill tf-lato b v-mid bg-tf-${color} ${big ? 'w-80' : 'w-40'} m-auto`
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  } else if (href) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    )
  } else {
    return (
      <button className={className}>
        {children}
      </button>
    )
  }
}
