import Image from 'next/image'
import React from 'react'
import Logo from '../../public/images/logo.svg'

export default function TitleHeader() {

  return (
    <Image
      alt="Big Deal"
      src={Logo}
      height={60}
      width="150"
    />
  )
}
