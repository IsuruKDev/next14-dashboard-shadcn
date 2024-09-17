"use client"
import React from 'react'
import UserItem from './UserItem'
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from './command'
import { BellRing, Cog, Fuel, GlobeLock, Inbox, ScrollText, UserPen } from 'lucide-react'

const Sidebar = () => {

    const leftNavBarItems = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    text: "Profile",
                    icon: <UserPen />
                },
                {
                    link: "/",
                    text: "Inbox",
                    icon: <Inbox />
                },
                {
                    link: "/",
                    text: "Billing",
                    icon: <Fuel />
                },
                {
                    link: "/",
                    text: "Notifications",
                    icon: <BellRing />
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings",
                    icon: <Cog />
                },
                {
                    link: "/",
                    text: "Privacy",
                    icon: <GlobeLock />
                },
                {
                    link: "/",
                    text: "Logs",
                    icon: <ScrollText />
                },
            ]
        }
    ];
    return (
        <div className='fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4'>
            <UserItem />
            <div className='grow'>
                <Command style={{ overflow: 'visible' }}>
                    {leftNavBarItems.map((main: any, key: number) => (
                        <CommandList style={{ overflow: 'visible' }}>
                            <CommandGroup heading={main.group} key={key}>
                                {main.items.map((item: any, key: number) => (
                                    <CommandItem key={key} className='flex gap-2 cursor-pointer'>
                                        {item.icon}
                                        {item.text}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                            <CommandSeparator />
                        </CommandList>
                    ))}
                </Command>
            </div>
            <div>Settings</div>
        </div>
    )
}

export default Sidebar