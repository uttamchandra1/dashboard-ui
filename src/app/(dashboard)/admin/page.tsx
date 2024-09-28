import UserCard from '@/components/UserCard';
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col gap-4 md:flex-row'>
      <div className='w-full lg:w-2/3'>
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='students'/>
          <UserCard type='teachers'/>
          <UserCard type='parents'/>
          <UserCard type='staffs'/>
        </div>
      </div>
      <div className='w-full lg:w-1/3'>
        Right
      </div>
    </div>
  )
}

export default AdminPage;
