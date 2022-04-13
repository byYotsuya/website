import { IconSearch } from '../icons'

export default function SearchButton() {
  return (
    <form>
      <div className='hidden md:flex justify-center items-center'>
      
        <IconSearch 
          className='mt-0 -mr-6 lg:-mt-1 xl:mt-0 h-full text-blue-800'
          />
        <input
          className='w-0 md:w-48 lg:w-full h-7 xl:h-10 text-white border-blue-800 bg-transparent rounded-full border-[3px] pl-7 pr-2 py-3'
          placeholder="Search" />
              
      </div>
    </form>

  )
}
