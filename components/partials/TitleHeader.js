import Image from 'next/image'
import Logo from '../../public/images/logo.svg'

export default function TitleHeader() {

  return (
    <p className='text-2xl xl:text-3xl text-white font-bold' style={{fontFamily: 'Imperial Script'}}>
      Miguel Martinez
    </p>
  )
}


/**
 * 
 *     <Image
      alt="Big Deal"
      src={Logo}
      height={60}
      width="150"
    />
 */