import React, { useEffect, useRef, useState } from 'react'
import ImageClipBox from './ImageClip'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'



const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
        <div className='relative rounded-lg  bg-black py-24 text-blue-50 md:overflow-hidden'>
            <div className='absolute -left-20 top-0 hidden  h-full w-72 overflow-hidden sm:block sm:left-20 lg:w-96'>
               <ImageClipBox src='img/contact-1.webp' clipClass='contact-clip-path-1'/>
               <ImageClipBox src='img/contact-2.webp' clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60'/>
               </div>
               <div className='absolute -top-40 left-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
               <ImageClipBox src='img/swordman-partial.webp' clipClass='absolute md:scale-125'/>
               <ImageClipBox src='img/swordman.webp' clipClass='sword-man-clip-path md:scale-125'/>
               </div>
               <div className='flex flex-col text-center items-center'>
                <p className='font-general text-[10px] uppercase'>Join To kinetic</p>
               <AnimatedTitle  
               containerClass='mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem] uppercase' 
               title=' let’s b<b>u</b>ild the <br/> new era of <br/> g<b>a</b>ming t<b>o</b>gether.' />
               <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pratyushbhargava6@gmail.com" target='_blank' rel='noopener noreferrer'>
               <Button title='Contact' containerClass='mt-10 cursor-pointer'/>
               </a>
               </div>
            </div>
        </div>
  )
}

export default Contact