import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

export const ChangeRole = () => {
    const [userRole, setUserRole] = useState('')
  return (
    <div className='sort'>
        <form className='--flex-start'>
    <select value={userRole} onChange={(e)=>setUserRole(e.target.value)}>
        <option value="">-- select --</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="pending">Pending</option>
        <option value="blocked">Blocked</option>
    </select>
    <button className='--btn --btn-primary'><FaCheck size={15}/></button>
        </form>
    </div>
  )
}
