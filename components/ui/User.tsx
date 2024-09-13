import React from 'react'

const User = ({ data }) => {
    return (
        <div>
            <h1>Name : {data.name}</h1>
            <h1>Email : {data.email}</h1>
            <br />
        </div>
    )
}

export default User