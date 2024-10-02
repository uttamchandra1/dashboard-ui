import Announcement from '@/components/Announcement';
import BigCalendar from '@/components/BigCalender';
import React from 'react'

const TeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row h-full'>
      <div className='w-full xl:w-2/3'>
         <div className='h-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule</h1>
          <BigCalendar />
         </div>
      </div>
      
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
        <Announcement />
      </div>
      
    </div>
  )
}

export default TeacherPage;
