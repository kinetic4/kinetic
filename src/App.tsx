import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import { Timeline } from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App:React.FC = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}

export default App