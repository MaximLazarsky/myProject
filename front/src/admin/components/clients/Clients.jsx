import {Typography} from '@material-ui/core';
import useStyles from './clientsStyles';
import ClientItem from './clientItem/ClientItem'
import ClientModalContainer from './clientItem/ClientModalContainer'
import {Button} from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

export default function Clients({clients,
	 open,
	 toggleOpen,
	 onClickAction,
	 setName,
	 setSurname,
	 setEmail
	}) {
	const classes = useStyles()

	return (
	<div className={`container ${classes.clientsContainer}`}>
		<div className={classes.clientTitle}>
			<Typography variant="h4" color="primary" className={classes.title} > List of Clients: </Typography>
			<div>
				<Button className={classes.linkButtonStyles} 
				onClick={toggleOpen} 
				color="primary" 
				variant="outlined" 
				endIcon={<AccessibilityNewIcon />} >  
					add client
				</Button>
				<ClientModalContainer open={open} 
				toggleOpen={toggleOpen} 
				title={"Add new client"} 
				buttonName={"Add client"}
				onClickAction={onClickAction}
				setName={setName}
				setSurname={setSurname}
				setEmail={setEmail}
				/>
			</div>
		</div>
	{clients.map((client) => <ClientItem key={client._id} client={client} />)}
	</div>
	)
}