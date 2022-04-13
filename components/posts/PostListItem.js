import React from 'react'
import { IconCalendar } from '../icons'

export default function PostListItem({ title, date, tags = [] }) {
  return (
    <div className='title mt-5'>
      <h3 style={{ fontFamily: "Poppins" }}>
        {title}
      </h3>
      <div className='flex flex-row items-center mt-1 ml-2 text-base text-blue-400'>
        <IconCalendar />
        <p>
          {date} {" "}
          {
            tags?.map((tag, index) => (
              <span key={tag} className='items-center flex-row text-sm mx-2 bg-teal-700 rounded-md p-1 text-white'>
                {tag}
              </span>
            ))
          }
        </p>
      </div>
    </div>
  )
}

