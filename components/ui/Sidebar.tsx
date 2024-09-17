"use client"
import React from 'react'
import UserItem from './UserItem'
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from './command'
import { MonitorCog, NotebookTabs, Rows4, ScrollText, Workflow } from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {

    const leftNavBarItems = [
        {
            group: "Unindex",
            items: [
                {
                    link: "/unindex/unindexlist",
                    text: "Unindex List",
                    icon: <Rows4 />
                },
                {
                    link: "/unindex/casehistory",
                    text: "Case History",
                    icon: <NotebookTabs />
                }
            ]
        },
        {
            group: "Workflow",
            items: [
                {
                    link: "/",
                    text: "Workqueue",
                    icon: <Workflow />
                },
                {
                    link: "/",
                    text: "Configurations",
                    icon: <MonitorCog />
                },
                {
                    link: "/",
                    text: "File",
                    icon: <ScrollText />
                }
            ]
        }
    ];
    return (
        <div className='fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4'>
            <UserItem />
            <div className='grow'>
                <Command style={{ overflow: 'visible' }}>
                    {leftNavBarItems.map((main: any, index: number) => (
                        <CommandList style={{ overflow: 'visible' }}>
                            <CommandGroup heading={main.group} key={index}>
                                {main.items.map((item: any, key: number) => (
                                    <CommandItem key={key} >
                                        <Link href={item.link} className='flex gap-2 cursor-pointer'>
                                            {item.icon}
                                            {item.text}
                                        </Link>
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