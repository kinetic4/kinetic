import  { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { IconCaretRightFilled } from '@tabler/icons-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 4;


  const nextVidRef = useRef(null)


  const handleVideoLoad = () => {
      setLoadedVideos((prev) => prev + 1)

  }

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1


  const  handleMiniVideoPlayer = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex)
  }

  useEffect(() => {
    if(loadedVideos === totalVideos -1 ){
      setLoading(false)
    }
  }, [loadedVideos])

  useGSAP(() => {
    if(hasClicked) {
      gsap.set('#next-video', {visibility: 'visible'})
      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '111%',
        duration: 1,
        ease: 'power1.InOut',
        onStart: () => nextVidRef.current.play(),
      })
      gsap.from('#current-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.InOut',

      })
    }
  }, {dependencies: [currentIndex], revertOnUpdate : true})

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 40% 10%'
    })

    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center', 
        scrub: true
      }
    })
  })

  const getVideoSrc = (index: any) => `videos/hero-${index}.mp4`

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      {loading && (
        <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
          <div className='three-body'>
            <div className='three-body__dot' />
            <div className='three-body__dot' />
            <div className='three-body__dot' />
          </div>
        </div>
      )}
      <div id='video-frame' className='relative z-10 h-dvh overflow-hidden  bg-blue-75'>
        <div>
          <div className='mask-clip-path absolute-center absolute z-50 cursor-pointer overflow-hidden rounded-lg size-64'>
            <div onClick={handleMiniVideoPlayer} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
              <video 
              src={getVideoSrc(upcomingVideoIndex)}
              ref={nextVidRef}
              loop
              muted
              id='current-video'
              className='size-64 origin-center object-center object-cover scale-140' 
              onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video 
          ref={nextVidRef}
          src={getVideoSrc(currentIndex)} 
          loop
          muted
          id='next-video'
          className='absolute-center invisible absolute z-20 object-cover object-center size-64'
          onLoadedData={handleVideoLoad}
          />
          <video
           src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)} 
           autoPlay
           muted
           loop
           className='absolute left-0 top-0 size-full object-cover object-center'
           onLoadedData={handleVideoLoad}
           />
        </div>
        <h1 className='special-font hero-heading absolute bottom-3 z-40 text-blue-75 right-5'>
          G<b>a</b>ming
        </h1>
        <div className='absolute left-0 top-0 z-40 size-full '> 
          <div className='mt-24 px-5 sm:px-10'>
            <h1 className='special-font hero-heading text-blue-100'>
              Kinet<b>i</b><b>c</b>
            </h1>
            <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>
              Enter Metagame Layer <br /> Unleash The Play Economy
            </p>
            <Button id='watch trailer' title='Watch Trailer' leftIcon={IconCaretRightFilled} containerClass='bg-yellow-300 flex-center gap-2' />
          </div>
        </div>
      </div>
      <h1 className='special-font hero-heading absolute bottom-3  text-black right-5'>
          G<b>a</b>ming
        </h1>
    </div>
  )
}

export default Hero