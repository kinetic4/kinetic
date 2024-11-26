import { IconBrandDiscord, IconBrandGithub, IconBrandInstagram, IconBrandTwitch, IconBrandTwitter, TablerIcon } from '@tabler/icons-react'
import React from 'react'


    interface links {
        href: string,
        icon: TablerIcon
    }
    
const Footer = () => {
    const Link: links[] = [
        { href: 'https://discord.com', icon: IconBrandDiscord},
        { href: 'https://twitter.com', icon: IconBrandTwitter},
        { href: 'https://github.com', icon: IconBrandGithub},
        { href: 'https://twitch.com', icon: IconBrandTwitch},
    ]

  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left'>
                &copy; 2024 Kinetic. All rights reserved 
            </p>
            <div className='flex justify-center gap-4 md:justify-start'>
                {Link.map((item) => (
                    <a
                    key={item}
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-black transition-colors duration-500 ease-in-out hover:text-white'
                    >
                        <item.icon strokeWidth={2} size={24}/>
                    </a>
                ))}
            </div>
            <a href="#privacy-policy" className='tex-center text-sm hover:underline md:text-right'>
                Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer