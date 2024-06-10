"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiCss3, SiFlutter, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiReact } from 'react-icons/si';

export default function Skills() {
    const skills = [
        {
            text:"HTML",
            Icon: SiHtml5,
        },
        {
            text:"CSS",
            Icon: SiCss3,
        },
        {
            text:"Javascript",
            Icon: SiJavascript,
        },
        {
            text:"PHP",
            Icon: SiPhp,
        },
        {
            text:"MySQL",
            Icon: SiMysql,
        },
        {
            text:"React",
            Icon: SiReact,
        },
        {
            text:"NodeJs",
            Icon: SiNodedotjs,
        },
        {
            text:"NextJs",
            Icon: SiNextdotjs,
        },
        {
            text:"Flutter",
            Icon: SiFlutter,
        },
    ];
    return (
        <div className='max-w-5xl mx-auto px-8'>
            <Title text='Skills 💪' className='flex flex-col items-center justify-center -rotate-6' />

            <HoverEffect items={skills}/>
        </div>
    )
}
