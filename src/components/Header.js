import React from 'react'
import Image from 'next/image'
export default function Header() {
  return (
    <div>
      {/* left */}

      <div className='flex items-center justify-between max-width-6xl'>
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
          <Image 
            src={'https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png'}
            layout='fill'
            className='object-contain'
            />
        </div>
        <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
          <Image 
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'}
            layout='fill'
            className='object-contain'
            />
        </div>
        <div>Right Side</div>
      </div>
      {/* middle */}
      {/* right */}
    </div>
  )
}
