import React from 'react';
import UpdateClient from './UpdateClient'
import {useSelector} from 'react-redux'

export default function UpdateClientContainer({open, handleOpen, handleClose, clientId}) {
	const {clients} = useSelector((state) => state.data.data)

	return <UpdateClient
	open={open}
	handleOpen={handleOpen}
	handleClose={handleClose}
	clientId={clientId}
	clients={clients}
	/>
	
	}