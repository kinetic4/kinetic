import {  IconArrowUpRight, TablerIcon } from '@tabler/icons-react'
import React from 'react'

interface Bentocard {
    src?: string,
    title?: React.ReactNode,
    description?: string,
    isComingSoon?: boolean,
    icon? : TablerIcon,
    button?: boolean,
    title2?: React.ReactNode,
    containerClass?: string,
    buttonPosition?: 'left' | 'right',
    buttonIcon?: TablerIcon
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

const Button : React.FC<{ 
    button?: boolean, 
    title2?: React.ReactNode, 
    containerClass?: string,
    buttonIcon?: TablerIcon,
    buttonPosition?: 'left' | 'right'
}> = ({
    button, 
    title2, 
    containerClass, 
    buttonPosition = 'left'
}) => {
  if(!button) return null
  return (
    <button
    className={`
        group relative z-10 w-fit cursor-pointer overflow-hidden border border-[#edff66]
        rounded-full bg-black px-2.5 py-1 text-[#edff66]
        transform-gpu transition-transform duration-300 
        hover:rotate-2 hover:-rotate-y-3 
        ${buttonPosition === 'right' ? 'absolute bottom-4 right-4' : ''}
        ${containerClass}
    `}>
    <span className="relative inline-flex overflow-hidden font-general text-xs uppercase font-medium gap-2">
      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
        {title2}
      </div>
    <IconArrowUpRight className='mr-[1px] pb-[3px]'  size={19}/>
      <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
        {title2}
      </div>
    </span>
  </button>
  )
}
 
const BentoCard = ({ 
    src, 
    title, 
    description, 
    isComingSoon, 
    button, 
    title2, 
    containerClass,
    buttonPosition = 'left',
} : Bentocard) => {
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
            <div className='flex items-center justify-end'>
                <Button 
                    button={button} 
                    title2={title2} 
                    containerClass={containerClass}
                    buttonPosition={buttonPosition}
                />
            </div>
      </div>

      <ComingSoon isComingSoon={isComingSoon}  />
      </div>
  )
}

export default BentoCard