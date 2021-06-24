import React from 'react';
import ClientModal from './ClientModal'

export default function ClientModalContainer ({open, 
	toggleOpen, 
	title, 
	buttonName, 
	currentClientName, 
	currentClientSurname,
	currentClientEmail,
	onClickAction,
	setName,
	setSurname,
	setEmail
}) {

const onChangeName = (e) => setName(e.target.value)
const onChangeSurname = (e) => setSurname(e.target.value)
const onChangeEmail = (e) => setEmail(e.target.value)

	return (
		<ClientModal open={open} 
		toggleOpen={toggleOpen}
		onChangeName={onChangeName}
		onChangeSurname={onChangeSurname}
		onChangeEmail={onChangeEmail}
		onClickAction={onClickAction}
		title={title}
		buttonName={buttonName}
		currentClientName={currentClientName}
		currentClientSurname={currentClientSurname}
		currentClientEmail={currentClientEmail}
		/>
	)
}