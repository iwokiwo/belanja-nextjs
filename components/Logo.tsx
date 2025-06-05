import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const Logo = ({className}: {className?: string}) => {
  return (
    <Link href={"/"}>
      <h2 className={cn("text-2xl text-shop_dark_green font-black tracking-wide uppercase hover:text-shop_light_green", className)}>
        Ren<span>Car</span>
      </h2>
    </Link>
  )
}

export default Logo
