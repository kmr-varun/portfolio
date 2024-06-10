import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiWhatsapp, SiX } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {

    const socials = [
        {
            link: "https://www.linkedin.com/in/kmrvarun/",
            label: "Linkedin",
            Icon: SiLinkedin,
        },
        {
            link: "https://github.com/kmr-varun",
            label: "Github",
            Icon: SiGithub,
        },
        {
            link: "https://wa.me/+918989004998",
            label: "X",
            Icon: SiWhatsapp,
        },
    ];

  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-indigo-500 -rotate-2 z-20'>Varun Kumar Bilwal</h1>

        <div className='flex items-center gap-5 z-20'>
            {socials.map((social, index)=>{
                const Icon = social.Icon
                return <Link href={social.link} target='_blank' key={index} aria-label={social.label}>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all z-30'/>
                </Link>
            })}
        </div>
    </nav>
  )
}
