import React from 'react'
import Link from "next/link"

const Logo = ({light = false}) => {

  const colorClass = light ? "text-white" : "text-primary"
  return (
    <Link href="/" className='font-primary text-2xl tracking-[4px]'> <span className={colorClass}>Monish Soni</span></Link>
  )
}

export default Logo