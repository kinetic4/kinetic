import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import AnimatedTitle from './AnimatedTitle'

const About: React.FC = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: '0 0 0 0',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'power1.inOut'
        })
    })

  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[10px]'>
                Welcome To Kinetic
            </h2>
            <AnimatedTitle title=" Disc<b>o</b>ver the world's <br/>
            l<b>a</b>rgest shared adventure" containerClass='mt-5 text-center !text-black'/>
            
            <div className='about-subtext'>
                <p>The Game Of Games Begins-Your Life, Now An Epic MMORPG</p>
                <p>Zentry unites every player from countless games and platform</p>
            </div>
        </div>
        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'>
                <img
                 src="img/about.webp"
                 alt="background"
                 className='absolute left-0 top-0 size-full object-cover'
                  />
            </div>
        </div>
    </div>
  )
}

export default About