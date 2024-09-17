import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const NewCase = () => {
    return (
        <Card className="w-[50%]">
            <CardHeader>
                <CardTitle>Create a new case</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className='flex justify-between space-x-4'>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="area">Area</Label>
                                <Select>
                                    <SelectTrigger id="area">
                                        <SelectValue placeholder="Select Area" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="area1">Area 1</SelectItem>
                                        <SelectItem value="area2">Area 2</SelectItem>
                                        <SelectItem value="area3">Area 3</SelectItem>
                                        <SelectItem value="area4">Area 4</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="category">Category</Label>
                                <Select>
                                    <SelectTrigger id="category">
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="category1">Category 1</SelectItem>
                                        <SelectItem value="category2">Category 2</SelectItem>
                                        <SelectItem value="category3">Category 3</SelectItem>
                                        <SelectItem value="category4">Category 4</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="requestType">Request Type</Label>
                                <Select>
                                    <SelectTrigger id="requestType">
                                        <SelectValue placeholder="Select Request Type" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="requestType1">Request Type 1</SelectItem>
                                        <SelectItem value="requestType2">Request Type 2</SelectItem>
                                        <SelectItem value="requestType3">Request Type 3</SelectItem>
                                        <SelectItem value="requestType4">Request Type 4</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="subType">SubType</Label>
                                <Select>
                                    <SelectTrigger id="subType">
                                        <SelectValue placeholder="Select SubType" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="subType1">SubType 1</SelectItem>
                                        <SelectItem value="subType2">SubType 2</SelectItem>
                                        <SelectItem value="subType3">SubType 3</SelectItem>
                                        <SelectItem value="subType4">SubType 4</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Clear</Button>
                <Button>Add New Case</Button>
            </CardFooter>
        </Card>
    )
}

export default NewCase