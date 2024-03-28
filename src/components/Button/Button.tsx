"use client"
import React from 'react'

type ButtonProps = {
  hidden?: boolean
  hiddenMd?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({
  hidden = false,
  hiddenMd = false,
  children,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-[54px] bg-primary-button rounded-[10px] w-full md:w-[157px] flex justify-center items-center gap-[10px] ${hidden && 'hidden'} ${hiddenMd ? 'md:hidden' : 'md:flex'} text-white md:mt-8`}
    >
      {children}
    </button>
  )
}

export default Button
