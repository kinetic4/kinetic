import { TablerIcon } from '@tabler/icons-react'
import React from 'react'

type Props = {
    id?: string,
    title: string   
    rightIcon?: TablerIcon
    leftIcon? : TablerIcon
    containerClass?: string
}

const Button:React.FC<Props> = ({id, title, rightIcon:RightIcon, leftIcon:LeftIcon, containerClass}) => {
  return (
    <button
    id={id}
    className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-lg bg-violet-50 px-7 py-3 text-black transform-gpu transition-transform duration-300 hover:rotate-2 hover:-rotate-y-3 ${containerClass}`}>
    {LeftIcon && <LeftIcon size={14} />}
    <span className="relative inline-flex overflow-hidden font-general text-xs uppercase font-medium">
      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
        {title}
      </div>
      <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
        {title}
      </div>
    </span>
    {RightIcon && <RightIcon size={14} />}
  </button>
  
  )
}

export default Button

