"use client"

import Image from 'next/image'
import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    expence: 4000,
    income: 8000,
  },
  {
    name: 'Feb',
    expence: 8000,
    income: 5000,
  },
  {
    name: 'Mar',
    expence: 5400,
    income: 6600,
  },
  {
    name: 'Apr',
    expence: 3400,
    income: 2400,
  },
  {
    name: 'May',
    expence: 8756,
    income: 8000,
  },
  {
    name: 'Jun',
    expence: 7654,
    income: 6754,
  },
  {
    name: 'Jul',
    expence: 9000,
    income: 6500,
  },
  {
    name: 'Aug',
    expence: 2500,
    income: 9000,
  },
  {
    name: 'Sep',
    expence: 4000,
    income: 8400,
  },
  {
    name: 'Oct',
    expence: 4200,
    income: 6400,
  },
  {
    name: 'Nov',
    expence: 4234,
    income: 6700,
  },
  {
    name: 'Dec',
    expence: 9200,
    income: 8700,
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl p-4 h-full '>
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px" , paddingBottom:"30px"} }/>
          <Line type="monotone" dataKey="expence" stroke="#CFCEFF" strokeWidth={5} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart