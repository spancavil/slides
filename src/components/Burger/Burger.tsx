import Image from 'next/image'
import React from 'react'

const Burger = () => {
  return (
    <div className="h-[30px] w-[30px] md:h-10 md:w-10 relative cursor-pointer">
      <Image src={'/burger.svg'} alt="burger" fill sizes="100%" />
    </div>
  )
}

export default Burger
