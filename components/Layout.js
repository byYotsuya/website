
export default function Layout ({ children, metadata = {}, type = 'list' }) {
  const isBlogTemplate = type === 'list' && metadata.date

  return (
    <div className='h-full p-2 md:p-3 lg:p-5 xl:p-7 rounded-sm w-full lg:max-w-2xl'>

      <div className='mx-0 lg:mx-4 my-4 rounded-lg w-full'>

        {
          isBlogTemplate
            ? (
              <h1 className='text-4xl m-2 dark:text-gray-400 '>
                {metadata.title}
              </h1>
              )
            : (
              <h2 className='text-4xl font-bold dark:text-gray-400'>
                <strong>{metadata.title}</strong>
              </h2>
              )
        }
        <section style={{ marginTop: '2rem' }}>{children}</section>

      </div>

    </div>
  )
}
