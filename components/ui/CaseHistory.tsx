import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const CaseHistory = () => {
    return (
        <>
            <Card className="w-[50%]">
                <CardHeader>
                    <CardTitle>Case History</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Case ID</TableHead>
                                <TableHead>Area</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>SubType</TableHead>
                                <TableHead>Date Created</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>001</TableCell>
                                <TableCell>Area A</TableCell>
                                <TableCell>Category Y</TableCell>
                                <TableCell>Type 1</TableCell>
                                <TableCell>SubType 1</TableCell>
                                <TableCell>2024-09-01</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>

            </Card>

        </>
    )
}

export default CaseHistory