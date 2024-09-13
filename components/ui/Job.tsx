import React from 'react'

const Job = ({ data }) => {
    return (
        <div>
            <h2>Salary : {data.salary}</h2>
            <h2>Position : {data.position}</h2>
            <h2>Company : {data.company}</h2>
            <br />
        </div>
    )
}

export default Job