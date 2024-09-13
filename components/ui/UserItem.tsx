"use client"
import React from 'react'

const UserItem = () => {
    return (
        <>
            <div className='flex items-center justify-between gap-2 border rounded-[8px] p-2'>
                <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700]
                    flex items-center justify-center">UN</div>
                <div className='grow'>
                    <p className='text-[16px] font-bold'>User Novigi</p>
                    <p className='text-[12px] text-neutral-500'>user@novigi.com.au</p>
                </div>
            </div>
        </>
    )
}

export default UserItem