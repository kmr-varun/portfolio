import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'
import { BackgroundBeams } from '@/components/ui/background-beams'

export default function HeroSection() {
  return (
    <div className='min-h-[80vh] flex lg:gap-0 lg:flex-row items-center justify-between'>
        <div className='space-y-10 text-center lg:text-left z-20'>
            <h1 className='text-4xl lg:text-7xl font-bold'>Nice to meet you!
                <br/>🖐 
                <span className='underline underline-offset-8 decoration-indigo-800'>{"I'm Varun."}</span>
            </h1>
            <p className='md:w-96 text-lg text-gray-300'>
                {"I'm a Fullstack Developer passionate about building a modern web application that users love."}
            </p>
            <Link href={'mailto:kmr11varun@gmail.com'} className='inline-block'>
                <MovingBorderBtn borderRadius='0.5rem' className='p-3 px-5 font-semibold '>
                    <p>Available for Work</p>
                </MovingBorderBtn>
            </Link>
            
        </div>

     
    </div>
  )
}



