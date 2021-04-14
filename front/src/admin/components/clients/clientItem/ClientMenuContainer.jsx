import ClientMenu from './ClientMenu'
import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import {updateClient} from "../../../redux/actions/clients"
import {deleteClient} from "../../../redux/actions/clients"
import {useDispatch} from "react-redux"

export default function ClientMenuContainer ({clientId}) {
	const dispatch = useDispatch()
	const {clients} = useSelector((state) => state.data.data)
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const indexOfId = clients.findIndex(i => i._id === clientId.toString())
  	const currentClient = clients[indexOfId]
	const [name, setName] = useState(currentClient.clientName)
  	const [surname, setSurname] = useState(currentClient.clientSurname)
  	const [email, setEmail] = useState(currentClient.clientEmail)
	
	const toggleOpen = () => {
		setOpen(!open);
	};

	const onClickUpdateClient = () => {
		dispatch(updateClient({clientId, name, surname, email}))
		toggleOpen()
	  }

	const handleDeleteClient = () => {
		dispatch(deleteClient(clientId))
		setAnchorEl(null);
	}

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};
	
	const handleOpenModal = () => {
		setOpen(true);
		handleCloseMenu()
	}
	  
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	}
	
	return (
		<ClientMenu clientId={clientId}
		handleDeleteClient={handleDeleteClient}
		onClickAction={onClickUpdateClient}
		anchorEl={anchorEl}
		setName={setName}
		setSurname={setSurname}
		setEmail={setEmail}
		open={open}
		currentClientName={currentClient.clientName}
     	currentClientSurname={currentClient.clientSurname}
      	currentClientEmail={currentClient.clientEmail}
		toggleOpen={toggleOpen}
		handleClick={handleClick}
		handleCloseMenu={handleCloseMenu}
		handleOpenModal={handleOpenModal}
		/>
	)
}