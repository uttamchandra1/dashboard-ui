"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id:1,
        title : "lorem ispum lorem ",
        time : "12:00 PM - 2:00 PM",
        description : "lorem ispum lorem ispum lorem ispum lorem"
    },
    {
        id:2,
        title : "lorem ispum lorem ",
        time : "12:00 PM - 2:00 PM",
        description : "lorem ispum lorem ispum lorem ispum lorem"
    },
    {
        id:3,
        title : "lorem ispum lorem ",
        time : "12:00 PM - 2:00 PM",
        description : "lorem ispum lorem ispum lorem ispum lorem"
    },
]
const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white rounded-md p-4'>
        <Calendar onChange={onChange} value={value} />
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold my-4'>Events</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
        <div className='flex flex-col gap-4'>
            {events.map(event => (
                <div className='border-2 border-gray-100 rounded-md p-5 border-t-4 odd:border-t-lamasky even:border-t-lamapurple' key={event.id}>
                    <div className='flex items-center justify-between '>
                        <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                        <span className='text-gray-300 text-xs'>{event.time}</span>
                    </div>
                    <p className='text-gray-400 mt-2 text-xs'>{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalender