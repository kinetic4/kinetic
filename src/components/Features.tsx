import React, { useRef, useState } from 'react'
import BentoCard from './BentoCard'
import { IconArrowsDiagonal, IconArrowWaveRightUp } from "@tabler/icons-react";
import BentoTilt from './BentoTilti';



const Features = () => {


  return (
    <section className='bg-black pb-52'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-circular-web text-blue-50 text-lg'>Into the metagame layer</p>
            <p className='font-circular-web text-blue-50 text-lg max-w-md opacity-50'>
                Immerse yourself in rich and ever-expanding universe where a vibrant array of products coverage into an interconnected overlay experience in your world
            </p>
          </div>
        <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
          <BentoCard 
          src='videos/feature-1.mp4' 
          title={<>Radia<b>n</b>t</>}
          description = 'A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.'
          isComingSoon={true}
          />
        </BentoTilt>
        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
          <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
            <BentoCard 
            src='videos/feature-2.mp4'
            title={<>Zig<b>m</b>a</>}
            description='An anime and gaming-inspired NFT collection - the IP primed for expansion.'
            isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <BentoCard 
            src='videos/feature-3.mp4'
            title={<>N<b>e</b>xus</>}
            description='A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction'
            isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_1 row-span-1 me-14 md:col-span-1 md:me-0'>
            <BentoCard 
            src='videos/feature-4.mp4'
            title={<>Az<b>u</b>l</>}
            description='A cross-world AI Agent - elevating your gameplay to be more fun and productive.'
            isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className='bento-tilt_2'>
            <div className='flex size-full flex-col justify-between bg-violet-300 p-5'>
              <h1 className='bento-title special-font max-w-64 text-black uppercase'>M<b>o</b>re <br /> Co<b>m</b>ing <br /> S<b>o</b>on.</h1>
              <IconArrowsDiagonal className='absolute bottom-3 z-40 text-black w-[5.5rem] h-[4rem] right-5 '/>
            </div>
          </BentoTilt>
          <BentoTilt className='bento-tilt_2'>
              <video 
              src='videos/feature-5.mp4'
              autoPlay
              loop
              muted
              className='object-cover size-full object-center'
              />
          </BentoTilt>
        </div>
        </div>
    </section>
  )
}

export default Features