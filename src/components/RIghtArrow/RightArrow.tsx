import Image from 'next/image'
import React from 'react'

const RightArrow = () => {
  return (
    <div className="h-[10px] w-[10px] relative">
      <Image alt="right-arrow" src={'/rightArrow.svg'} fill sizes="100%" />
    </div>
  )
}

export default RightArrow
