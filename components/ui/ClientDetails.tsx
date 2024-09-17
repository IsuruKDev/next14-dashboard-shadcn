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

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from '@/components/ui/select'

const ClientDetails = () => {
    return (
        <>
            <Card className="w-[50%]">
                <CardHeader>
                    <CardTitle>Client Details</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="clientType">Client Type</Label>
                                <div className="flex space-x-1.5">
                                    <Select>
                                        <SelectTrigger id="clientType">
                                            <SelectValue placeholder="Select Client Type" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="employer">Employer</SelectItem>
                                            <SelectItem value="member">Member</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button >Search</Button>

                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Client Type</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead>Account Number</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Given</TableHead>
                                <TableHead>Dob</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Employer</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>Member</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardFooter>
            </Card>

        </>
    )
}

export default ClientDetails