import Image from 'next/image';
import React from 'react'

const SingalTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        <div className='w-full xl:w-2/3'>
          <div className='flex flex-col lg:flex-row gap-4'>
            <div className='bg-lamasky py-6 px-4 rounded-md flex-1 flex gap-4'>
                <div className='w-1/3'>
                  <Image 
                  src="http://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt=''
                  width={144}
                  height={144}
                  className='w-36 h-36 rounded-full object-cover'
                  />
                </div>
                <div className='w-2/3'>
                  
                  <h1 className='font-semibold '>Dean Uttam</h1>
                  <p className='text-xs text-gray-500'>loremm ispum lorem ispum ispum lorem ispum.</p>
                  
                </div>
            </div>
            <div className='flex-1'></div>
          </div>
        </div>
        <div className='w-full xl:w-1/3'>Right</div>
    </div>
  )
}

export default SingalTeacherPage;