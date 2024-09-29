"use client"
import Image from 'next/image'
import React from 'react'

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 85,
    absent: 33,
  },
  {
    name: 'Tues',
    present: 65,
    absent: 95,
  },
  {
    name: 'Wed',
    present: 65,
    absent: 55,
  },
  {
    name: 'Thurs',
    present: 95,
    absent: 45,
  },
  {
    name: 'Fri',
    present: 105,
    absent: 50,
  },
  
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl p-4 h-full'>
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px" , borderColor:"lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px" , paddingBottom:"40px"}}/>
          <Bar dataKey="present" fill="#C3EBFA" legendType="circle" radius={[10,10,0,0]}  />
          <Bar dataKey="absent" fill="#FAE27C" legendType="circle" radius={[10,10,0,0]}  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart