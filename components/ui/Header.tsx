"use client"
import React from 'react'
import CommandDemo from './CommandDemo'

const Header = () => {
    return (
        <div className='flex grid-cols-2 gap-4 p-4 border-b'>
            <div className="text-4xl font-bold">
                <span className="text-gray-800">Welome to Novigi Workflow Dashboard</span>
            </div>
        </div>
    )
}

export default Header