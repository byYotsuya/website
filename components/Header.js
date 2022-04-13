import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconArrowLeft } from './icons'
import SearchButton from './partials/SearchButton'
import TitleHeader from './partials/TitleHeader'


export default function Header({ background = "#38bdf8" }) {
  const { pathname } = useRouter()


  return (

    <div className={`bg-[${background}] max-w-full bg-slate-900 `}>
      {
        pathname !== '/' && <Link href='/' >
          <IconArrowLeft className='h-5 w-5 mx-2 cursor-pointer fixed top-8 left-5' />
        </Link>
      }

      <div className='flex max-w-6xl px-2 md:px-4 lg:px-4 py-2 h-20 mx-auto items-center '>
        <header className='flex h-10 w-full flex-col md:flex-row items-center justify-between'>

          <div className='items-start content-start'>
            <Link href="/">
              <a>
                <TitleHeader />
              </a>
            </Link>
          </div>

          <div className='flex'>
            <div className='mx-5'>
              <Link href="/p/about-me">
                <a>
                  <p className='text-yellow-500 font-bold text-base md:text-lg xl:text-xl'>
                    Sobre mí
                  </p>
                </a>
              </Link>
            </div>
            <div >
              <SearchButton />
            </div>
          </div>

        </header>
      </div>
    </div>
  )
}
