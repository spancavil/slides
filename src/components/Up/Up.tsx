import Image from 'next/image'
import React from 'react'

const Up = () => {
  return (
    <div className='h-[24px] w-[24px] md:h-10 md:w-10 relative cursor-pointer'>
        <Image 
            fill
            alt='up'
            src={'/up.svg'}
            sizes='100%'
        />
    </div>
  )
}

export default Up