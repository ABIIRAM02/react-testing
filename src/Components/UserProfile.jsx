import React from 'react'

const UserProfile = ({name , role , email , working}) => {
  return (
    <div>
        <h2>Name : {name.length >= 10 ? name.slice(0 , 10).concat('...') : name}</h2>
        <h2>Email : {email}</h2>
        <h2>Role : {role}</h2>
        <h2>job-Status : {working ? 'Working' : 'Null'}</h2>
    </div>
  )
}

export default UserProfile