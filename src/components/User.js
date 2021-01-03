import React from 'react'

const User = (props) => {
    const { user } = props
    console.log(user)
    return (
        <div className='user-card'>
            <h5 className="user-card-header">{user.first_name}</h5>
        </div>
    )
}

export default User