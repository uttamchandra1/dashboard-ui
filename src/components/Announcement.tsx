import React from 'react'

const Announcement = () => {
  return (
    <div className='bg-white rounded-xl p-4 '>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold '>Announcement</h1>
            <p className='text-gray-300 text-xs'>View all</p>
        </div>

        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-lamaskyLight rounded-md p-4 '>
                <div className='flex items-center justify-between'>
                    <h2 className=' font-medium text-gray-600'>Lorem ispum lorem ispum</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-full p-1'>2025-01-01</span>
                </div>
                <p className='text-sm text-gray-400'> Hey this is announcement please look into it</p>
            </div>

            <div className='bg-lamayellowlight rounded-md p-4 '>
                <div className='flex items-center justify-between'>
                    <h2 className=' font-medium text-gray-600'>Lorem ispum lorem ispum</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-full p-1'>2025-01-01</span>
                </div>
                <p className='text-sm text-gray-400'> Hey this is announcement please look into it</p>
            </div>

            <div className='bg-lamapurplelight rounded-md p-4 '>
                <div className='flex items-center justify-between'>
                    <h2 className=' font-medium text-gray-600'>Lorem ispum lorem ispum</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-full p-1'>2025-01-01</span>
                </div>
                <p className='text-sm text-gray-400'> Hey this is announcement please look into it</p>
            </div>


        </div>
    </div>
  )
}

export default Announcement