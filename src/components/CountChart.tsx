"use client"
import Image from 'next/image';
import React from 'react'

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 106,
        fill: 'white',
      },
  {
    name: 'Boys',
    count: 63,
    fill: '#C3EBFA',
  },
  {
    name: 'Girls',
    count: 37,
    fill: '#FAE27C',
  },
  
];

const CountChart = () => {
  return (
    <div className='w-full h-full bg-white rounded-xl p-4'>
        <div className='flex items-center justify-between '>
            <h1 className='text-xl font-semibold'>Students</h1>
            <Image src="/moreDark.png" width={20} height={20} alt='' />
        </div>
        <div className=' relative w-full h-[75%]'>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' />
        </div>
        <div className='flex gap-16 items-center justify-center'>
            <div className='flex flex-col gap-1'>
                <div className='h-5 w-5 bg-lamasky rounded-full'></div>
                <h2 className='font-semibold '>1,234</h2>
                <span className='text-xs text-gray-300 '>Boys(65%)</span>
            </div>

            <div className='flex flex-col'>
                <div className='h-5 w-5 bg-lamayellow rounded-full'></div>
                <h2 className='font-semibold '>1,234</h2>
                <span className='text-xs text-gray-300 '>Girls(45%)</span>
            </div>
        </div>
    </div>
  )
}

export default CountChart