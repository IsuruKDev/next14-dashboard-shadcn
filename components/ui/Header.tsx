"use client"
import React from 'react'
import CommandDemo from './CommandDemo'

const Header = () => {
    return (
        <div className='flex grid-cols-2 gap-4 p-4 border-b'>
            <CommandDemo />
        </div>
    )
}

export default Header