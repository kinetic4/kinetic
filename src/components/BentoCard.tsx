import {  IconArrowUpRight, TablerIcon } from '@tabler/icons-react'
import React from 'react'

interface Bentocard {
    src?: string,
    title?: React.ReactNode,
    description?: string,
    isComingSoon?: boolean,
    icon? : TablerIcon,
}



const ComingSoon : React.FC<{ isComingSoon?: boolean, }> = ({isComingSoon}) => {
    if(!isComingSoon) return null

    return (
        <button 
      className="
        flex items-center  gap-1.5 
        absolute bottom-4 left-4 
        bg-black 
        text-[#696972]
        px-2.5 py-1 
        font-general    
        rounded-full 
        text-xs 
        font-medium
        cursor-pointer
        transition-colors
        z-20
        border border-[#404046]
      "
    >
      <IconArrowUpRight size={24}/>
      <span className="opacity-80">Coming Soon</span>
    </button>
    )
}

 
const BentoCard = ({ src, title, description, isComingSoon,} : Bentocard ) => {
  return (
    <div className='relative size-full'>
        <video 
        src={src} 
        loop
        muted
        autoPlay
        className='absolute left-0 top-0 size-full object-cover object-center'
        />
        <div className='relative z-10 flex-col flex size-full justify-between p-5 text-blue-50'>
            <div>
                <h1 className='bento-title special-font'>{title}</h1>
                {description && (
                    <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
                )}
            </div>
            <div className='flex items-center justify-end absolute bottom-4 right-4'>
          
        </div>
      </div>

      <ComingSoon isComingSoon={isComingSoon}  />
      </div>
  )
}

export default BentoCard