import Job from '@/components/ui/Job'
import User from '@/components/ui/User'
import React from 'react'

const First = () => {
    const htmlContent = <h1>ABC</h1>
    const users = [
        {
            name: "Isuru Kularathna",
            email: "isuru@example.com"
        },
        {
            name: "John Doe",
            email: "john@example.com"
        }, {
            name: "Cathey Sierra",
            email: "cathey@example.com"
        }
    ]

    const details = [
        {
            salary: 90000,
            position: "Senior Engineer",
            company: "Amazon"
        },
        {
            salary: 20000,
            position: "Junior Engineer",
            company: "Google"
        },
        {
            salary: 10000,
            position: "Project Manager",
            company: "Netflix"
        }
    ]
    return (
        <div>
            {htmlContent}
            {htmlContent}

            <ul>
                {users.map((user, index) => (
                    <User key={index} data={user} />
                ))}
            </ul>
            <br />

            {details.map((detail, index) => (
                <Job key={index} data={detail} />
            ))}
        </div>
    );
}

export default First