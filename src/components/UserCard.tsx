import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type : string}) => {
  return (
    <div className='rounded-2xl odd:bg-lamapurple even:bg-lamayellow p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>24/01/2024</span>
        <Image src="/more.png" width={14} height={14} alt='' />
      </div>
      <h1 className='text-2xl font-semibold my-4'>6,123</h1>
      <h2 className='capitalize text-sm text-gray-500 font-medium'>{type}</h2>
    </div>
  )
}

export default UserCard
