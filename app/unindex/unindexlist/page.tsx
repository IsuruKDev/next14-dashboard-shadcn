import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import { Command, CommandInput } from '@/components/ui/command'


const UnIndex = () => {
    return (
        <>

            <Command>
                <CommandInput placeholder="Type a command or search..." />
            </Command>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Priority</TableHead>
                        <TableHead>Doc ID</TableHead>
                        <TableHead>Document Date </TableHead>
                        <TableHead>Created Date</TableHead>
                        <TableHead>Import Channel</TableHead>
                        <TableHead>Document Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Modified Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>012345</TableCell>
                        <TableCell>2024-09-04</TableCell>
                        <TableCell>2023-10-12</TableCell>
                        <TableCell></TableCell>
                        <TableCell>example1_file</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>2024-09-04</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>012345</TableCell>
                        <TableCell>2024-09-04</TableCell>
                        <TableCell>2023-10-12</TableCell>
                        <TableCell></TableCell>
                        <TableCell>example2_file</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>2024-09-04</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>012345</TableCell>
                        <TableCell>2024-09-04</TableCell>
                        <TableCell>2023-10-12</TableCell>
                        <TableCell></TableCell>
                        <TableCell>example3_file</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>2024-09-04</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>012345</TableCell>
                        <TableCell>2024-09-04</TableCell>
                        <TableCell>2023-10-12</TableCell>
                        <TableCell></TableCell>
                        <TableCell>example4_file</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>2024-09-04</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>012345</TableCell>
                        <TableCell>2024-09-04</TableCell>
                        <TableCell>2023-10-12</TableCell>
                        <TableCell></TableCell>
                        <TableCell>example5_file</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>2024-09-04</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>6</TableCell>
                        <TableCell>012345</TableCell>
                        <TableCell>2024-09-04</TableCell>
                        <TableCell>2023-10-12</TableCell>
                        <TableCell></TableCell>
                        <TableCell>example6_file</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>2024-09-04</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>7</TableCell>
                        <TableCell>012345</TableCell>
                        <TableCell>2024-09-04</TableCell>
                        <TableCell>2023-10-12</TableCell>
                        <TableCell></TableCell>
                        <TableCell>example7_file</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>2024-09-04</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>8</TableCell>
                        <TableCell>012345</TableCell>
                        <TableCell>2024-09-04</TableCell>
                        <TableCell>2023-10-12</TableCell>
                        <TableCell></TableCell>
                        <TableCell>example8_file</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>2024-09-04</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>9</TableCell>
                        <TableCell>012345</TableCell>
                        <TableCell>2024-09-04</TableCell>
                        <TableCell>2023-10-12</TableCell>
                        <TableCell></TableCell>
                        <TableCell>example9_file</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>2024-09-04</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>10</TableCell>
                        <TableCell>012345</TableCell>
                        <TableCell>2024-09-04</TableCell>
                        <TableCell>2023-10-12</TableCell>
                        <TableCell></TableCell>
                        <TableCell>example11_file</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>2024-09-04</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>

    )
}

export default UnIndex