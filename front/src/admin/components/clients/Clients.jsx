import {Typography, Button} from '@material-ui/core';
import ClientsContainer from './ClientsContainer';
import useStyles from './clientsStyles';
import ClientItem from './clientItem/ClientItem'

export default function Clients({clients}) {
	const classes = useStyles()

	return (
	<div className={`container ${classes.clientsContainer}`}>
	<Typography variant="h4" color="primary" className={classes.title} > List of Clients: </Typography>
	{clients.map((client) => <ClientItem key={client._id} client={client} />)}
	</div>
	)
}