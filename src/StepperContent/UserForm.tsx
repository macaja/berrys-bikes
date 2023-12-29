import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import { type User } from '../types'

const UserForm = () => {
  const [user, setUser] = useState({} as User)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, lastName: event.target.value })
  }
  return (
		<Box component="form" autoComplete="off">
			<TextField
				sx={{ m: 1, width: '33ch' }}
				label="Family name"
				color="primary"
				onChange={handleInputChange}
				focused
				autoFocus
			/>
			<TextField sx={{ m: 1, width: '33ch' }} label="First name" color="primary" focused />
			<TextField sx={{ m: 1, width: '33ch' }} label="Middle name" color="primary" focused />
			<TextField sx={{ m: 1, width: '103ch' }} label="Address" color="primary" focused />
			<TextField sx={{ m: 1, width: '25ch' }} label="Passport country" color="primary" focused />
			<TextField sx={{ m: 1, width: '76ch' }} label="Passport number" color="primary" focused />
			<TextField sx={{ m: 1, width: '25ch' }} label="Visa grant number" color="primary" focused />
			<TextField sx={{ m: 1, width: '25ch' }} label="Mobile number" color="primary" focused />
			<TextField sx={{ m: 1, width: '49ch' }} label="Email address" color="primary" focused />
		</Box>
  )
}

export default UserForm
